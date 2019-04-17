import { Component, OnInit } from '@angular/core';
import { RobotConnectionService } from '../../services/robot-connection/robot-connection.service';
import { RobotConnectionDialogComponent } from '../robot-connection-dialog/robot-connection-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-robot-connection',
  templateUrl: './robot-connection.component.html',
  styleUrls: ['./robot-connection.component.css']
})
export class RobotConnectionComponent implements OnInit {

  constructor(public connectionService: RobotConnectionService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openConnectDialog() {
    const dialogRef = this.dialog.open(RobotConnectionDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
