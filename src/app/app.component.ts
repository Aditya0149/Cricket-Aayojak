import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cricket-ayojak';
  navList = [
    { name : "Rankings", url : "rankings"},
    { name : "Host", url : "host"}
  ];
  searchKey:string;
  constructor(private modalService: NgbModal) {}
  public openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
}
