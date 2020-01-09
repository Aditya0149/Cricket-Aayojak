import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { HostHomeComponent } from "./host-home/host-home.component"; 
import { HostProfileComponent } from "./host-profile/host-profile.component"; 
import { HostDashboadComponent } from './host-dashboad/host-dashboad.component';
import { NewTournamentComponent } from './new-tournament/new-tournament.component';
import { MyTournamentsComponent } from './my-tournaments/my-tournaments.component';
import { JoinRequestsComponent } from './join-requests/join-requests.component';
import { NavigationGuard } from '../guards/navigation.guard';

const routes: Routes = [
  {
    path:'', 
    component:HostHomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'',
        canActivateChild: [AuthGuard],
        children: [
          {
            path:'',
            component:HostDashboadComponent
          },
          {
            path:'profile',
            component:HostProfileComponent
          },
          {
            path:'new-tournament',
            component:NewTournamentComponent
          },
          {
            path:'edit-tournament',
            component:NewTournamentComponent
          },
          {
            path:'my-tournaments',
            component:MyTournamentsComponent
          },
          {
            path:'joinRequests',
            component: JoinRequestsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
