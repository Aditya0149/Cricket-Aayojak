import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { RankingsComponent } from './rankings/rankings.component';

@NgModule({
  declarations: [
    HomeComponent,
    TournamentDetailsComponent,
    RankingsComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
