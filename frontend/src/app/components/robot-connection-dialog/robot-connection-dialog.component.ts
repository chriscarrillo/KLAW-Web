import { Component, OnInit, OnDestroy } from '@angular/core';
import { RobotConnectionService } from 'src/app/services/robot-connection/robot-connection.service';
import { Subscription } from 'rxjs';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-robot-connection-dialog',
  templateUrl: './robot-connection-dialog.component.html',
  styleUrls: ['./robot-connection-dialog.component.css']
})
export class RobotConnectionDialogComponent implements OnInit, OnDestroy {
  robotListSubs: Subscription;
  robotList: any[];

  constructor(private robotConnectionService: RobotConnectionService) { }

  ngOnInit() {
    this.robotListSubs = this.robotConnectionService
      .getRobots()
      .subscribe(res => {
        this.robotList = res;
        console.log(res);
      },
      console.error
      );
  }

  ngOnDestroy() {
    this.robotListSubs.unsubscribe();
  }

  selectRobot(event: MatRadioChange) {
    this.robotConnectionService.updateRobotName(event.value);
    this.robotConnectionService.connect();
  }

}
