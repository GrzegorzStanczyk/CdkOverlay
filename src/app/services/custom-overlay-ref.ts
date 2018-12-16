import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';

export class CustomOverlayRef {
  constructor(private overlayRef: OverlayRef) {}
  private _afterClosed = new Subject<void>();

  public close(): void {
    this.overlayRef.dispose();
    this._afterClosed.next();
    this._afterClosed.complete();
  }

  public afterClose(): Observable<void> {
    return this._afterClosed.asObservable();
  }
}
