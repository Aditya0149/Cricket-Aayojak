import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        let authReq = req.clone({
            headers:new HttpHeaders({
                'Content-Type':  'application/json'
            })
        })
        console.log("authReq ",authReq);
        return next.handle(req);    
    }
}