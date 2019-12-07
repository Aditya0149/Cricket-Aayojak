import { Component, OnInit } from '@angular/core';
import { TournamentDetailsService } from 'src/app/providers/tournament-details.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
  providers: [
    TournamentDetailsService
  ]
})
export class RankingsComponent implements OnInit {

  constructor(public tService:TournamentDetailsService) { }

  ngOnInit() {
  }

}
