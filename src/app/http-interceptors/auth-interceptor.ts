import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        const authReq = req.clone({
            setHeaders: { 
                'Content-Type':  'application/json',
                'Authorization': 'my-auth-token'
             }
        })
        return next.handle(authReq);
    }
}