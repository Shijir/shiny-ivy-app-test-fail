import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, AnchorViewContainer, PreviouslySibling } from './app.component';

@NgModule({
  declarations: [
    AppComponent, AnchorViewContainer, PreviouslySibling
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
