import { Injectable } from '@angular/core';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { of, EMPTY }  from 'rxjs';
import { mergeMap }         from 'rxjs/operators';

import { HostService } from '../../providers/host.service';

@Injectable({
  providedIn: 'root'
})
export class HostProfileResolverService implements Resolve<any>  {
  constructor(private hostService:HostService, private router:Router) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let id = route.paramMap.get('id') || localStorage.getItem("user")['id'];
    debugger;
    return this.hostService.getTeamProfile(id).pipe(
      mergeMap(details => {
        if(details && id) {
          return of(details);
        } else {
          this.router.navigate(['/home']);
          return EMPTY;
        }
      })
    )
  }
}
