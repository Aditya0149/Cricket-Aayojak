import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @Input('navList') public navList;
  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
