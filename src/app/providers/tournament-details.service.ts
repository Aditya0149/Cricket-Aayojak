import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsService {
  public host:any = new BehaviorSubject<string>("Hey");
  constructor(private http: HttpClient) { }
  public getTournaments(): Observable<Object[]> {
    //return this.host ? this.http.get<Object[]>("tournaments/?hostid="+this.host.hostId) : this.http.get<Object[]>("tournaments");
    return this.http.get<Object[]>("tournaments");
  }
  public getTournamentDetails(id:string): Observable<Object> {
    return this.http.get<Object>(`tournaments/${id}`);
  }
  public getFixtures(id:string): Observable<Object[]> {
    return this.http.get<Object[]>("fixtures/?tournamentId="+id);
  }
  public getPointsTable(id:string): Observable<Object[]> {
    return this.http.get<Object[]>("pointsTable/?tournamentId="+id);
  }
}