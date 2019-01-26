import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
declare var Blockly: any;

@Component({
  selector: 'app-blockly-editor',
  templateUrl: './blockly-editor.component.html',
  styleUrls: ['./blockly-editor.component.css']
})
export class BlocklyEditorComponent implements OnInit {
  workspace: any;
  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('toolbox') toolbox: ElementRef;

  ngAfterViewInit(): void {
    this.workspace = Blockly.inject('blocklyDiv',
    {toolbox: this.toolbox.nativeElement });
  }
}
