import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';

import { HostProfileComponent } from './host-profile/host-profile.component';
import { HostHomeComponent } from './host-home/host-home.component';
import { TournamentComponent } from './tournament/tournament.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HostProfileComponent, HostHomeComponent, TournamentComponent],
  imports: [
    CommonModule,
    SharedModule,
    HostRoutingModule
  ]
})
export class HostModule { }
