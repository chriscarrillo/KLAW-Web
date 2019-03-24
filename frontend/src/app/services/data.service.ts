/* This class is used to pass data from multiple components
** This ensures that every component receiving the service receives the most recent up-to-date data.
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ROOT_URL: string = "https://klaw-web.herokuapp.com"; // listening to API here

  private commandStringSource = new BehaviorSubject<string>("");
  commandString = this.commandStringSource.asObservable();

  constructor() { }

  get APIUrl() {
    return this.ROOT_URL;
  }

  updateCommandString(commandString: string) {
    this.commandStringSource.next(commandString);
  }

}
