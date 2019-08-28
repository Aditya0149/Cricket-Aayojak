import { Component, OnInit } from '@angular/core';
import { TournamentDetailsService } from '../../providers/tournament-details.service';
@Component({
  selector: 'app-host-home',
  templateUrl: './host-home.component.html',
  styleUrls: ['./host-home.component.scss']
})
export class HostHomeComponent implements OnInit {

  constructor(public tournamentDetailsService:TournamentDetailsService) { }

  ngOnInit() {
  }

}
