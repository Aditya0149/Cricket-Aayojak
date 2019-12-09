import { Component, OnInit, Input } from '@angular/core';
import { Tounrament } from '../../types/tournament';
import { AuthService } from 'src/app/providers/auth.service';
import { TournamentDetailsService } from 'src/app/providers/tournament-details.service';
import { AlertService } from 'src/app/providers/alert.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tournament-pane',
  templateUrl: './tournament-pane.component.html',
  styleUrls: ['./tournament-pane.component.scss']
})
export class TournamentPaneComponent implements OnInit {
  @Input ('tournamentDetails') public tournament:Tounrament;
  public isCollapsed = true;
  constructor(public authService:AuthService, private tournamentService:TournamentDetailsService, private alertService:AlertService, private router:Router) { }

  ngOnInit() {
  }

  public deleteTournament(id) {
    this.tournamentService.deleteTournament(id).subscribe(
      data => this.alertService.displayMessage(data.message,'success')
    )
  }
  public editTournament(tournament) {
    const navigationExtras: NavigationExtras = {state: {tournament: tournament}};
    this.router.navigate(['/host/new-tournament'],navigationExtras)
  }

}
