import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { MatchRoutingModule } from './match-routing.module';
import { MatchHomeComponent } from './match-home/match-home.component';



@NgModule({
  declarations: [StartComponent, MatchHomeComponent],
  imports: [
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
