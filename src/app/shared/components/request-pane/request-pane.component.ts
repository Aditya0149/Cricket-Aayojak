import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-request-pane',
  templateUrl: './request-pane.component.html',
  styleUrls: ['./request-pane.component.scss']
})
export class RequestPaneComponent implements OnInit {
  @Input() requests;
  @Output() onAction:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
