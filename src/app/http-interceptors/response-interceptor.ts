import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        console.log("Request sent ",req);
        return next.handle(req).pipe(
            retry(3),
            tap( resp => {
              console.log("Response received : ",resp);
            }),
            catchError(this.handleError)
        );  
    }
    private handleError(resp: HttpErrorResponse) {
        if (resp.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', resp.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${resp.status}, ` +
            `body was: ${resp.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
      };
}