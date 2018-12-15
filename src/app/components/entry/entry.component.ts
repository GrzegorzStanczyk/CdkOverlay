import { Component, OnInit, Inject } from '@angular/core';
import { CUSTOM_OVERLAY_DIALOG_DATA } from 'src/app/services/custom-overlay.token';
import { EntryData } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(@Inject(CUSTOM_OVERLAY_DIALOG_DATA) public data: EntryData) { }

  ngOnInit() {
  }

}
