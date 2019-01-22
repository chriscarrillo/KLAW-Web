import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  isLoggedIn: boolean; // Local isLoggedIn
  user: Map<string, string> // Local user

  constructor(private data: DataService) { }

  ngOnInit() {
    // Sets local variables to data's values
    this.data.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.data.currentUser.subscribe(user => this.user = user);
  }

}
