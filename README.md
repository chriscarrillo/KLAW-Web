# KLAW Web
[![Build Status](https://travis-ci.org/chriscarrillo/KLAW-Web.png)](https://travis-ci.org/chriscarrillo/KLAW-Web)

Built with ❤ by [Curtis Hohl](https://github.com/RubiconIII), [Hannah Bernal](https://github.com/hannahbernal02), [Chris Carrillo](https://github.com/chriscarrillo), and [Taylor Moe](https://github.com/tmoe2).

## Website
KLAW Web is an educational tool designed to help STEM teachers and hobbyists learn about robotics and programming. The platform allows users to design, build, program, and test robotic arms without having to develop a detailed understanding of the engineering concepts involved.

The app was designed in partnership with a team of Electrical and Mechanical Engineering students who constructed a robotic arm to be controlled with the web application.

[Check out KLAW Web  here 👍](https://klaw-web.herokuapp.com/)

## Usage
At it's core, KLAW is a tool for learning how to program robots. Users can drag code blocks to control a simulator component within the web application. This component simulates movements from the physical robotic arm that was constructed with our partner team.  Additionally, these controls can be used to control the physical robot (and any others that are built in its likeness).

### Move Arm
![alt text](https://i.imgur.com/iGF0N8g.jpg "moveArm() command")

The "move arm" block adds a command telling the robot to move to a specific location. This command accepts user input in a traditional (x, y) coordinate system. So, the first input is the distance from the robot's base. The second input is the distance from the floor on which the robot is set. Users can also set whether or not their robot arm's elbow is up or down. The physical arm always uses an "elbow up" configuration, so this setting won't affect the simulator's movements. However, new arms constructed for this service could easily use this parameter.

### Wait
![alt text](https://i.imgur.com/7VRTv7V.jpg "wait() command")

The "wait" block adds a command telling the robot to wait for a specific period of time before executing the next command. The time is expressed in milliseconds.

### Move Claw
![alt text](https://i.imgur.com/EHIrrXp.jpg "moveClaw() command")

The "move claw" block adds a command telling the robot to open or close its claw so that the fingers are a certain distance apart. The distance is expressed in centimeters.

### Command Chaining
![alt text](https://i.imgur.com/tUea0gm.jpg "command chaining")

Of course, commands can be chained together to produce a sequence of actions. Keep in mind though, every time a "move arm" command is used, the robot will need to return to its origin point because of the limitations of the stepper motors used in the machine.

### Saving the Workspace
![alt text](https://i.imgur.com/yzPFv88.jpg "xml tab")

Each block in the workspace is represented by XML data. The pure XML can be accessed by clicking the "XML" tab. Save the state of the block coding workspace by copying the XML data from the form in the workspace. Then recreate the block code workspace by pasting the XML code back into the form and pressing "Update Code Blocks."

Try it with our sample XML:
```
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="move_arm" id="=,!P|`61:j{uQsD,,xhQ" x="180" y="70">
    <field name="armX">1</field>
    <field name="armY">2</field>
    <field name="isElbowUp">TRUE</field>
    <next>
      <block type="move_claw" id="9[8WDf5-2~Z`kMkur#]-">
        <field name="distanceBetweenFingersInCentimeters">0</field>
        <next>
          <block type="wait" id="20}F=|KCf:ID:1b_B!my">
            <field name="waitInMilliseconds">5000</field>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
```

### Sending Commands
![alt text](https://i.imgur.com/T8CKfEM.jpg "start")

Send each of the commands in the block code workspace to the robot by pressing the "Start" button.

### Connecting to a Robot
![alt text](https://i.imgur.com/N0eM5hB.jpg "offline")

By default, when users visit the website, they are "Offline" because they aren't connected to any robots.  Connect to a robot by pressing the "Connect" button and selecting the desired robot. Then, when the "Start" button is pressed, KLAW Web will sed commands to both the simulator and the robot the user is connected to.

## Implementation
The front-end interface was built using Google's Angular:
[Angular](https://github.com/angular/angular)

Block programming was implemented with Google's Blockly library: [Blockly](https://github.com/google/blockly)

The back end server was implemented with Flask:
[Flask](http://flask.pocoo.org/)