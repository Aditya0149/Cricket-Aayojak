import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FixturesComponent } from './components/fixtures/fixtures.component';
import { PointsTableComponent } from './components/points-table/points-table.component';
import { TournamentPaneComponent } from './components/tournament-pane/tournament-pane.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    FixturesComponent,
    PointsTableComponent,
    TournamentPaneComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FixturesComponent,
    PointsTableComponent,
    TournamentPaneComponent,
    PopupComponent
  ]
})
export class SharedModule { }
