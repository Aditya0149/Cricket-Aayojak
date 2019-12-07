import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-dashboad',
  templateUrl: './host-dashboad.component.html',
  styleUrls: ['./host-dashboad.component.scss']
})
export class HostDashboadComponent implements OnInit {
  public dashboardLinks = [
    {url:"profile", name: "Profile"},
    {url:"new-tournament", name: "New Tournament"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
