import { Component, OnInit, Input } from '@angular/core';
import { TournamentDetailsService } from '../../providers/tournament-details.service';
@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {
  @Input('tournamentId') tournamentId:string;
  public pointsTable:any;
  constructor(private tournamentDetailsService:TournamentDetailsService) { }

  ngOnInit() {
    this.tournamentDetailsService.getPointsTable(this.tournamentId).subscribe(data => {
      this.pointsTable = data;
    });
  }

}
