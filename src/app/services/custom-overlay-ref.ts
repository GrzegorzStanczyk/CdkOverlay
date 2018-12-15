import { OverlayRef } from '@angular/cdk/overlay';

export class CustomOverlayRef {
  constructor(private overlayRef: OverlayRef) {}

  public close(): void {
    this.overlayRef.dispose();
  }
}
