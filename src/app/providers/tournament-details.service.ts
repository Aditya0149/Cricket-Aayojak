import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject, BehaviorSubject} from "rxjs";
const baseUrl = "tounramentDetails";
@Injectable()
export class TournamentDetailsService {
    public host : any = new BehaviorSubject<string>("Hey");
    public name : string = "name";
    constructor(private http : HttpClient) {}
    public getTournaments(): Observable<Object[]> {
        return this.http.get<Object[]>(baseUrl + "/tournaments");
    }
    public getMyTournaments(teamId): Observable<Object[]> {
        return this.http.get<Object[]>(`${baseUrl}/myTournaments?teamId=${teamId}`);
    }
    public getTournamentDetails(id : string): Observable<Object> {
        return this.http.get<Object>(`${baseUrl}/tournaments/${id}`);
    }
    public getFixtures(id : string): Observable<Object[]> {
        return this.http.get<Object[]>(`${baseUrl}/fixtures/?tournamentId=${id}`);
    }
    public getPointsTable(id : string): Observable<Object[]> {
        return this.http.get<Object[]>(`${baseUrl}/pointsTable/?tournamentId=${id}`);
    }
    public saveTournament(tournament): Observable<any> {
        return this.http.post<any>(`${baseUrl}/save`,tournament);
    }
    public deleteTournament(id): Observable<any> {
        return this.http.delete<any>(`${baseUrl}/tournaments/${id}`);
    }
    public editTournament(tournament): Observable<any> {
        return this.http.patch<any>(`${baseUrl}/tournaments`,tournament);
    }
}

