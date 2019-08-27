import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title = "Login"
  public loginForm:any = this.fb.group({
    hostId: ['',Validators.required],
    password: ['',Validators.required],
    role: ['team',Validators.required]
  })
  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  public login = () => {
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
  }
  public signIn() {
    this.router.navigate([{ outlets: { popup: ['../'] } }]);
  }
  canDeactivate(): Observable<boolean> | boolean {
    return false;
  }

}
