import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from "../../providers/auth.service";
import { PopupService } from "../../shared/components/popup/popup.service";
import { AlertService } from 'src/app/providers/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title:string = "Login"
  public loginForm:any = this.fb.group({
    id: ['',Validators.required],
    password: ['',Validators.required],
    role: ['team',Validators.required]
  })
  constructor(
    private fb:FormBuilder, 
    private router:Router, 
    public authService:AuthService,
    public popupService:PopupService,
    public alertService:AlertService
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.popupService.openPopup("Login");
  }

  public login = () => {
    if(!this.loginForm.valid) {
      this.alertService.displayMessage('Please enter username and password!','error');
      return false;
    }
    let user = this.loginForm.value;
    this.authService.login(user).subscribe(
      (resp) => {
        this.popupService.closePopup();
          let redirecUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/host';
          this.router.navigateByUrl(`${redirecUrl}`);
          this.authService.user = resp;
          localStorage.setItem("user",JSON.stringify(resp));
      }, (err) => this.alertService.displayMessage(err.error,'error')
    )
  }
  public signIn() {
    this.router.navigate([{ outlets: { popup: ['../'] } }]);
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (this.popupService.popupClosed) return true;
    return this.authService.user;
  }

}
