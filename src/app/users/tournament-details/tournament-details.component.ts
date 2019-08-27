import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(
    private route:ActivatedRoute,
    private tabsetConfig: NgbTabsetConfig  
  ) { 
    this.tabsetConfig.justify = 'center';
    this.tabsetConfig.type = 'pills';
  }

  ngOnInit() {
    this.route.data
      .subscribe( (resolvedData) => {
        this.tournamentDetails = resolvedData.details;
        this.tournamentId = this.tournamentDetails.id;
        console.log(this.tournamentDetails);
      });
   }

}
