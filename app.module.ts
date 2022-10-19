import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// TODO: Step 1.a - Module HttpClient import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // TODO: Step 1.b - Module HttpClient import
  ],
  providers: [
    
    // TODO: Step 7 - Provide the interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
