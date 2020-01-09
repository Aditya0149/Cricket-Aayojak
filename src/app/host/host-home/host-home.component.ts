import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';
@Component({
  selector: 'app-host-home',
  templateUrl: './host-home.component.html',
  styleUrls: ['./host-home.component.scss']
})
export class HostHomeComponent implements OnInit {

  constructor(public hostService:HostService) { }

  ngOnInit() {
    
  }
  

}
