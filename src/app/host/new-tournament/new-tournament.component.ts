import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Tounrament } from 'src/app/shared/types/tournament';
import { AuthService } from 'src/app/providers/auth.service';
import { AlertService } from 'src/app/providers/alert.service';
import { TournamentDetailsService } from 'src/app/providers/tournament-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.scss']
})
export class NewTournamentComponent implements OnInit {
  private tournamentForm:any;
  public minDate:any;
  public maxDate:any;
  public meridian = true;
  private tournament:any = {};
  constructor(
    private fb : FormBuilder, 
    public authService:AuthService, 
    private alertService:AlertService,
    private tournamentService:TournamentDetailsService,
    private router:Router) {
      const navigation = this.router.getCurrentNavigation();
      if(navigation) {
        const state = navigation.extras.state as {tournament: any};
        if (state) {
          if(state.tournament) this.tournament = state.tournament;
        } 
      }
  }

  ngOnInit() {
    let user = this.authService.user;
    let tournamentNamePlaceholder = user ? user.name + ' Tournament' : ' Tournament';
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    this.tournamentForm = this.fb.group({
      name: [this.tournament.name || tournamentNamePlaceholder,  Validators.required], 
      playerCount: [this.tournament.playerCount || 11, Validators.required], 
      entryFee : [this.tournament.entryFee || 100, Validators.required], 
      reEntryFee : [this.tournament.reEntryFee || 200, Validators.required], 
      prize1 : [this.tournament.firstPrize || 'prize1', Validators.required], 
      prize2 : [this.tournament.secondPrize || 'prize2', Validators.required],
      startDate : [this.tournament.startDate || this.minDate, Validators.required], 
      endDate :  [this.tournament.endDate || this.minDate, Validators.required],
      time : [this.tournament.time ? JSON.parse(this.tournament.time) : {hour: 9, minute: 30}, Validators.required]   
    })    
  }
  ngAfterViewInit() {

  }
  public hostNewTournament() {
    if (this.tournamentForm.valid) {
      let formData = this.formatFormData(this.tournamentForm.value);
      //formData.time = JSON.stringify(formData.time);
      this.tournamentService.saveTournament(formData).subscribe( 
        data => {
          this.router.navigate(['host/my-tournaments'])
          this.alertService.displayMessage(data.message,'success')
        },
        err => this.alertService.displayMessage(err.error,'error')
      )
    } else this.alertService.displayMessage("Please fill all the data!",'error')
    
  }
  public formatFormData(formData) {
    let sDate = formData.startDate;
    let eDate = formData.endDate;
    let timeUpdated = formData.time.hour + ":" + formData.time.minute;
    let sDateUpdated = new Date(sDate.year, sDate.month-1, sDate.day);
    let eDateUpdated = new Date(eDate.year, eDate.month-1, eDate.day);
    formData.startDate = sDateUpdated;
    formData.endDate = eDateUpdated;
    formData.time = timeUpdated;
    formData.teamId = this.authService.user.id;
    return formData;
  }
}
