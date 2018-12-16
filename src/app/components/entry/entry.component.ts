import { Component, OnInit, Inject } from '@angular/core';
import { CUSTOM_OVERLAY_DIALOG_DATA } from 'src/app/services/custom-overlay.token';
import { EntryData } from 'src/app/services/overlay.service';
import { CustomOverlayRef } from 'src/app/services/custom-overlay-ref';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(
    private overlayRef: CustomOverlayRef,
    @Inject(CUSTOM_OVERLAY_DIALOG_DATA) public data: EntryData) { }

  ngOnInit() {
  }

  public close(): void {
    this.overlayRef.close('data passed from overlay component');
  }
}
