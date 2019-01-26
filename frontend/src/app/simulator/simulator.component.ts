import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  simTitle: 'KLAW Model';
  selector: 'simulator';
  constructor() { }

  ngOnInit() {
  }
  // create methods that you call in html file
}
