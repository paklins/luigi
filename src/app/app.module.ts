import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LuigiFaceModule } from './luigi-face/luigi-face.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LuigiFaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
