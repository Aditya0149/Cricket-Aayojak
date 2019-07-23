import { Component, OnInit, Input } from '@angular/core';
import { TournamentDetailsService } from '../../providers/tournament-details.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {
  @Input('tournamentId') tournamentId:string;
  private fixtures:any;
  constructor(public tournamentDetailsService:TournamentDetailsService) { }

  ngOnInit() {
    console.log(this.tournamentId);
    this.tournamentDetailsService.getFixtures(this.tournamentId).subscribe( data => {
      this.fixtures = data;
    });
  }
  ngAfterViewInit() {
    
  }

}
