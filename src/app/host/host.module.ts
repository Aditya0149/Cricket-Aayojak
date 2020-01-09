import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';

import { HostProfileComponent } from './host-profile/host-profile.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { TournamentComponent } from './tournament/tournament.component';
import { SharedModule } from '../shared/shared.module';
import { HostDashboadComponent } from './host-dashboad/host-dashboad.component';
import { NewTournamentComponent } from './new-tournament/new-tournament.component';
import { MyTournamentsComponent } from './my-tournaments/my-tournaments.component';
import { NewTournamentService } from './new-tournament/new-tournament.service';
import { HostService } from './host.service';
import { JoinRequestsComponent } from './join-requests/join-requests.component';

@NgModule({
  declarations: [HostProfileComponent, HostHomeComponent, TournamentComponent, HostDashboadComponent, NewTournamentComponent, MyTournamentsComponent, JoinRequestsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HostRoutingModule
  ],
  providers: [
    HostService
  ]
})
export class HostModule { }
