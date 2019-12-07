import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Tounrament } from 'src/app/shared/types/tournament';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.scss']
})
export class NewTournamentComponent implements OnInit {
  private tournamentForm:any;
  constructor(private fb : FormBuilder) {
    
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    this.tournamentForm = this.fb.group({
      name: user ? user.name + ' Tournament' : ' Tournament', 
      playerCount: '', 
      entryFee : '', 
      reEntryFee : '', 
      prize1 : '', 
      prize2 : '',
      startDate : '', 
      endDate : ''   
    })
  }
  public hostNewTournament() {
    console.log(this.tournamentForm.value);
  }
}
