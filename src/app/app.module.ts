import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScheduleTournamentComponent } from './views/schedule-tournament/schedule-tournament.component';
import { EnterMatchResultComponent } from './views/enter-match-result/enter-match-result.component';
import { InMemoryDataService }  from './providers/in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './views/error/error.component';
import { httpInterceptorProviders } from "./http-interceptors/index";
import { HostModule } from './host/host.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTournamentComponent,
    EnterMatchResultComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule,
    UsersModule,
    HostModule,
    AppRoutingModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
