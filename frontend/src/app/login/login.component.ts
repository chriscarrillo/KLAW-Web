import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean; // Local isLoggedIn
  user: Map<string, string>; // Local user
  ROOT_URL: string; // Local ROOT_URL

  // Login fields for Angular Material
  loginEmail = new FormControl('', [Validators.required, Validators.email]);
  loginPassword = new FormControl('', Validators.required);
  loginForm = new FormGroup({});
  loginPasswordHide = true;

  constructor(private data: DataService, private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // Sets local variables to data's values
    this.data.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.data.currentUser.subscribe(user => this.user = user);
    this.data.currentRootUrl.subscribe(ROOT_URL => this.ROOT_URL = ROOT_URL);

    this.loginForm.addControl('email', this.loginEmail);
    this.loginForm.addControl('password', this.loginPassword);
  }

  login(event) {
    event.preventDefault(); // Prevents the page from reloading after submitting
    const email = this.loginEmail.value;
    const password = this.loginPassword.value;
    this.verifyLogin(email, password);
  }

  verifyLogin(email, password) {
    this.http.post(this.ROOT_URL + '/login', {
      email: email,
      password: password
    })
      .subscribe(
        (result: any) => {
          if (result.success) { // The login was successful
            // Save user data
            for (let data in result) {
              this.user.set(data, result[data]);
            }

            // Update the global login
            this.data.updateIsLoggedIn(true);
          } else {
            // Show the error message
            this.openSnackBar(result.message, "OK");
          }
        }
      );
  }

  getEmailErrorMessage() {
    return this.loginEmail.hasError('required') ? 'This field is required' :
        this.loginEmail.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessage() {
    return 'This field is required';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
