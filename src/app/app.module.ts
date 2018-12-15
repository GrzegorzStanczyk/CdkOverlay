import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  entryComponents: [
    EntryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
