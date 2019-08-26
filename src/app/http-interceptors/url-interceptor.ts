import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { BASE_URL } from "../../environments/environment";

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>> {
        let newReq = req.clone({url: this.prepareUrl(req.url)});
        console.log("req sent = ", newReq);
        return next.handle(newReq);
    }
    private isAbsoluteUrl(url: string): boolean {
        const absolutePattern = /^https?:\/\//i;
        return absolutePattern.test(url);
    }

    private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : BASE_URL + '/' + url;
    return url.replace(/([^:]\/)\/+/g, '$1');
    }
}