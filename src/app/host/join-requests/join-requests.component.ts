import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';
import { TournamentDetailsService } from 'src/app/providers/tournament-details.service';
import { AuthService } from 'src/app/providers/auth.service';

import { AlertService } from 'src/app/providers/alert.service';

@Component({
  selector: 'app-join-requests',
  templateUrl: './join-requests.component.html',
  styleUrls: ['./join-requests.component.scss']
})
export class JoinRequestsComponent implements OnInit {
  public joinRequests;
  constructor(private hostService:HostService, private tournamentDetailsService:TournamentDetailsService, private authService:AuthService, private alertService:AlertService) { }

  ngOnInit() {
    this.tournamentDetailsService.getJoinRequests(this.authService.user.id)
    .subscribe( data => {
      this.joinRequests = data 
    })
  }
  doAction(action) {
    let joinRequests = this.joinRequests;
    let searchElement = joinRequests.find( item => item.id == item.id);
    if(action.status == 'reject') {
      // delete request
      this.tournamentDetailsService.deleteJoinRequest(action.id).subscribe(
        data => {
          joinRequests.splice(joinRequests.indexOf(searchElement),1);
          this.alertService.displayMessage(data.message,'success');
        }
      )
    } else {
      // update status and add team to points table
      console.log(searchElement);
      this.tournamentDetailsService.acceptJoinRequest(action.id, searchElement.fromTeamId, searchElement.from, searchElement.tournamentId).subscribe(
        data => {
          joinRequests.splice(joinRequests.indexOf(searchElement),1);
          this.alertService.displayMessage(data.message,'success');
        }
      )
    } 
  }
}
