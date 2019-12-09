import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-dashboad',
  templateUrl: './host-dashboad.component.html',
  styleUrls: ['./host-dashboad.component.scss']
})
export class HostDashboadComponent implements OnInit {
  public dashboardLinks = [
    {url:"profile", name: "Profile", class: 'cricket_profile'},
    {url:"new-tournament", name: "Start Tournament", class:'start_tournament'},
    {url:"my-tournaments", name: "My Tournaments", class:'hosted_tournament'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
