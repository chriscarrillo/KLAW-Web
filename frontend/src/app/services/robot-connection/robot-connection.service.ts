import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotConnectionService {
  isRobotConnected: boolean = false;
  
  private robotNameSource = new BehaviorSubject<string>("pibot");
  robotName = this.robotNameSource.asObservable();

  constructor() { }

  isConnected() {
    return this.isRobotConnected;
  }

  getConnectionString() {
    return this.isRobotConnected ? "Online" : "Offline";
  }

  disconnect() {
    
  }

  updateRobotName(robotName: string) {
    this.robotNameSource.next(robotName);
  }

}
