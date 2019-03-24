import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class RobotConnectionService {
  private WEBHOOK_URL = 'https://hooks.slack.com/services/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';
  
  private robotNameSource = new BehaviorSubject<string>("");
  robotName = this.robotNameSource.asObservable();

  private isConnected: boolean = this.robotName == null;

  constructor(private http: HttpClient, private dataService: DataService) { }
  
  getRobots(): Observable<any> {
    return this.http
      .get(this.dataService.APIUrl + '/get_robots');
  }

  get IsConnected() {
    return this.isConnected;
  }

  getConnectionString() {
    return this.isConnected ? "Online" : "Offline";
  }

  connect() {
    this.isConnected = true;
  }

  disconnect() {
    this.robotName = null;
    this.isConnected = false;
  }

  updateRobotName(robotName: string) {
    this.robotNameSource.next(robotName);
  }

  get WebhookURL() {
    return this.WEBHOOK_URL;
  }

}
