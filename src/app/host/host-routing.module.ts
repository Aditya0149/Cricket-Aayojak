import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostHomeComponent } from "./host-home/host-home.component"; 
import { HostProfileComponent } from "./host-profile/host-profile.component"; 
import { TournamentComponent } from "./tournament/tournament.component"; 

const routes: Routes = [
  {
    path:"host", 
    component:HostHomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
