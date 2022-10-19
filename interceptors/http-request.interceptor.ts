import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


// TODO: Step 10 - Import env file
import { environment } from './../../environments/environment';
 

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // TODO: Step 11 - Modify the request
    let req = request.clone({
      url: `${environment.endpoint}${request.url}`
    });

    // TODO: Step 12 - Return the new request:HttpRequest
    return next.handle(req);
  }

}
