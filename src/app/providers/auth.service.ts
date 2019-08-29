import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/types/user';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn:any;
  public redirectUrl:any;
  public fakeUser:User = {hostId:'',password:'', role:''};
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  ngOnInit(){
    console.log(localStorage.getItem("isLoggedIn"));
  }
  public login(user:User):Observable<User> {
    return this.http.get<User[]>(`teams/?phone=${user.hostId}`).pipe(
      switchMap( resp => {
        return of ( resp[0] ? resp[0] : this.fakeUser );
      })
    )
  }
  public logout(){
    this.isLoggedIn = false;
    this.router.navigate(['home']);
    localStorage.removeItem("isLoggedIn");
  }
}
