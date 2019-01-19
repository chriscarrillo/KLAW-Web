import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Login
  loginEmail = new FormControl('', [Validators.required, Validators.email]);
  loginPassword = new FormControl('', Validators.required);
  
  loginPasswordHide = true;

  constructor() { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault(); // Prevents the page from reloading after submitting
    const target = event.target;
    const email = target.querySelector("#email").value;
    const password = target.querySelector("#password").value;
    console.log(event);
  }

  getEmailErrorMessage() {
    return this.loginEmail.hasError('required') ? 'This field is required' :
        this.loginEmail.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessage() {
    return "This field is required";
  }

}
