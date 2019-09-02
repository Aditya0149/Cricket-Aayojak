import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { HostHomeComponent } from "./host-home/host-home.component"; 
import { HostProfileComponent } from "./host-profile/host-profile.component"; 
import { TournamentComponent } from "./tournament/tournament.component"; 
import { HostProfileResolverService } from './host-profile/host-profile-resolver.service';

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
            component:HostProfileComponent
          },
          {
            path:'tournament',
            component:TournamentComponent
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
