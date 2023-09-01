import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: any;

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService
  ) {}

  ngOnInit() {

  }

  onSubmit() {

  }
}
