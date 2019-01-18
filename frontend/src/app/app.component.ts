import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  isLoggedIn: boolean = false;

  constructor() {
  }

  ngOnInit() {
    // Need to set up some logic here that checks if the user is logged in
    // and then set isLoggedIn appropriately
  }

  ngOnDestroy() {
    
  }
}