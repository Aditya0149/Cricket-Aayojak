import { Component, OnInit } from '@angular/core';
import { TournamentDetailsService } from '../../../shared/providers/tournament-details.service';
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
    // this.tournamentId = this.route.snapshot.paramMap.get("id");
    // this.tournamentDetailsService.getTournamentDetails(this.tournamentId).subscribe( data => {
    //   console.log(this.route.snapshot.paramMap.keys);
    //   this.tournamentDetails = data;
    // });
    this.route.paramMap.pipe(
      switchMap((params:ParamMap) => {
        return this.tournamentDetailsService.getTournamentDetails(params.get("id"));
      })
    ).subscribe( (data) => console.log(data));
   }

}
