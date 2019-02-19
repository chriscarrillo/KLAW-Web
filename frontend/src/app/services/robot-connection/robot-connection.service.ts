import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RobotConnectionService {
  isRobotConnected: boolean = false;

  constructor() { }

  isConnected() {
    return this.isRobotConnected;
  }

  getConnectionString() {
    return this.isRobotConnected ? "Online" : "Offline";
  }

  disconnect() {
    
  }
}
