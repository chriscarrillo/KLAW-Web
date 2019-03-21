import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-control',
  templateUrl: './start-control.component.html',
  styleUrls: ['./start-control.component.css']
})
export class StartControlComponent implements OnInit {
  WEBHOOK_URL = 'https://hooks.slack.com/services/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';

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.postMessageToSlack();
  }

  postMessageToSlack() {
    var slackJSON = 'payload={"text": "@pibot I am sending this message from the KLAW Web app."}';

    var xmlHttp = new XMLHttpRequest(),
        webhookURL = this.WEBHOOK_URL,
        jsonToSend = slackJSON;
    xmlHttp.open('POST', webhookURL, false);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.send(jsonToSend);
  }

}
