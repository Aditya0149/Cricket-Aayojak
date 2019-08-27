import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: []
})
export class PopupComponent {
  public modalRef: NgbModalRef;
  public title: string;
  @ViewChild('content',{static:false}) content:TemplateRef<any>;
  constructor(
    public modalService: NgbModal, 
    private router:Router
  ) {  }
  public openSm(title:string) {
    console.log(title);
    this.title = title;
    this.modalRef = this.modalService.open(this.content);
  }
  send() {
    setTimeout(() => {
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
    this.modalRef.close();
  }


}
