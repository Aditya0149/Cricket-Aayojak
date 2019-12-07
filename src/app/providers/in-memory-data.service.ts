import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let teams: any = [
      { id:'1111111111', name:'Team Malewad A', phone: '1111111111', address:'Malewad', captain:'captainA'},
      { id:'2222222222', name:'Team Adali', phone: '2222222222', address:'Adali', captain:'captainB'},
      { id:'3333333333', name:'Team Bhedshi', phone: '3333333333', address:'Bhedshi', captain:'captainC'},
      { id:'4444444444', name:'Team Malewad B', phone: '4444444444', address:'Malewad', captain:'captainD'}
    ];
    let users: any = [
      { id:'1111111111', password: 'a', role:"team"},
      { id:'2222222222', password: 'b', role:"team"},
      { id:'3333333333', password: 'c', role:"team"},
      { id:'4444444444', password: 'd', role:"team"}
    ];
    const tournaments: any = [
      { id: 1, teamId: '1', name:'Malewad A tournament 2019', playerCount: 5, entryFee : 100, reEntryFee : 150, prize1 : 1000, prize2 : 750, startDate : '22-07-2019', endDate : '30-07-2019'},
      { id: 2, teamId: '2', name:'Adali tournament 2019 no 1', playerCount: 5, entryFee : 200, reEntryFee : 250, prize1 : 3000 , prize2  : 1200, startDate : '27-07-2019', endDate : '02-08-2019' },
      { id: 3, teamId: '3', name:'Bhedshi tournament 2019', playerCount: 5, entryFee : 100, reEntryFee : 150, prize1 : 2500 , prize2  : 800, startDate : '02-08-2019', endDate : '10-08-2019' },
      { id: 4, teamId: '4', name:'Malewad B tournament 2019', playerCount: 5, entryFee : 100, reEntryFee : 150, prize1 : 2500 , prize2  : 800, startDate : '22-07-2019', endDate : '25-07-2019' },
      { id: 5, teamId: '2', name:'Adali tournament 2019 no 2', playerCount: 5, entryFee : 100, reEntryFee : 150, prize1 : 2500 , prize2  : 800, startDate : '20-07-2019', endDate : '28-07-2019' }
    ];
    const fixtures: any = [
      { id: "1", team1: "T1", team2: "T2", status: "1", tournamentId: "1", result: "T1 won by 10 runs", venue: "Pune staion", time : '30-07-2019' },
      { id: "2", team1: "T2", team2: "T3", status: "1", tournamentId: "2", result: "T3 won by 10 runs", venue: "Hinjewadi", time : '30-07-2019' },
      { id: "3", team1: "T4", team2: "T5", status: "1", tournamentId: "1", result: "T41 won by 10 runs", venue: "Aundh", time : '30-07-2019' },
      { id: "4", team1: "T1", team2: "T2", status: "1", tournamentId: "1", result: "T2 won by 10 runs", venue: "Baner", time : '30-07-2019' },
      { id: "4", team1: "T3", team2: "T5", status: "1", tournamentId: "3", result: "T5 won by 10 runs", venue: "Hadapsar", time : '30-07-2019' },
      { id: "5", team1: "T2", team2: "T6", status: "0", tournamentId: "3", result: "Not yet started", venue: "Wakadewadi", time : '30-07-2019' },
      { id: "6", team1: "T7", team2: "T2", status: "0", tournamentId: "1", result: "Not yet started", venue: "Nigdi", time : '30-07-2019' },
      { id: "7", team1: "T2", team2: "T5", status: "0", tournamentId: "4", result: "Not yet started", venue: "Gokhlenagar", time : '30-07-2019' },
      { id: "8", team1: "T2", team2: "T1", status: "0", tournamentId: "4", result: "Not yet started", venue: "Katraj", time : '30-07-2019' },
      { id: "9", team1: "T6", team2: "T3", status: "0", tournamentId: "1", result: "Not yet started", venue: "Narhe", time : '30-07-2019' },
      { id: "10", team1: "T1", team2: "T3", status: "0", tournamentId: "5", result: "Not yet started", venue: "Hinjewadi", time : '30-07-2019' },
      { id: "11", team1: "T4", team2: "T1", status: "0", tournamentId: "5", result: "Not yet started", venue: "Lohgaon", time : '30-07-2019' },
      { id: "12", team1: "T1", team2: "T2", status: "0", tournamentId: "5", result: "Not yet started", venue: "Swargate", time : '30-07-2019' },
      { id: "13", team1: "T4", team2: "T2", status: "0", tournamentId: "1", result: "Not yet started", venue: "Kharadi", time : '30-07-2019' }
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
    let liveMatches: any = [
      { id : 1, teamBat1: 'Team Adali', teamBat2:'Team Malewad', venue: 'Malewad', tournamentId: '1'},
      { id : 2, teamBat1: 'Team Bhedshi', teamBat2:'Team Adali', venue: 'Adali', tournamentId: '4'},
      { id : 3, teamBat1: 'Team Malewad', teamBat2:'Team Bhedshi', venue: 'Malewad', tournamentId: '5'}
    ];
    let liveScores: any = [
      { id : 1, score: "{runs:15,wickets:1,overs:2.2,batsmanStrike:'Adalitlo Gandel-10(5)',batsmanNonStrike:'Adalitlo Barako-1(2)',bowler:'Aditya-1(2)'}", target: '70/5-6'},
      { id : 2, score: "{runs:75,wickets:2,overs:5.0,batsmanStrike:'Bhedshitlo Gandel-30(15)',batsmanNonStrike:'Bhedshitlo Barako-20(12)',bowler:'Aditya-10(6)'}", target: ''},
      { id : 2, score: "{runs:50,wickets:4,overs:4.0,batsmanStrike:'Aditya-20(5)',batsmanNonStrike:'Sitaram-20(4)',bowler:'Barako-20(6)'}", target: ''}
    ];
    return { tournaments, fixtures, pointsTable, teams, liveMatches, liveScores, users };
  }



  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(tournaments: any): number {
  //   return tournaments.length > 0 ? Math.max(...tournaments.map(tournament => tournament.id)) + 1 : 1;
  // }
}
