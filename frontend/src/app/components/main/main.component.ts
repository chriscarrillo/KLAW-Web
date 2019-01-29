import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/apiServices/user/users-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterContentInit {
  
  user: Map<string, string> // Local user
  ROOT_URL: string; // Local ROOT_URL

  constructor(private data: DataService, private usersApi: UsersApiService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // Sets local variables to data's values
    this.data.currentUser.subscribe(user => this.user = user);
    this.data.currentRootUrl.subscribe(ROOT_URL => this.ROOT_URL = ROOT_URL);

    if (this.usersApi.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  ngAfterContentInit() { }

}
