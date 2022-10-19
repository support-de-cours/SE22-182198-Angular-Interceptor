import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  // Intercepter les erreurs reponse Http
  // => 404
  // => Affiche une boite de dialog "alert" avec un message d'erreur

  // response.status
  // response.url

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe( catchError( response => {

      // console.log( response );
      
      switch ( response.status )
      {
        case 404:
          alert(`${response.error} (${response.status})\nAddress : ${response.url}`);
          break;
      }

      // Retourne le message d'erreur à la console JavaScript
      return throwError(() => new Error("An error suddenly appears"));
    } ) );
  }
}
