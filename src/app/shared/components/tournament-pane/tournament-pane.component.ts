import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input ('tournamentDetails') public tournament:any;
  @Output() onDelete:EventEmitter<any> = new EventEmitter();
  public isCollapsed = true;
  constructor(public authService:AuthService, private tournamentService:TournamentDetailsService, private alertService:AlertService, private router:Router) { }

  ngOnInit() {
  }

  public deleteTournament() {
    this.tournamentService.deleteTournament(this.tournament.id).subscribe(
      data => {
        this.alertService.displayMessage(data.message,'success')
        this.onDelete.emit(this.tournament);
      }
    )
  }
  public editTournament() {
    const navigationExtras: NavigationExtras = {state: {tournament: this.tournament}};
    this.router.navigate(['/host/edit-tournament'],navigationExtras)
  }
  joinTournament(tournament) {
    let user = this.authService.user;
    if(!user) this.alertService.displayMessage("Please login first!",'error');
    console.log(user);
    this.tournamentService.sendJoinRequest(user.id,user.name,tournament.id,tournament.name,tournament.teamId).subscribe(
      data => {
        this.alertService.displayMessage(data.message,'success');
      },
      resp => {
        this.alertService.displayMessage(resp.error,'error');
      }
    )
  }
}
