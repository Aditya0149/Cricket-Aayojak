import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public title:string;
  public modalRef: NgbModalRef;
  constructor(
    private router:Router,
    public modalService: NgbModal, 
  ) { }
  public closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
    this.modalRef.close();
  }
  public openPopup(title:string,content){
    console.log(content);
    this.title = title;
    this.modalRef = this.modalService.open(content);
  }
}
