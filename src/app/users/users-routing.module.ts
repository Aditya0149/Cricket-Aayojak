import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { RankingsComponent } from './rankings/rankings.component';
import { TournamentDetailsResolverService } from './tournament-details/tournament-details-resolver.service';
import { LoginComponent } from './login/login.component';
import { NavigationGuard } from '../guards/navigation.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rankings', component: RankingsComponent },
  { 
    path: 'tournament-details/:id', 
    component: TournamentDetailsComponent,
    resolve: {
      details: TournamentDetailsResolverService
    }
  },
  {
    path:'login',
    component: LoginComponent,
    canDeactivate: [NavigationGuard],
    outlet:'popup'
  },
  {
    path:'register',
    component: RegisterComponent,
    canDeactivate: [NavigationGuard],
    outlet:'popup'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
