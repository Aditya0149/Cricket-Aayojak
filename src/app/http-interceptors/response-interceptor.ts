import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators'
import { Router } from '@angular/router';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private router:Router) {}
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
//        console.log("Request sent ",req);
        return next.handle(req).pipe(
            retry(2),
            tap( resp => {
//              console.log("Response received : ",resp);
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
        //if (resp['status'] == 404) this.router.navigate(['**']);
        console.error(
          `Backend returned code ${resp.status}, ` +
          `body was: ${resp.error}`);
        }

        // return an observable with a user-facing error message
        return throwError(resp);
      };
}