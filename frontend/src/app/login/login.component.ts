import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { User } from '../dataModels/user/user';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  readonly ROOT_URL = "http://0.0.0.0:5000/api";

  isLoggedIn: boolean; // Local isLoggedIn

  users: any; // Observable for getUsers()
  user: any; // Observable for getUserByEmail()

  // Login fields for Angular Material
  loginEmail = new FormControl('', [Validators.required, Validators.email]);
  loginPassword = new FormControl('', Validators.required);
  loginPasswordHide = true;

  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {
    // Sets local isLoggedIn to data's isLoggedIn
    this.data.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  login(event) {
    event.preventDefault(); // Prevents the page from reloading after submitting
    const email = this.loginEmail.value;
    const password = this.loginPassword.value;
    this.verifyLogin(email, password);
  }

  verifyLogin(email, password) {
    this.user = this.http.get(this.ROOT_URL + '/users/email/' + email)
      .subscribe((data:any) => {
        if (data.password == password) {
          this.data.updateIsLoggedIn(true);
        } else {
          console.log('Login credentials are incorrect'); // Needs to change to something that will notify the user
        }
      });
  }

  // 
  getUsers() {
    this.users = this.http.get(this.ROOT_URL + '/users')
      .subscribe((data:any[]) => {
        console.log(data);
      });
  }

  getUserByEmail(email) {
    this.user = this.http.get(this.ROOT_URL + '/users/email/' + email)
      .subscribe((data:any) => {
        console.log(data);
      });
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
