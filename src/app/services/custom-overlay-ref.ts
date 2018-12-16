import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';
import { EntryComponent } from '../components/entry/entry.component';

export class CustomOverlayRef {
  public componentInstance: EntryComponent;
  private _afterClosed = new Subject<any>();

  constructor(private overlayRef: OverlayRef) {}

  public close(data?: any): void {
    this.overlayRef.dispose();
    this._afterClosed.next(data);
    this._afterClosed.complete();

    this.componentInstance = null;
  }

  public afterClose(): Observable<any> {
    return this._afterClosed.asObservable();
  }
}
