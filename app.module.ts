import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// TODO: Step 1.a - Module HttpClient import
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // TODO: Step 1.b - Module HttpClient import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
