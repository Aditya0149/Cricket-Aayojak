import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { TournamentDetailsService } from '../../providers/tournament-details.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsResolverService implements Resolve<any> {
  constructor(private tournamentDetailsService:TournamentDetailsService, private router:Router) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let id = route.paramMap.get('id');
    return this.tournamentDetailsService.getTournamentDetails(id).pipe(
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
