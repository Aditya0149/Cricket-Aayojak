import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanActivate, Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService:AuthService,private router:Router) {}
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.checkLogin(state.url);
  }
  checkLogin(url: string): boolean {
    let LSUser = localStorage.getItem('user');
    if ( this.authService.user || LSUser ) return true; 
    this.authService.redirectUrl = url;
    this.router.navigate([{ outlets: { popup: ['login'] } }]);
    return false;
  }
}
