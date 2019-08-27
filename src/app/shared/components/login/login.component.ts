import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm:any = this.fb.group({
    hostId: [''],
    password: ['']
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  public hostLogin = () => {
    console.log(this.loginForm);
  }
}
