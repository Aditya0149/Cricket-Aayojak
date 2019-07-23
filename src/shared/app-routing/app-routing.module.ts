import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../../app/components/home/home.component';
import { TournamentDetailsComponent } from '../../app/components/tournament-details/tournament-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tournament-details/:id', component: TournamentDetailsComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
