import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from "../../providers/auth.service";
import { PopupService } from "../../shared/components/popup/popup.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title:string = "Login"
  public error:string;
  public loginForm:any = this.fb.group({
    id: ['',Validators.required],
    password: ['',Validators.required],
    role: ['team',Validators.required]
  })
  constructor(
    private fb:FormBuilder, 
    private router:Router, 
    public authService:AuthService,
    public popupService:PopupService
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.popupService.openPopup("Login");
  }

  public login = () => {
    let user = this.loginForm.value;
    this.authService.login(user).subscribe(
      (resp) => {
        if (user.password == resp.password) {
          this.authService.isLoggedIn = true;
          localStorage.setItem("isLoggedIn","true");
          this.popupService.closePopup();
          let redirecUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/host';
          this.router.navigateByUrl(`${redirecUrl}/${resp.id}`);
        } else {
          this.router.navigate([{ outlets: { popup: ['login'] } }]);
          this.error = "Invalid credentials";
        }
      }
    )
  }
  public signIn() {
    this.router.navigate([{ outlets: { popup: ['../'] } }]);
  }
  canDeactivate(): Observable<boolean> | boolean {
    if (this.popupService.popupClosed) return true;
    return this.authService.isLoggedIn;
  }

}
