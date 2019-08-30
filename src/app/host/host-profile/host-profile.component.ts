import { Component, OnInit } from '@angular/core';
import { HostService } from '../../providers/host.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.scss']
})
export class HostProfileComponent implements OnInit {
  public profile:any;
  constructor(private hostService:HostService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.
      subscribe( data => {
        this.profile = data.details;
      });
  }

}
