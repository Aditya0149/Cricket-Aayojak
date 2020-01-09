import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.scss']
})
export class HostProfileComponent implements OnInit {
  public profile:any;
  constructor(private hostService:HostService, private route:ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.profile = this.authService.user;
    // if (profile) {
    //   this.profile = JSON.parse(profile);
    // } else {
    //   this.hostService.getTeamProfile(this.authService.user.id).subscribe(
    //     data => {
    //       this.profile = data;
    //       this.authService.user = data;
    //       localStorage.setItem("user",JSON.stringify(data));
    //     }
    //   )
    // }
  }
}
