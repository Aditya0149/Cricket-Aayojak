import { Component, ViewChildren, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cricket-ayojak';
  navList = [
    { name : "Home", url : "home"},
    { name : "Rankings", url : "rankings"},
    { name : "Host", url : "host"}
  ];
  searchKey:string;

}
