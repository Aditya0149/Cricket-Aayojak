import { Component, OnInit } from '@angular/core';
import { TournamentDetailsService } from 'src/app/providers/tournament-details.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-my-tournament',
  templateUrl: './my-tournaments.component.html',
  styleUrls: ['./my-tournaments.component.scss']
})
export class MyTournamentsComponent implements OnInit {
  public tournaments:any = [];
  constructor(public tournamentService:TournamentDetailsService, private authService:AuthService) { }

  ngOnInit() {
    this.tournamentService.getMyTournaments(this.authService.user.id).subscribe(
      data => this.tournaments = data
    )
  }

  deleteTournament(e) {
    this.tournaments.splice(this.tournaments.indexOf(e),1);
  }

}
