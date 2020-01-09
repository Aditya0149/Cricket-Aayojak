import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Tounrament } from 'src/app/shared/types/tournament';
import { AuthService } from 'src/app/providers/auth.service';
import { AlertService } from 'src/app/providers/alert.service';
import { TournamentDetailsService } from 'src/app/providers/tournament-details.service';
import { Router } from '@angular/router';
import { DateAndTimeService } from 'src/app/providers/date-and-time.service';
import { NewTournamentService } from './new-tournament.service';
import * as moment from 'moment';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.scss']
})
export class NewTournamentComponent implements OnInit {
  private tournamentForm:any;
  public minDate:any;
  public meridian = true;
  private tournament:any = {};
  public editView:boolean = false;
  constructor(
    private fb : FormBuilder, 
    public authService:AuthService, 
    private alertService:AlertService,
    private tournamentService:TournamentDetailsService,
    private dateAndTimeService:DateAndTimeService,
    private newTournamentService:NewTournamentService,
    private router:Router) {
      const navigation = this.router.getCurrentNavigation();
      if(navigation) {
        const state = navigation.extras.state as {tournament: any};
        if (state) {
          if(state.tournament) {
            sessionStorage.setItem('newTournamentForm',JSON.stringify(state.tournament));
          }
        } 
      }
  }

  ngOnInit() {
    this.editView = this.router.url.indexOf("edit-tournament") > -1 ? true : false;
    if(this.editView) {
      var newTournamentForm = sessionStorage.getItem('newTournamentForm');
      if(newTournamentForm) {
        this.tournament = this.newTournamentService.getDateAndTimeInRequiredFormat(this.tournament,newTournamentForm);
      }
    }
    let user = this.authService.user;
    let tournamentNamePlaceholder = user ? user.name + ' Tournament' : ' Tournament';
    this.minDate = this.dateAndTimeService.convertNumberToNGBDate();
    this.tournamentForm = this.fb.group(this.newTournamentService.getFormInRequiredFormat(this.tournament,this.minDate,tournamentNamePlaceholder));    
  }
  public submit() {
    if (this.tournamentForm.valid) {
      let formData = this.newTournamentService.formatFormData(this.tournamentForm.value);
      if(this.editView) this.editTournament(formData);
      else this.createNewTournament(formData);
    } else this.alertService.displayMessage("Please fill all the data!",'error')
  }
  public createNewTournament(formData) {
    console.log('formData ',formData);
    this.tournamentService.saveTournament(formData).subscribe( 
      data => {
        this.router.navigate(['host/my-tournaments'])
        this.alertService.displayMessage(data.message,'success')
      },
      err => this.alertService.displayMessage(err.error,'error')
    )
  }
  public editTournament(formData) {
    console.log(formData);
    this.tournamentService.editTournament(formData,this.tournament.id).subscribe(
      data => {
        this.router.navigate(['host/my-tournaments'])
        this.alertService.displayMessage(data.message,'success')
      },
      err => this.alertService.displayMessage(err.error,'error')
    )
  }
  
}
