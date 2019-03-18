import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import '../../../../node_modules/blockly/blockly_compressed.js'
import '../../../../node_modules/blockly/javascript_compressed.js'
import './blockly-blocks/blocks.js';

declare var Blockly: any;
var blocklyToXml: any;
var workspace: any;

@Component({
  selector: 'app-blockly-editor',
  templateUrl: './blockly-editor.component.html',
  styleUrls: ['./blockly-editor.component.scss']
})
export class BlocklyEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('toolbox') toolbox: ElementRef;

  ngAfterViewInit(): void {
    workspace = Blockly.inject('blocklyDiv',
    {toolbox: this.toolbox.nativeElement });

    //get the code from blockly
    function jsUpdate() {
      var commandString = Blockly.JavaScript.workspaceToCode(workspace);
      return commandString;
    }
    
     function renderContent() {
     	var xmlTextArea = <HTMLInputElement>document.getElementById('xmlText');
     	
    	var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    	blocklyToXml = Blockly.Xml.domToPrettyText(xmlDom);
    	
      xmlTextArea.value = blocklyToXml;

    }

    function xmlUpdate() {
      var xmlTextArea = <HTMLInputElement>document.getElementById('xmlText');
    	var xml = Blockly.Xml.textToDom("hello");
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
    
    function changeListenerCommands() {
    	jsUpdate();
      renderContent();
      xmlUpdate();
    }
	//workspace.addChangeListener(renderContent); 
	  workspace.addChangeListener(changeListenerCommands);  
    
    function sendCommandsToRobot(){
      var commandString = jsUpdate(); //get the latest from blockly
      //need to send this to robot
    }

    //run the commands from the blocly workspace in the simulator (this should be called with start button)
    function runCommandsInSimulator(){
      var commandString = jsUpdate(); //get the latest from blockly

      if (commandString.includes('\n')){ //this will occur if blocks aren't connected properly
        console.log("ERROR: Please connect all of your blocks before executing."); //could maybe print this above simulator control buttons
      }

      else {
        var commandsArray = commandString.split(';'); //split up the commands
        commandsArray.pop(); // pull off the last element of the array (will always be empty)
        //console.log(commandsArray);

        var numCommands = commandsArray.length;
        for (var i = 0; i < numCommands; i++) { //loop through all of the commands
          if (commandsArray[i].includes('wait')) { // if the command is wait 
            var waitTime = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( '(' ) + 1, commandsArray[i].indexOf( ')' ))); //get the wait time as an int 
            console.log("Waiting this many milliseconds: " + waitTime);
            //need to call simulation service .wait()
          }
          else if (commandsArray[i].includes('moveClaw')) { // if the command is moveClaw
            var distanceInCentimeters = parseInt(commandsArray[i].substring(commandsArray[i].indexOf( '(' ) + 1, commandsArray[i].indexOf( ')' ))); //get the distance in centimeters as an int
            console.log("Moving the claw this many centimeters apart: " + distanceInCentimeters);
            //need to call simulation service .moveClaw()
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
          }
        }
      }
    }
  }
  xmlUpdate() {
    var xmlTextArea = (<HTMLInputElement>document.getElementById('xmlText')).value;
    var xml = Blockly.Xml.textToDom(xmlTextArea);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }
}

