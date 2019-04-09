import {Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Inject, Injectable} from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from 'tween';
// import * as THREE from 'three/build/three.min.js';
import './js/EnableThreeExamples';
import './js/EnableTween';

import 'three/examples/js/controls/OrbitControls';
import {ModelService} from './model.service';
import {EventsService} from './events.service';

let startMoveArm: any[];
let startMoveClaw: any[];
let startWait: any[];
let animationOrder: any[];
let prevMethod: any;

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})

export class SimulatorComponent implements /*OnInit*/ AfterViewInit {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: THREE.OrbitControls;
  container;
  model;
  base;
  lowerArm;
  upperArm;
  leftClaw;
  rightClaw;
  sumOfLowArmRotation = 0;
  lowerArmLength;
  upperArmLength;
  testPivot;
  origDist;
  origLowerArmAngle;
  origUpperArmAngle;
  pivot;
  lowPivot;
  currUpperAngle;
  currLowerAngle;

  constructor(private modelService: ModelService, private eventsService: EventsService) {
    this.render = this.render.bind(this);
  }

  createScene() {
      this.scene = new THREE.Scene();
      // Create and position a camera
      this.camera = new THREE.PerspectiveCamera(
        60,                                   // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1,                                  // Near clipping pane
        1000                                  // Far clipping pane
      );

      // Reposition the camera
      this.camera.position.set(8, 18, 75);
      // Point the camera at a given coordinate
      this.camera.lookAt(new THREE.Vector3(10, 18, 0));

      // refer to 'simulator' element to match the size of component
      this.container = document.getElementById('simulator');

      // // Append to the document
      // document.getElementById('simulator').appendChild(this.renderer.domElement);
  }

  @HostListener('window:resize', ['$event'])
  resizeWindow(event: Event) {
        const WIDTH = this.container.clientWidth,
          HEIGHT = this.container.clientHeight;
        this.renderer.setSize(WIDTH, HEIGHT);
        this.camera.aspect = WIDTH / HEIGHT;
        this.camera.updateProjectionMatrix();
  }

    // adds Orbit Controls to scene
  addControls() {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('change', this.render);
  }

  // inits renderer and maintains timing on animation
  private startRendering() {
      try {
        this.renderer = new THREE.WebGLRenderer({
          antialias: true
        });
      } catch (e) {
        alert('Need to enable webgl to see 3D graphics');
      }

      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setClearColor(0x000000);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      document.getElementById('simulator').appendChild(this.renderer.domElement);

      const component: SimulatorComponent = this;

      (function render() {
        setTimeout(function() {
          requestAnimationFrame(render);

        }, 1000 / 20);
        component.render();
      }());
  }

  createLights() {
      // adds hemisphere light
      const hemisphereLight = new THREE.HemisphereLight( 0xffeeee, 0x111122, 1 );

      // applies light to all objects in scene
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);

      // applies point light
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(25, 50, 25);
      pointLight.castShadow = true;
      pointLight.shadow.mapSize.width = 1024;
      pointLight.shadow.mapSize.height = 1024;

      this.scene.add(hemisphereLight);
      this.scene.add(ambientLight);
      this.scene.add(pointLight);
  }

  createPlatform() {
      // platform for model
      const grid = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 80, 70, 70),
        new THREE.MeshBasicMaterial({color: 0x393839, wireframe: true})
      );
      grid.position.y -= 3;
      grid.rotateX(Math.PI / 2);
      this.scene.add(grid);

      // var grid = new THREE.GridHelper( 80, 70, 0x393839, 0x393839 );
  }

  createModel() {
      this.modelService.SimModel.prototype = Object.create(THREE.Mesh.prototype);
      this.model = this.modelService.SimModel();

      this.scene.add(this.model);
      this.base = this.model.children[0];
      this.lowerArm = this.model.children[1];
      this.upperArm = this.lowerArm.children[1];
      this.leftClaw = this.upperArm.children[2];
      this.rightClaw = this.upperArm.children[3];

      // this.lowerArmLength = (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y;
      // this.upperArmLength = (new THREE.Box3().setFromObject(this.upperArm)).getSize().x;

      this.lowerArmLength = (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y - 5;
      this.upperArmLength = (new THREE.Box3().setFromObject(this.upperArm)).getSize().x;

      this.origDist = this.leftClaw.position.z - this.rightClaw.position.z - 4;

      // this.origLowerArmAngle = this.lowerArm.rotation.z;
      this.origLowerArmAngle = Math.PI / 2; // possible change to this since relative to base
      this.currLowerAngle = Math.PI / 2;

      // more negative angle is right, more positive angle is left
      // want to change this to be reverse
    // ex: if get 150 deg for base angle, want to move left
     // can only do that when want to be smaller

      this.pivot = new THREE.Group();

      this.lowPivot = new THREE.Group();

      // this.origUpperArmAngle = (this.upperArm.rotation.z);
      // console.log('TEST:', this.origUpperArmAngle);
      // this.currUpperAngle = (this.upperArm.rotation.z);
      this.origUpperArmAngle = Math.PI / 2;
      this.currUpperAngle = Math.PI / 2;
    }

  private convertLinearToDegrees(posX, posY) {
      /**Courtesy of Kris Hopper**/
      /**updated code**/

      let stepBase = 0;
      let stepElbow = 0;

      const inputDist = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
      const inputAngle = Math.acos((Math.pow(this.lowerArmLength, 2) + Math.pow(this.upperArmLength, 2) - Math.pow(inputDist, 2)) / (2 * this.lowerArmLength * this.upperArmLength) );
      const lowerArmAngle = Math.acos((Math.pow(this.upperArmLength, 2) + Math.pow(inputDist, 2) - Math.pow(this.lowerArmLength, 2)) / (2 * this.upperArmLength * inputDist));
      const angShift = Math.acos((Math.pow(posY, 2) - Math.pow(posX, 2) - Math.pow(inputDist, 2)) / (2 * posX * inputDist));

      // Kris converted radians to degree here
      const inputDegree = (180 / Math.PI) * inputAngle;
      const lowerArmDegree = (180 / Math.PI) * lowerArmAngle;
      let degreeShift =  (180 / Math.PI) * angShift;

      let degreeElbow = inputDegree + degreeShift;
      let degreeBase = 90 - lowerArmDegree;
      degreeShift = 180 - degreeShift;

      if (posY < 0) {
        degreeBase = degreeBase + degreeShift;
      }
      else if (posY > 0) {
        degreeBase = degreeBase - degreeShift;
      }

      if (degreeElbow > 150) {
        degreeElbow = 150;
      }

      stepBase = degreeBase;
      stepElbow = degreeElbow;

      stepBase = Math.round(stepBase);
      stepElbow = Math.round(stepElbow);

      console.log('Base', degreeBase);
      console.log('Elbow', degreeElbow);

      return [/*-*/degreeBase, degreeElbow];
    }


  /**Comment this method for now, still testing it with the linear to degrees:**/
  moveArmFunction(posX, posY, isElbowUp = true) {
    console.log('moving in posX:', posX);

    const calculatedAngles = this.convertLinearToDegrees(posX, posY);
    let lowerArmAngle = calculatedAngles[0];
    let upperArmAngle = calculatedAngles[1];

    // let lowerArmAngle = 0;
    // let upperArmAngle = 0; // should not move simulator

    // test degrees:
    // let lowerArmAngle = 180;
    // let upperArmAngle = 10; // should move upper arm down 10 degrees

    // == 10 degrees for base
    // == 3.75 degrees for elbow
    // so lower should go forward, and upper should go down??

    // if lower/uppperArmAngle < 0, then 90 - 60 = 30
    if (lowerArmAngle < 0) {
      // lowerArmAngle = (90 - lowerArmAngle) + 90;
      // lowerArmAngle = -(lowerArmAngle);
      lowerArmAngle += 360;
      console.log('Changed low angle to pos:', lowerArmAngle);
    }
    if (upperArmAngle < 0) {
      // upperArmAngle = (90 - upperArmAngle) + 90;
      // upperArmAngle = -(upperArmAngle);
      upperArmAngle += 360;
      console.log('Changed low angle to pos:', upperArmAngle);
    }
    lowerArmAngle *= (Math.PI / 180);
    upperArmAngle *= (Math.PI / 180);

    const axis = new THREE.Vector3(0, 0, 1);
    const lowerArmPivot = new THREE.Vector3(0, 0, 0);

    // assess given base and elbow angles to fit boundaries
    // 22.5
    if (lowerArmAngle < 55 * Math.PI / 180) {  // was -2.5  1.5pi/12
      console.log('goal lowerAngle changed to lower bound');
      lowerArmAngle = 55 * Math.PI / 180;  //was -2.4  1.4pi/12
    }
    // 15
    else if (lowerArmAngle > 105 * Math.PI / 180) {  // was 2.5 //was Pi/12
      console.log('goal lowerAngle changed to upper bound');
      lowerArmAngle = 105 * Math.PI / 180;
    }

    if (upperArmAngle < (40 * Math.PI / 180) /*- this.sumOfLowArmRotation*/) { //was 9PI/12
      console.log('goal upperAngle changed to lower bound');
      upperArmAngle = 40 * Math.PI / 180 /*- this.sumOfLowArmRotation*/;
    }
    // 30
    else if (upperArmAngle > (180 * Math.PI / 180) /*+ this.sumOfLowArmRotation*/) { //was -2PI/12
      console.log('goal upperAngle changed to upper bound');
      upperArmAngle = 180 * Math.PI / 180 /*+ this.sumOfLowArmRotation*/;
    }

    console.log('(deg) goal lowerAngle:', (lowerArmAngle * 180 / Math.PI));
    console.log('(deg) goal upperAngle:', (upperArmAngle * 180 / Math.PI));
    console.log('goal lowerAngle:', lowerArmAngle);
    console.log('goal upperAngle:', upperArmAngle);
    console.log('curr lowerAngle:', this.currLowerAngle);
    console.log('curr upperAngle:', this.currUpperAngle);
    console.log('(deg) curr lowerAngle:', (this.currLowerAngle * 180 / Math.PI));
    console.log('(deg) curr upperAngle:', (this.currUpperAngle * 180 / Math.PI));

    if ((this.origLowerArmAngle > lowerArmAngle ? this.currLowerAngle > lowerArmAngle : this.currLowerAngle < lowerArmAngle)) {
      console.log('in low if statement');

      this.lowPivot.position.set(-3, 10, 0);
      this.model.add(this.lowPivot);
      this.lowPivot.add(this.lowerArm);

      // need to adjust lower arm
      this.lowerArm.position.x = -10;
      this.lowerArm.position.y = -8;
      // this.lowerArm.position.z = -2;


      // want to rotate inwards
      if (this.currLowerAngle > lowerArmAngle) {
        this.lowPivot.rotation.z += -Math.PI / 144;
        this.currLowerAngle += -Math.PI / 144;
      }
      else {
        this.lowPivot.rotation.z += Math.PI / 144;
        this.currLowerAngle += Math.PI / 144;
      }




      // this.lowerArm.parent.localToWorld(this.lowerArm.position);
      // this.lowerArm.position.sub(lowerArmPivot);
      //
      // // want to rotate inwards
      // if (this.currLowerAngle > lowerArmAngle) {
      // // if (this.currLowerAngle > lowerArmAngle) {
      //   // angle down
      //   this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 144);
      // } else {
      //   // angle up
      //   this.lowerArm.position.applyAxisAngle(axis, Math.PI / 144);
      // }
      // this.lowerArm.position.add(lowerArmPivot);
      // this.lowerArm.parent.worldToLocal(this.lowerArm.position);
      //
      // if (this.currLowerAngle > lowerArmAngle) {
      // /**change so that if lowerArmAngle > than this.currLowerAngle**/
      // // if (this.currLowerAngle > lowerArmAngle) {
      //   // angle down
      //   this.lowerArm.rotation.z += -Math.PI / 144;
      //   this.currLowerAngle += -Math.PI / 144;
      //   this.sumOfLowArmRotation += -Math.PI / 144;
      // } else {
      //   // angle up
      //   this.lowerArm.rotation.z += Math.PI / 144;
      //   this.currLowerAngle += Math.PI / 144;
      //   this.sumOfLowArmRotation += Math.PI / 144;
      // }

    }

    else if ((this.origUpperArmAngle > upperArmAngle ? this.currUpperAngle > upperArmAngle : this.currUpperAngle < upperArmAngle)) {

      this.testPivot = new THREE.Vector3(this.lowerArm.position.x + 10,
        this.lowerArm.position.y + 30, 2);

      // need to move pivot back to world origin (in this case, where we want the pivot pt to be)
      this.pivot.position.set(50, 160, 2.5);
      this.lowerArm.add(this.pivot);
      this.pivot.add(this.upperArm);

      // alter upper arm position:
      this.upperArm.position.x = -40;
      this.upperArm.position.y = 50;
      this.upperArm.position.z = -2;

      // want to rotate inwards
      if (this.currUpperAngle > upperArmAngle) {
        this.pivot.rotation.z += -Math.PI / 144;
        this.currUpperAngle += -Math.PI / 144;
      }
      else {
        this.pivot.rotation.z += Math.PI / 144;
        this.currUpperAngle += Math.PI / 144;
      }

  }
    else {
      prevMethod = animationOrder[0][0];
      animationOrder.shift();
    }
  }

  moveClawFunction(distanceApart) {
      const currentDistApart = this.leftClaw.position.z - this.rightClaw.position.z - 4;
      // default: currentDistApart = 24
      // max: currentDistApart = 24
      // min: currentDistApart = 0 (approx)

      // if given is above max, only reach til max
      if (distanceApart > 24) {
        distanceApart = 24;
      }
      // if given is below min, only reach til min
      else if (distanceApart < 0) {
        distanceApart = 0;
      }

      if ((this.origDist > distanceApart ? currentDistApart > distanceApart : currentDistApart < distanceApart)) {
        if (currentDistApart > distanceApart) {
          // closes
          // this.leftClaw.position.z -= Math.PI / 60;
          // this.rightClaw.position.z += Math.PI / 60;
          this.leftClaw.position.z -= .05;
          this.rightClaw.position.z += .05;
        }
        else {
          // opens
          // this.leftClaw.position.z += Math.PI / 60;
          // this.rightClaw.position.z -= Math.PI / 60;
          this.leftClaw.position.z += .05;
          this.rightClaw.position.z -= .05;
        }
      }
      else {
        // update origDist
        this.origDist = this.leftClaw.position.z - this.rightClaw.position.z - 4;
        prevMethod = animationOrder[0][0];
        animationOrder.shift();

      }
    }

  wait(timeToWait) {
      // add timer here
      setTimeout(function () {
        console.log('Waited ' + timeToWait + ' milliseconds!');
        // alert('Waited ' + timeToWait + ' milliseconds!');
        return;
      }, timeToWait);
      prevMethod = animationOrder[0][0];
      animationOrder.shift();
    }

  resetModel() {
        this.scene.remove(this.model);
        this.createModel();
    }

  render() {
     const component: SimulatorComponent = this;
    // looks at the animation order and calls each animation method accordingly
    if (animationOrder != null && animationOrder.length !== 0) {
      // get first method called
      const animMethod = animationOrder[0];
      // checks to see which animation method is being called
      if (animMethod[0] == 'moveArm') {
        if (prevMethod != null && prevMethod == 'moveArm') {
          console.log('MODEL TEST');
          // add wait to make transition less jerky
          // setTimeout(function () {
          //   component.resetModel();
          //   // return;
          // }, 4000);
          // console.log('reseted model!');
          this.resetModel();
          component.sumOfLowArmRotation = 0;
          prevMethod = '';
        }
        this.moveArmFunction(animMethod[1], animMethod[2], animMethod[3]);
        this.renderer.render(this.scene, this.camera);
      }
      else if (animMethod[0] == 'moveClaw') {
        this.moveClawFunction((animMethod[1]));
        this.renderer.render(this.scene, this.camera);
      }
      else if (animMethod[0] == 'wait') {
        this.wait(animMethod[1]);
        this.renderer.render(this.scene, this.camera);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
  
  ngAfterViewInit(): void {
    this.createScene();
    this.createLights();
    this.createPlatform();
    this.createModel();
    this.startRendering();

    // initializes the animation order
    animationOrder = [];

    // event listeners that listen to any passed data from Blockly component
    this.eventsService.on('moveArmTest', (testParams) => {
      console.log('moveArm called via event');
      console.log('testParams: ' + testParams);
    });

    this.eventsService.on('moveArm', (x, y, isElbowUp) => {
      console.log('moveArmFunction called via event');
      console.log('Received arguments: ' + x + ', ' + y + ', ' + isElbowUp);
      startMoveArm = [];
      startMoveArm[0] = 'moveArm';
      startMoveArm[1] = x;
      startMoveArm[2] = y;
      startMoveArm[3] = isElbowUp;
      animationOrder.push(startMoveArm);

      if (animationOrder.length == 1) {
        this.sumOfLowArmRotation = 0;
        prevMethod = '';
        this.resetModel();
      }
    });
    this.eventsService.on('moveClaw', (distanceApart) => {
      console.log('moveClawFunction called via event');
      console.log('Received arguments: ' + distanceApart);
      startMoveClaw = [];
      startMoveClaw[0] = 'moveClaw';
      startMoveClaw[1] = distanceApart;
      animationOrder.push(startMoveClaw);

      if (animationOrder.length == 1) {
        this.sumOfLowArmRotation = 0;
        prevMethod = '';
        this.resetModel();
      }
    });
    this.eventsService.on('wait', (waitTime) => {
      console.log('waitFunction called via event');
      console.log('Received arguments: ' + waitTime);
      startWait = [];
      startWait[0] = 'wait';
      startWait[1] = waitTime;
      animationOrder.push(startWait);

      if (animationOrder.length == 1) {
        this.sumOfLowArmRotation = 0;
        prevMethod = '';
        this.resetModel();
      }
    });

    this.addControls();
  }
}
