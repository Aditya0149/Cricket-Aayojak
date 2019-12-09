import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/types/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class AuthService {
  public user:any = undefined;
  public redirectUrl:any;
  constructor(
    private http:HttpClient,
    private router:Router
  ) {
    let user = localStorage.getItem("user");
    if (user) this.user = JSON.parse(user);
  }
  public login(user:User):Observable<any> {
    return this.http.post<any>(`users/login/`,user);
  }
  public logout(){
    this.user = undefined;
    this.router.navigate(['home']);
    localStorage.removeItem("user");
  }
}
