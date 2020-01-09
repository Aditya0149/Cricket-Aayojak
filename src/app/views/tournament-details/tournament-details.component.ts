import { Component, OnInit } from '@angular/core';
import { TournamentDetailsService } from '../../providers/tournament-details.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {
  public tournamentDetails:any;
  public tournamentId:string;
  public currentView = "fixtures";
  public fixtures: any;
  constructor(private tournamentDetailsService:TournamentDetailsService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params:ParamMap) => {
        return this.tournamentDetailsService.getTournamentDetails(params.get("id"));
      })
    ).subscribe( (data) => console.log(data));
  }

}
