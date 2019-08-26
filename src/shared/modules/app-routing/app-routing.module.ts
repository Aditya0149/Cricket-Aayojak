import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../../../app/views/home/home.component';
import { TournamentDetailsComponent } from '../../../app/views/tournament-details/tournament-details.component';
import { RankingsComponent } from '../../../app/views/rankings/rankings.component';
import { ErrorComponent } from '../../../app/views/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'rankings', component: RankingsComponent },
  // { path: 'tournament-details/:id', component: TournamentDetailsComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
     // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
