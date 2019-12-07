import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { RankingsComponent } from './rankings/rankings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TournamentDetailsService } from '../providers/tournament-details.service';
@NgModule({
  declarations: [
    HomeComponent,
    TournamentDetailsComponent,
    RankingsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  providers: [
    TournamentDetailsService
  ]
})
export class UsersModule { }
