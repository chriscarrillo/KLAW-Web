/* This class is used to pass data from multiple components
** This ensures that every component receiving the service receives the most recent up-to-date data.
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private isLoggedIn = new BehaviorSubject<boolean>(false); // This is the real data
  // currentIsLoggedIn = this.isLoggedIn.asObservable(); // This is the Observable that will be used by the components

  private user = new BehaviorSubject<Map<string, string>>(new Map<string, string>()); // The real data
  currentUser = this.user.asObservable(); // The Observable that will be used by the components

  private ROOT_URL = new BehaviorSubject<string>("http://0.0.0.0:5000/api");
  currentRootUrl = this.ROOT_URL.asObservable();

  constructor() { }

  // // Updates isLoggedIn
  // updateIsLoggedIn(newIsLoggedIn: boolean) {
  //   this.isLoggedIn.next(newIsLoggedIn);
  // }

  // Updates user
  updateUser(newUser: Map<string, string>) {
    this.user.next(newUser);
  }

  updateRootUrl(newRootUrl: string) {
    this.ROOT_URL.next(newRootUrl);
  }

}
