import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TournamentDetailsService } from '../../providers/tournament-details.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tournaments:any;
  constructor(private http: HttpClient, public tournamentDetailsService:TournamentDetailsService, private fb:FormBuilder, public tService:TournamentDetailsService) { }

  ngOnInit() {
    this.getTournaments();
  }
  private getTournaments(){
    this.tournamentDetailsService.getTournaments().subscribe( data => {
      this.tournaments = data;
    });
  }
}

interface Host {
  hostid:"string",
  password:"string"
}