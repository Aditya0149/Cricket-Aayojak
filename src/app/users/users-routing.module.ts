import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'tournament-details/:id', component: TournamentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
