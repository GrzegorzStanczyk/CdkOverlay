import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { EntryComponent } from '../components/entry/entry.component';
import { CustomOverlayRef } from './custom-overlay-ref';
import { CUSTOM_OVERLAY_DIALOG_DATA } from './custom-overlay.token';

export interface EntryData {
  title: string;
}

export interface CustomOverlayConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  data?: EntryData;
}

const DEFAULT_OVERLAY_CONFIG: CustomOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
};

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    private overlay: Overlay,
    private injector: Injector) { }

  public open(config: CustomOverlayConfig = {}): CustomOverlayRef {
    const dialogConfig = {...DEFAULT_OVERLAY_CONFIG, ...config};
    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new CustomOverlayRef(overlayRef);

    const injector = this.createInjector(dialogConfig, dialogRef);
    const entryPortal = new ComponentPortal(EntryComponent, null, injector);

    overlayRef.attach(entryPortal);
    overlayRef.backdropClick().subscribe(() => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: CustomOverlayConfig): OverlayRef {
    const overlayConfig = this.getOverlayConfig(config);

    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: CustomOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private createInjector(config: CustomOverlayConfig, dialogRef: CustomOverlayRef): PortalInjector {
    const injectionToken = new WeakMap();

    injectionToken.set(CustomOverlayRef, dialogRef);
    injectionToken.set(CUSTOM_OVERLAY_DIALOG_DATA, config.data);

    return new PortalInjector(this.injector, injectionToken);
  }
}
