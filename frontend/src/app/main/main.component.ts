import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterContentInit {
  
  isLoggedIn: boolean; // Local isLoggedIn
  user: Map<string, string> // Local user
  ROOT_URL: string; // Local ROOT_URL

  constructor(private data: DataService, private http: HttpClient) { }

  ngOnInit() {
    // Sets local variables to data's values
    this.data.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.data.currentUser.subscribe(user => this.user = user);
    this.data.currentRootUrl.subscribe(ROOT_URL => this.ROOT_URL = ROOT_URL);
  }

  ngAfterContentInit() {
    this.getCache();
  }

  getCache() {
    this.http.get(this.ROOT_URL + '/getCache')
      .subscribe(
        (result: any) => {
          console.log('getCache(): ' + result['cache']);
          if (result['cache']) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
      });
  }

}
