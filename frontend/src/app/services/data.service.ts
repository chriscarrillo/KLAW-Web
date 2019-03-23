/* This class is used to pass data from multiple components
** This ensures that every component receiving the service receives the most recent up-to-date data.
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ROOT_URL = new BehaviorSubject<string>("http://127.0.0.1:5000/api"); //listening to API here
  currentRootUrl = this.ROOT_URL.asObservable();

  private commandStringSource = new BehaviorSubject<string>("");
  commandString = this.commandStringSource.asObservable();

  constructor() { }

  updateRootUrl(newRootUrl: string) {
    this.ROOT_URL.next(newRootUrl);
  }

  updateCommandString(commandString: string) {
    this.commandStringSource.next(commandString);
  }

}
