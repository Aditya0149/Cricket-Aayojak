import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from '../shared/modules/app-routing/app-routing.module';
import { TournamentDetailsComponent } from './views/tournament-details/tournament-details.component';
import { AddTeamsComponent } from './views/add-teams/add-teams.component';
import { FixturesComponent } from './views/fixtures/fixtures.component';
import { ScheduleTournamentComponent } from './views/schedule-tournament/schedule-tournament.component';
import { EnterMatchResultComponent } from './views/enter-match-result/enter-match-result.component';
import { InMemoryDataService }  from '../shared/providers/in-memory-data.service';
import { PointsTableComponent } from './views/points-table/points-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from '../shared/modules/app-material/app-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentDetailsComponent,
    AddTeamsComponent,
    FixturesComponent,
    ScheduleTournamentComponent,
    EnterMatchResultComponent,
    PointsTableComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    NgbModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
