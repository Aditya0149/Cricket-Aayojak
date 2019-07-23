import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const tournaments: any = [
      { id: 1, hostid: 'host1' },
      { id: 2, hostid: 'host2' },
      { id: 3, hostid: 'host1' },
      { id: 4, hostid: 'host3' },
      { id: 5, hostid: 'host3' },
      { id: 6, hostid: 'host1' },
      { id: 7, hostid: 'host2' },
      { id: 8, hostid: 'host1' }
    ];
    const fixtures: any = [
      { id: "1", team1: "T1", team2: "T2", status: "not started", tournamentId: "1", statusDetails: "T1 won by 10 runs" },
      { id: "2", team1: "T2", team2: "T3", status: "not started", tournamentId: "2", statusDetails: "T3 won by 10 runs" },
      { id: "3", team1: "T4", team2: "T5", status: "not started", tournamentId: "1", statusDetails: "T41 won by 10 runs" },
      { id: "4", team1: "T1", team2: "T2", status: "not started", tournamentId: "1", statusDetails: "T2 won by 10 runs" },
      { id: "4", team1: "T3", team2: "T5", status: "not started", tournamentId: "3", statusDetails: "T5 won by 10 runs" },
      { id: "5", team1: "T2", team2: "T6", status: "done", tournamentId: "3", statusDetails: "Venue : Pune staion" },
      { id: "6", team1: "T7", team2: "T2", status: "done", tournamentId: "1", statusDetails: "Venue : Pune staion" },
      { id: "7", team1: "T2", team2: "T5", status: "done", tournamentId: "4", statusDetails: "Venue : Pune staion" },
      { id: "8", team1: "T2", team2: "T1", status: "done", tournamentId: "4", statusDetails: "Venue : Pune staion" },
      { id: "9", team1: "T6", team2: "T3", status: "done", tournamentId: "1", statusDetails: "Venue : Pune staion" },
      { id: "10", team1: "T1", team2: "T3", status: "done", tournamentId: "5", statusDetails: "Venue : Pune staion" },
      { id: "11", team1: "T4", team2: "T1", status: "done", tournamentId: "5", statusDetails: "Venue : Pune staion" },
      { id: "12", team1: "T1", team2: "T2", status: "done", tournamentId: "5", statusDetails: "Venue : Pune staion" },
      { id: "13", team1: "T4", team2: "T2", status: "done", tournamentId: "1", statusDetails: "Venue : Pune staion" }
    ];
    const pointsTable: any = [
      { id: "1", team: "T1", points: "2", tournamentId: "1"},
      { id: "2", team: "T2", points: "4", tournamentId: "2"},
      { id: "3", team: "T4", points: "0", tournamentId: "1" },
      { id: "4", team: "T1", points: "10", tournamentId: "1"},
      { id: "4", team: "T3", points: "6", tournamentId: "3"},
      { id: "5", team: "T2", points: "2", tournamentId: "3"},
      { id: "6", team: "T7", points: "4", tournamentId: "1"},
      { id: "7", team: "T2", points: "2", tournamentId: "4"},
      { id: "8", team: "T2", points: "6", tournamentId: "4"},
      { id: "9", team: "T6", points: "2", tournamentId: "1"},
      { id: "10", team: "T1", points: "10", tournamentId: "5"},
      { id: "11", team: "T4", points: "2", tournamentId: "5"},
      { id: "12", team: "T1", points: "4", tournamentId: "5"},
      { id: "13", team: "T4", points: "4", tournamentId: "1"}
    ];
    return { tournaments, fixtures, pointsTable };
  }



  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tournaments: any): number {
    return tournaments.length > 0 ? Math.max(...tournaments.map(tournament => tournament.id)) + 1 : 1;
  }
}
