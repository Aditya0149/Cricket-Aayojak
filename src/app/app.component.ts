import { Component, ViewChildren, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cricket-ayojak';
  navList = [
    { name : "Home", url : ""},
    { name : "Rankings", url : "rankings"}
  ];
  searchKey:string;

}
