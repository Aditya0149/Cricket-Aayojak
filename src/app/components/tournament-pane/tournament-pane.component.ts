import { Component, OnInit, Input } from '@angular/core';
import { Tounrament } from '../../interfaces/tournament';
@Component({
  selector: 'app-tournament-pane',
  templateUrl: './tournament-pane.component.html',
  styleUrls: ['./tournament-pane.component.scss']
})
export class TournamentPaneComponent implements OnInit {
  @Input ('tournamentDetails') public tournament:Tounrament;
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
