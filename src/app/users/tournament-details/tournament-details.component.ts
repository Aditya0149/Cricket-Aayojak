import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { TournamentDetailsService } from 'src/app/providers/tournament-details.service';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css'],
  providers: [NgbTabsetConfig]
})
export class TournamentDetailsComponent implements OnInit {
  public tournamentDetails:any;
  public tournamentId:string;
  public currentView = "fixtures";
  public fixtures: any;
  public pointsTable:any;
  constructor(
    private route:ActivatedRoute,
    private tabsetConfig: NgbTabsetConfig,
    private tournamentDetailsService:TournamentDetailsService
  ) { 
    this.tabsetConfig.justify = 'center';
    this.tabsetConfig.type = 'pills';
  }

  ngOnInit() {
    this.route.data
      .subscribe( (resolvedData) => {
        this.tournamentDetails = resolvedData.details;
        this.tournamentId = this.tournamentDetails.id;      
      });
      this.tournamentDetailsService.getPointsTable(this.tournamentId).subscribe(data => {
        this.pointsTable = data;
      });
    }
}
