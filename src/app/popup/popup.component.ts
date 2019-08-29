import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: []
})
export class PopupComponent {
  @ViewChild('content',{static:false}) content:TemplateRef<any>;
  constructor(
    public modalService: NgbModal, 
    private router:Router,
    public popupService:PopupService
  ) {  }
  public openSm(title:string) {
    this.popupService.title = title;
    this.popupService.modalRef = this.modalService.open(this.content);
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
    this.popupService.modalRef.close();
  }


}
