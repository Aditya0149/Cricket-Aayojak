import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { RankingsComponent } from './rankings/rankings.component';
import { TournamentDetailsResolverService } from './tournament-details/tournament-details-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rankings', component: RankingsComponent },
  { 
    path: 'tournament-details/:id', 
    component: TournamentDetailsComponent,
    resolve: {
      details: TournamentDetailsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
