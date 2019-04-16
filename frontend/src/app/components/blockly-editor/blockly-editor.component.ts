import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service.js';
import { Observable } from 'rxjs/Observable';
import { EventsService } from '../../simulator/events.service';
import { throwError } from 'rxjs';
import '../../../../node_modules/blockly/blockly_compressed.js'
import '../../../../node_modules/blockly/javascript_compressed.js'
import './blockly-blocks/blocks.js';

declare var Blockly: any;
var blocklyToXml: any;
var workspace: any;
var commandStr: any;

@Component({
  selector: 'app-blockly-editor',
  templateUrl: './blockly-editor.component.html',
  styleUrls: ['./blockly-editor.component.scss']
})
export class BlocklyEditorComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }
  
  @ViewChild('toolbox') toolbox: ElementRef;

  ngAfterViewInit(): void {
  
    workspace = Blockly.inject('blocklyDiv',
    { toolbox: this.toolbox.nativeElement });

    //get the code from blockly
    function jsUpdate() {
      var commandString = Blockly.JavaScript.workspaceToCode(workspace);
      commandStr = commandString;
    }
    
     function renderContent() {
     	var xmlTextArea = <HTMLInputElement>document.getElementById('xmlText');
     	
    	var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    	blocklyToXml = Blockly.Xml.domToPrettyText(xmlDom);
    	
      xmlTextArea.value = blocklyToXml;

    }
    
    function changeListenerCommands() {
    	jsUpdate();
      renderContent();
    }

	  workspace.addChangeListener(changeListenerCommands);
    
  }

  get CommandString() {
    return commandStr;
  }
  
  xmlUpdate() {
    var xmlTextArea = (<HTMLInputElement>document.getElementById('xmlText')).value;
    var xml = Blockly.Xml.textToDom(xmlTextArea);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }

  eventServiceTest(testArgs) {
    this.eventsService.broadcast('moveArmTest', testArgs);
    return (throwError('test'));
  }

  // run the commands from the blocly workspace in the simulator (this should be called with start button)
  runCommandsInSimulator() {
    if (commandStr == null) {
      alert('Cannot run program without code!');
      return;
    }
    
    if (commandStr.includes('\n')) { // this will occur if blocks aren't connected properly
    }

    else {
      var commandsArray = commandStr.split(';'); // split up the commands
      commandsArray.pop(); // pull off the last element of the array (will always be empty)

      var numCommands = commandsArray.length;
      for (var i = 0; i < numCommands; i++) { // loop through all of the commands
        if (commandsArray[i].includes('wait')) { // if the command is wait
          var waitTime = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( '(' ) + 1, commandsArray[i].indexOf( ')' ))); //get the wait time as an int
          //need to call simulation service .wait()
          /**added call to broadcast**/
          this.callWaitFunction(waitTime);
        }
        else if (commandsArray[i].includes('moveClaw')) { // if the command is moveClaw
          var distanceInCentimeters = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( '(' ) + 1, commandsArray[i].indexOf( ')' ))); //get the distance in centimeters as an int
          //need to call simulation service .moveClaw()
          /**added call to broadcast**/
          this.callMoveClawFunction(distanceInCentimeters);
        }
        else if (commandsArray[i].includes('moveArm')) { //in the command is moveArm
          var xCoord = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( '(' ) + 1, commandsArray[i].indexOf( ',' ))); //get the x coord as an int
          var yCoord = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( ',' ) + 1, commandsArray[i].lastIndexOf( ',' ))); // get the y coord as an int
          var isUpString = commandsArray[i].substring(commandsArray[i].lastIndexOf( ',' ) + 1, commandsArray[i].indexOf( ')' )); //get the isUp value
          var isUp = true; //by default isUp is true
          if (isUpString == 'false'){ //if it reads false, though
            isUp = false; //make the boolean false
          }
          //need to call simulation service .moveArm()
          /**added call to broadcast**/
          this.callMoveArmFunction(xCoord, yCoord, isUpString);
        }
      }
    }
  }

  callMoveArmFunction(x, y, isUp) {
    this.eventsService.broadcast('moveArm', x, y, isUp);
  }
  callMoveClawFunction(dist) {
    this.eventsService.broadcast('moveClaw', dist);
  }
  callWaitFunction(time) {
    this.eventsService.broadcast('wait', time);
  }
}
