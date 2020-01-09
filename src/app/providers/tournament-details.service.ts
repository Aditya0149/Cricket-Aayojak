import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import { map, filter } from 'rxjs/operators';

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
        return this.http.get<Object[]>(`${baseUrl}/fixtures/${id}`);
    }
    public deleteFixtures(id : string): Observable<Object[]> {
        return this.http.delete<Object[]>(`${baseUrl}/fixtures/${id}`);
    }
    public getPointsTable(id : string): Observable<Object[]> {
        return this.http.get<Object[]>(`${baseUrl}/pointsTable/${id}`);
    }
    public saveTournament(tournament): Observable<any> {
        return this.http.post<any>(`${baseUrl}/save`,tournament);
    }
    public deleteTournament(id): Observable<any> {
        return this.http.delete<any>(`${baseUrl}/tournaments/${id}`);
    }
    public editTournament(tournament,id): Observable<any> {
        return this.http.patch<any>(`${baseUrl}/tournaments/${id}`,tournament);
    }
    public sendJoinRequest(fromTeamId,fromTeamName,toTournamentId,toTournamentName,toTeamId): Observable<any> {
        return this.http.post<any>(`${baseUrl}/joinRequest`,{
            fromTeamId:fromTeamId,
            fromTeamName:fromTeamName,
            toTournamentId:toTournamentId,
            toTournamentName:toTournamentName,
            toTeamId:toTeamId
        });
    }
    public getJoinRequests(teamId): Observable<any> {
        return this.http.get<any>(`${baseUrl}/joinRequest/${teamId}`)
        .pipe(
            map( items => {
                return items.filter( item => item.status != "accepted");
            }),
            map( items => {
                return items.map(
                item => {
                    return { id:item.id,fromTeamId:item.fromTeamId,from:item.fromTeamName,to:item.toTournamentName,tournamentId:item.toTournamentId }
                })
            })
        )
    }
    public deleteJoinRequest(id): Observable<any> {
        return this.http.delete<any>(`${baseUrl}/joinRequest/${id}`);
    }
    public acceptJoinRequest(id,teamId,teamName,tournamentId): Observable<any> {
        let data = {
            id:id,
            teamId:teamId,
            teamName:teamName,
            tournamentId:tournamentId
        }
        return this.http.post<any>(`${baseUrl}/acceptRequest`,data);
    }
    public saveFixtures(team1Id,team1Name,team2Id,team2Name,date,time,tournamentId): Observable<any> {
        let data = {
            team1Id:team1Id,
            team1Name:team1Name,
            team2Id:team2Id,
            team2Name:team2Name,
            date:date,
            time:time,
            tournamentId:tournamentId
        }
        return this.http.post<any>(`${baseUrl}/fixtures`,data);
    }
    public updateFixtureStatus(id,status): Observable<any> {
        return this.http.patch<any>(`${baseUrl}/fixtures/changeStatus/${id}`,{status:status});
    }
}

