import { Injectable } from '@angular/core';
// import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// import {from} from 'rxjs/observable/from';
import { from } from 'rxjs';

import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  listeners;
  eventsSubject;
  events;

  constructor() {
    this.listeners = {};
    this.eventsSubject = new Subject();

    // this.events = Observable.from(this.eventsSubject);
    this.events = from(this.eventsSubject);

    this.events.subscribe(
      ({name, args}) => {
        if (this.listeners[name]) {
          for (const listener of this.listeners[name]) {
            listener(...args);
          }
        }
      });
  }

  on(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(listener);
  }

  off(name, listener) {
    this.listeners[name] = this.listeners[name].filter(x => x !== listener);
  }

  broadcast(name, ...args) {
    this.eventsSubject.next({
      name,
      args
    });
  }
}
