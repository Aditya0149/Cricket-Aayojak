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
import { UsersModule } from './users/users.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HostNavDirective } from './directives/host-nav.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTournamentComponent,
    EnterMatchResultComponent,
    ErrorComponent,
    PageNotFoundComponent,
    HostNavDirective
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
    AppRoutingModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
