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

  constructor(private dataService: DataService, private eventsService: EventsService) { }

  ngOnInit() {
    // this.dataService.commandString.subscribe(commandString => this.commandString = commandString);
  }
  
  @ViewChild('toolbox') toolbox: ElementRef;

  ngAfterViewInit(): void {
    workspace = Blockly.inject('blocklyDiv',
    { toolbox: this.toolbox.nativeElement });

    //get the code from blockly
    function jsUpdate() {
      var commandString = Blockly.JavaScript.workspaceToCode(workspace);
      commandStr = commandString;
      console.log('in jsUpdate(), commandString: ' + commandStr);
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
    console.log('Button has been clicked!');
    console.log('testArgs: ' + testArgs);
    this.eventsService.broadcast('moveArmTest', testArgs);
    return (throwError('test'));
    // return (throwError(testArgs));
  }

  // run the commands from the blocly workspace in the simulator (this should be called with start button)
  runCommandsInSimulator() {
    console.log('commandString in runsCommandsInSimulator: ' + commandStr);
    if (commandStr == null) {
      alert('Cannot run program without code!');
      return;
    }
    // var commandString = jsUpdate(); //get the latest from blockly
    if (commandStr.includes('\n')) { // this will occur if blocks aren't connected properly
      console.log("ERROR: Please connect all of your blocks before executing."); // could maybe print this above simulator control buttons
    }

    else {
      var commandsArray = commandStr.split(';'); // split up the commands
      commandsArray.pop(); // pull off the last element of the array (will always be empty)
      // console.log(commandsArray);

      var numCommands = commandsArray.length;
      for (var i = 0; i < numCommands; i++) { // loop through all of the commands
        if (commandsArray[i].includes('wait')) { // if the command is wait
          var waitTime = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( '(' ) + 1, commandsArray[i].indexOf( ')' ))); //get the wait time as an int
          console.log("Waiting this many milliseconds: " + waitTime);
          //need to call simulation service .wait()
          /**added call to broadcast**/
          this.callWaitFunction(waitTime);
        }
        else if (commandsArray[i].includes('moveClaw')) { // if the command is moveClaw
          var distanceInCentimeters = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( '(' ) + 1, commandsArray[i].indexOf( ')' ))); //get the distance in centimeters as an int
          console.log("Moving the claw this many centimeters apart: " + distanceInCentimeters);
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
          console.log("Moving arm. x: " + xCoord + ", " + "y: " + yCoord + ", " + "isUp: " + isUp)
          //need to call simulation service .moveArm()
          /**added call to broadcast**/
          this.callMoveArmFunction(xCoord, yCoord, isUpString);
        }
      }
    }
  }

  callMoveArmFunction(x, y, isUp) {
    console.log('broadcast arm');
    this.eventsService.broadcast('moveArm', x, y, isUp);
  }
  callMoveClawFunction(dist) {
    console.log('broadcast claw');
    this.eventsService.broadcast('moveClaw', dist);
  }
  callWaitFunction(time) {
    console.log('broadcast wait');
    this.eventsService.broadcast('wait', time);
  }
}
