import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public message:string = 'Error occured while processing data';
  public show:boolean = false;
  public messageInterval:number = 3000;
  public className:string = 'alert-danger';
  constructor() { }
  public displayMessage(message,type) {
    this.message = message;
    if(type == 'success') {
      this.className = 'alert-'+type;
    }
    this.show = true;
    setTimeout(() => this.show = false, this.messageInterval);
  }
}
