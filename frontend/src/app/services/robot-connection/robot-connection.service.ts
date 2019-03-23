import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotConnectionService {
  private WEBHOOK_URL = 'https://hooks.slack.com/services/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';
  
  private robotNameSource = new BehaviorSubject<string>("");
  robotName = this.robotNameSource.asObservable();

  constructor() { }

  isConnected() {
    return this.robotName == null;
  }

  getConnectionString() {
    return this.isConnected() ? "Online" : "Offline";
  }

  disconnect() {
    this.robotName = null;
  }

  updateRobotName(robotName: string) {
    this.robotNameSource.next(robotName);
  }

  get WebhookURL() {
    return this.WEBHOOK_URL;
  }

}
