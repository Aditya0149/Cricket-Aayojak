import { Component, OnInit } from '@angular/core';
import { TournamentDetailsService } from '../../providers/tournament-details.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {
  public tournamentDetails:any;
  public tournamentId;
  public currentView = "fixtures";
  public fixtures: any;
  constructor(private tournamentDetailsService:TournamentDetailsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.tournamentId = this.route.snapshot.paramMap.get("id");
    this.tournamentDetailsService.getTournamentDetails(this.tournamentId).subscribe( data => {
      this.tournamentDetails = data;
    });
   }

}
