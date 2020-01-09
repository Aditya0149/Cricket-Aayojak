import { Component, OnInit, Input } from '@angular/core';
import { TournamentDetailsService } from '../../../providers/tournament-details.service';
import { AuthService } from 'src/app/providers/auth.service';
import { DateAndTimeService } from 'src/app/providers/date-and-time.service';
import { AlertService } from 'src/app/providers/alert.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  @Input('tournamentId') tournamentId:string;
  @Input('pointsTable') pointsTable:any;
  @Input('tournamentDetails') tournamentDetails:any;
  public fixturesForm;
  private fixtures:any;
  public minDate:any;
  public maxDate:any;
  public defaultTime:any;
  public toggleFixture:boolean = false;
  constructor(
    public tournamentDetailsService:TournamentDetailsService, 
    public authService:AuthService, 
    private alertService:AlertService,
    private dateAndTimeService:DateAndTimeService) { }
  ngOnInit() {
    this.tournamentDetailsService.getFixtures(this.tournamentId).subscribe(
      data => {
        this.fixtures = data;
        this.fixtures = this.dateAndTimeService.sortByDateAndTime(data);
      })
  }
  fixtureAdded(data) {
    this.toggleFixture = false;
    this.fixtures.push(data);
    this.fixtures = this.dateAndTimeService.sortByDateAndTime(this.fixtures);
  }
  deleteFixture(fixture){
    this.tournamentDetailsService.deleteFixtures(fixture.id).subscribe(
      (data:any) => {
        this.fixtures.splice(this.fixtures.indexOf(fixture),1);
        this.alertService.displayMessage(data.message,"success");
      }
    )
  }
  startTournament(id){
    this.tournamentDetailsService.updateFixtureStatus(id,'Running').subscribe( data => console.log(data))
    //[routerLink]="['../../match']"
  }
}
