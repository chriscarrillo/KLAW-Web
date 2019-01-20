import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'KLAW Web';
  isLoggedIn: boolean;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    // Sets local isLoggedIn to data's isLoggedIn
    this.data.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  ngOnDestroy() {
    
  }

  logout() {
    this.data.updateIsLoggedIn(false);
  }
}