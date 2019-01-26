import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Map<string, string>; // Local user
  ROOT_URL: string; // Local ROOT_URL

  // Register fields for Angular Material
  registerFirstName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  registerLastName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  registerEmail = new FormControl('', [Validators.required, Validators.email]);
  registerPassword = new FormControl('', Validators.required);
  registerForm = new FormGroup({});

  registerPasswordHide = true;

  constructor(private data: DataService, private http: HttpClient, private snackBar: MatSnackBar) { 
    this.data.currentUser.subscribe(user => this.user = user);
    this.data.currentRootUrl.subscribe(ROOT_URL => this.ROOT_URL = ROOT_URL);
  }

  ngOnInit() {
    this.registerForm.addControl('firstName', this.registerFirstName);
    this.registerForm.addControl('lastName', this.registerLastName);
    this.registerForm.addControl('email', this.registerEmail);
    this.registerForm.addControl('password', this.registerPassword);
  }

  register(event) {
    event.preventDefault(); // Prevents the page from reloading after submitting
    const first_name = this.registerFirstName.value;
    const last_name = this.registerLastName.value;
    const email = this.registerEmail.value;
    const password = this.registerPassword.value;
    this.registerUser(first_name, last_name, email, password);
  }

  registerUser(first_name, last_name, email, password) {
    this.http.post(this.ROOT_URL + '/register', {
      first_name,
      last_name,
      email: email,
      password: password
    })
      .subscribe(
        (result: any) => {
          if (result.success) { // Registration was successful
            // Save user data
            for (let data in result) {
              this.user.set(data, result[data]);
            }
            
            this.openSnackBar("Registration successful! Logging you in...", "OK");

            // Update the global login
            this.data.updateIsLoggedIn(true);
          } else { // Registration was not successful
            // Show the error message
            this.openSnackBar(result.message, "OK");
          }
        }
      );
  }

  getEmailErrorMessage() {
    return this.registerEmail.hasError('required') ? 'This field is required' :
      this.registerEmail.hasError('email') ? 'Not a valid email' :
        '';
  }

  getFirstNameErrorMessage() {
    return this.registerFirstName.hasError('required') ? 'This field is required' :
      this.registerFirstName.hasError('pattern') ? 'A name can only have letters' : '';
  }

  getLastNameErrorMessage() {
    return this.registerLastName.hasError('required') ? 'This field is required' :
      this.registerLastName.hasError('pattern') ? 'A name can only have letters' : '';
  }

  getErrorMessage() {
    return "This field is required";
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
