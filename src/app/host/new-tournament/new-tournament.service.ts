import { Injectable } from '@angular/core';
import { DateAndTimeService } from 'src/app/providers/date-and-time.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Validators } from '@angular/forms'

@Injectable({
  providedIn:'root'
})
export class NewTournamentService {
  constructor(private dateAndTimeService:DateAndTimeService, private authService:AuthService) { }
  public getDateAndTimeInRequiredFormat(tournament,newTournamentForm) {
    tournament = JSON.parse(newTournamentForm);
    tournament.startDate = this.dateAndTimeService.convertNumberToNGBDate(tournament.startDate);
    tournament.endDate = this.dateAndTimeService.convertNumberToNGBDate(tournament.endDate);
    tournament.time = this.dateAndTimeService.convertStringToNGBTime(tournament.time);
    return tournament;
  }
  public formatFormData(formData) {
    let sDate = formData.startDate;
    let eDate = formData.endDate;
    let timeUpdated = formData.time.hour + ":" + formData.time.minute;
    let sDateUpdated = this.dateAndTimeService.convertNGBDateToDateObject(sDate);
    let eDateUpdated = this.dateAndTimeService.convertNGBDateToDateObject(eDate);
    formData.startDate = sDateUpdated;
    formData.endDate = eDateUpdated;
    formData.time = timeUpdated;
    formData.teamId = this.authService.user.id;
    return formData;
  }
  public getFormInRequiredFormat(tournament,minDate,tournamentNamePlaceholder) {
    return {
      name: [tournament.name || tournamentNamePlaceholder,  Validators.required], 
      playerCount: [tournament.playerCount || 11, Validators.required], 
      entryFee : [tournament.entryFee || 100, Validators.required], 
      reEntryFee : [tournament.reEntryFee || 200, Validators.required], 
      prize1 : [tournament.firstPrize || 'prize1', Validators.required], 
      prize2 : [tournament.secondPrize || 'prize2', Validators.required],
      startDate : [tournament.startDate || minDate, Validators.required], 
      endDate :  [tournament.endDate || minDate, Validators.required],
      time : [ tournament.time || {hour: 9, minute: 30}, Validators.required]   
    }    
  }
}
