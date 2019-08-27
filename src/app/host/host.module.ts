import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';

import { HostProfileComponent } from './host-profile/host-profile.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { TournamentComponent } from './tournament/tournament.component';


@NgModule({
  declarations: [HostProfileComponent, HostHomeComponent, TournamentComponent],
  imports: [
    CommonModule,
    HostRoutingModule
  ]
})
export class HostModule { }
