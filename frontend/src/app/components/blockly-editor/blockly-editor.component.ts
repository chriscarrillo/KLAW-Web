import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import '../../../../node_modules/blockly/blockly_compressed.js'
import '../../../../node_modules/blockly/javascript_compressed.js'
import './blockly-blocks/blocks.js';

declare var Blockly: any;

@Component({
  selector: 'app-blockly-editor',
  templateUrl: './blockly-editor.component.html',
  styleUrls: ['./blockly-editor.component.css']
})
export class BlocklyEditorComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('toolbox') toolbox: ElementRef;

  ngAfterViewInit(): void {
    var workspace = Blockly.inject('blocklyDiv',
    {toolbox: this.toolbox.nativeElement });

    function jsUpdate() {
      var robotCommands = Blockly.JavaScript.workspaceToCode(workspace);
      console.log(robotCommands);
    }
    workspace.addChangeListener(jsUpdate);
  }
}
