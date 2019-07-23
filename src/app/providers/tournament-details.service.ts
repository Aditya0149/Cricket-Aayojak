import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsService {
  public host:any;
  private url = "api/tournaments";
  constructor(private http: HttpClient) { }
  public getTournaments(): Observable<Object[]> {
    return this.host ? this.http.get<Object[]>("api/tournaments/?hostid="+this.host.hostId) : this.http.get<Object[]>("api/tournaments");
  }
  public getTournamentDetails(id:string): Observable<Object> {
    return this.http.get<Object>(`${this.url}/${id}`);
  }
  public getFixtures(id:string): Observable<Object[]> {
    return this.http.get<Object[]>("api/fixtures/?tournamentId="+id);
  }
  public getPointsTable(id:string): Observable<Object[]> {
    return this.http.get<Object[]>("api/pointsTable/?tournamentId="+id);
  }
}