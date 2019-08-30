import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public title:string;
  public modalRef: NgbModalRef;
  public modalContent: any;
  public popupClosed:boolean = false;
  constructor(
    private router:Router,
    public modalService: NgbModal, 
  ) { }
  public closePopup() {
    this.popupClosed = true;
    this.router.navigate([{ outlets: { popup: null }}]);
    this.modalRef.close();
  }
  public openPopup(title:string){
    this.popupClosed = false;
    this.title = title;
    this.modalRef = this.modalService.open(this.modalContent,{backdrop:"static"});
  }
}
