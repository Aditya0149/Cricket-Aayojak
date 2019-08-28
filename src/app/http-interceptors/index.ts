import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { UrlInterceptor } from "./url-interceptor";
import { AuthInterceptor } from './auth-interceptor';
import { ResponseInterceptor } from './response-interceptor';

export const httpInterceptorProviders = [
    { provide:HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi:true },
    { provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true },
    { provide:HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi:true }
]