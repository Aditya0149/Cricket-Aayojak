import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TournamentDetailsService } from '../../../providers/tournament-details.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NewTournamentService } from 'src/app/host/new-tournament/new-tournament.service';
import { DateAndTimeService } from 'src/app/providers/date-and-time.service';
import { AlertService } from 'src/app/providers/alert.service';

@Component({
  selector: 'app-add-fixture',
  templateUrl: './add-fixture.component.html',
  styleUrls: ['./add-fixture.component.scss']
})
export class AddFixtureComponent implements OnInit {
  @Input('tournamentId') tournamentId:string;
  @Input('pointsTable') pointsTable:any;
  @Input('tournamentDetails') tournamentDetails:any;
  @Output() onFixtureAdded: EventEmitter<any> = new EventEmitter();
  public fixturesForm;
  private fixtures:any;
  public minDate:any;
  public maxDate:any;
  public defaultTime:any; 
  constructor(public tournamentDetailsService:TournamentDetailsService, private fb:FormBuilder, private newTournamentService:NewTournamentService, private dateAndTimeService:DateAndTimeService,private alertService:AlertService) { }
  get fixtureInput() {
    return this.fixturesForm.get('fixtureInput') as FormArray;
  }
  get fixtureControls() {
    return this.fixturesForm.get('fixtureInput')['controls'];
  }
  ngOnInit() {
    this.minDate = this.dateAndTimeService.convertNumberToNGBDate(this.tournamentDetails.startDate);
    this.maxDate = this.dateAndTimeService.convertNumberToNGBDate(this.tournamentDetails.endDate);
    this.defaultTime = this.dateAndTimeService.convertStringToNGBTime(this.tournamentDetails.time);
    this.tournamentDetailsService.getFixtures(this.tournamentId).subscribe( data => {
      this.fixtures = data;
    });
    this.fixturesForm = this.fb.group({
      team1: ['',Validators.required],
      team2: ['',Validators.required],
      date: this.minDate,
      time:this.defaultTime
    });
  }
  createFixtureInputs(){
    return this.fb.group({
      team1: ['',Validators.required],
      team2: ['',Validators.required],
      date: this.minDate,
      time:this.defaultTime
    });
  }
  addfixtureInput(e) {
    e.preventDefault();
    this.fixtureInput.push(this.createFixtureInputs());
  }
  removeFixture(i: number) {
    this.fixtureInput.removeAt(i);
  }
  submit() {
    if (this.fixturesForm.valid) {
      let data = this.fixturesForm.value;
      data.date = this.dateAndTimeService.convertNGBDateToDateObject(data.date);
      data.time = this.dateAndTimeService.convertNGBTimeToString(data.time);
      let team1 = data.team1.split('#');
      let team2 = data.team2.split('#');
      data.team1Id = team1[0];
      data.team1Name = team1[1];
      data.team2Id = team2[0];
      data.team2Name = team2[1];
      this.tournamentDetailsService.saveFixtures(
        team1[0],team1[1],team2[0],team2[1],data.date,data.time,this.tournamentId).subscribe(
        (d) => {
          this.onFixtureAdded.emit(data);
        }
      )
    } else this.alertService.displayMessage("Please enter required fields",'error')
  }

}
