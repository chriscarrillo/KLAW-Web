import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Register
  registerFirstName = new FormControl('', Validators.required);
  registerLastName = new FormControl('', Validators.required);
  registerEmail = new FormControl('', [Validators.required, Validators.email]);
  registerPassword = new FormControl('', Validators.required);

  registerPasswordHide = true;

  constructor() { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.registerEmail.hasError('required') ? 'This field is required' :
      this.registerEmail.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessage() {
    return "This field is required";
  }

}
