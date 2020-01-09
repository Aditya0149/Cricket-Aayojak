import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent implements OnInit {
  @Input() message:string = 'No data found';
  constructor() { }

  ngOnInit() {
  }

}
