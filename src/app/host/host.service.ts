import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { TournamentDetailsService } from '../providers/tournament-details.service';
import { AuthService } from '../providers/auth.service';

@Injectable()
export class HostService {
  public joinRequests;
  constructor(private http:HttpClient, private tournamentDetailsService:TournamentDetailsService, private authService:AuthService) {
    
  }
  public getTeamProfile(id:string):Observable<any>{
    return this.http.get<Object[]>(`teams/${id}`);
  }
}