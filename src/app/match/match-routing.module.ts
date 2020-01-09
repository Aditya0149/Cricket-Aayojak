import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { MatchHomeComponent } from './match-home/match-home.component';

const routes: Routes = [
  {
    path:'', 
    component:MatchHomeComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MatchRoutingModule { }
