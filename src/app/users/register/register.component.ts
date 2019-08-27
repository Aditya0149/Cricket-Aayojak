import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor() { }

  canDeactivate(): Observable<boolean> | boolean {
    return false;
  }

}
