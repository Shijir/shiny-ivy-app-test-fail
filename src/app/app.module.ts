import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, ParentViewContainer, PreviouslySibling } from './app.component';

@NgModule({
  declarations: [
    AppComponent, ParentViewContainer, PreviouslySibling
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
