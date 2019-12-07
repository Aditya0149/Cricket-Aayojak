import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/types/user';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class AuthService {
  public user:any = undefined;
  public redirectUrl:any;
  public fakeUser:User = {id:'',password:'', role:''};
  constructor(
    private http:HttpClient,
    private router:Router
  ) { 
    console.log('Auth service const called');
  }
  ngOnInit(){
    this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : undefined;
  }
  public login(user:User):Observable<User> {
    return this.http.get<User[]>(`users/?id=${user.id}`).pipe(
      switchMap( resp => {
        return of ( resp[0] ? resp[0] : this.fakeUser );
      })
    )
  }
  public logout(){
    this.user = undefined;
    this.router.navigate(['home']);
    localStorage.removeItem("user");
  }
}
