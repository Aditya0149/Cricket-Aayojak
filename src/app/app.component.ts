import { Component, ViewChildren } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cricket-ayojak';
  fillerNav = [
    "News/Feeds",
    "Rankings",
    "Search",
    "Team Login",
    "Register team"
  ]
}
