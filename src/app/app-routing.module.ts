import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './popups/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
//  { path: '**', component: ErrorComponent }
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
