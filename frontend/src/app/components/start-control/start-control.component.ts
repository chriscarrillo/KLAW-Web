import { Component, OnInit } from '@angular/core';
import { BlocklyEditorComponent } from '../blockly-editor/blockly-editor.component';

@Component({
  providers: [BlocklyEditorComponent],
  selector: 'app-start-control',
  templateUrl: './start-control.component.html',
  styleUrls: ['./start-control.component.css']
})
export class StartControlComponent implements OnInit {

  constructor(private blocklyComponent: BlocklyEditorComponent) {

  }

  ngOnInit() {
  }

  start() {
    this.blocklyComponent.runCommandsInSimulator();
  }

}
