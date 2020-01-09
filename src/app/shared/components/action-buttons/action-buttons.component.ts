import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {
  @Output() onEdit:EventEmitter<any> = new EventEmitter();
  @Output() onDelete:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
