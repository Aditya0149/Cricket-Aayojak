import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class HostService {
  constructor(private http:HttpClient) {}
  public getTeamProfile(id:string):Observable<any>{
    return this.http.get<Object[]>(`teams/${id}`);
  }
}