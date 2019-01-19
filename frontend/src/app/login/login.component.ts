import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadRegister: boolean = false;

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

  setLoadRegister() {
    this.loadRegister = true;
  }

}
