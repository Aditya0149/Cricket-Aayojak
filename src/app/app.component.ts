import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { PopupService } from './shared/components/popup/popup.service';
import { TournamentDetailsService } from './providers/tournament-details.service';
import { AlertService } from './providers/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cricket-ayojak';
  navList = [
    { name : "Rankings", url : "rankings"},
    { name : "Host", url : "host"}
  ];
  searchKey:string;
  constructor(
    public authService:AuthService,
    public popupService:PopupService,
    public tService:TournamentDetailsService,
    public alertService:AlertService
  ) { }
  ngOnInit(){
  }
}
