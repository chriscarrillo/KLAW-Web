import { Component, OnInit } from '@angular/core';
import { RobotConnectionService } from 'src/app/services/robot-connection/robot-connection.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-start-control',
  templateUrl: './start-control.component.html',
  styleUrls: ['./start-control.component.css']
})
export class StartControlComponent implements OnInit {
  WEBHOOK_URL = 'https://hooks.slack.com/services/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';
  robotName: string;
  commandString: string;

  constructor(private robotConnectionService: RobotConnectionService, private dataService: DataService) { }

  ngOnInit() {
    this.robotConnectionService.robotName.subscribe(robotName => this.robotName = robotName);
    this.dataService.commandString.subscribe(commandString => this.commandString = commandString);
  }

  start() {
    this.sendDataToRobot();
  }

  sendDataToRobot() {
    var slackJSON = 'payload={"text": "@' + this.robotName + ' ' + this.commandString + '"}';
    //var slackJSON = 'payload={"text": "@pibot Hello, from the Angular app."}';

    var xmlHttp = new XMLHttpRequest(),
        webhookURL = this.WEBHOOK_URL,
        jsonToSend = slackJSON;
    xmlHttp.open('POST', webhookURL, false);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.send(jsonToSend);
  }

}
