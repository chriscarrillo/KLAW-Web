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

      this.lowerArmLength = (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y;
      this.upperArmLength = (new THREE.Box3().setFromObject(this.upperArm)).getSize().x;

      this.origDist = this.leftClaw.position.z - this.rightClaw.position.z - 4;

      /**added**/
      this.origLowerArmAngle = this.lowerArm.rotation.z;
      this.origUpperArmAngle = this.upperArm.rotation.z;
    }

  private convertLinearToDegrees(posX, posY) {
      /**Courtesy of Kris Hopper**/
      /**updated code**/
      // A
      // const lowerArmLength = (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y;
      // B
      // const upperArmLength = (new THREE.Box3().setFromObject(this.upperArm)).getSize().x;

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

      // console.log('inputDist:', inputDist);
      // console.log('degreeElbow:', degreeElbow);
      // console.log('degreeShift:', degreeShift);
      // console.log('degreeBase:', degreeBase);

      return [degreeBase, degreeElbow];
    }



  /**Comment this method for now, still testing it with the linear to degrees:**/
  moveArmFunction(posX, posY, isElbowUp = true) {
    console.log('moving in posX:', posX);

    const calculatedAngles = this.convertLinearToDegrees(posX, posY);
    let lowerArmAngle = calculatedAngles[0];
    let upperArmAngle = calculatedAngles[1];
    lowerArmAngle *= (Math.PI / 180);
    upperArmAngle *= -(Math.PI / 180); /**added negative for testing**/
    // degreeElbow: 150 == 2.61799 == PI/12 (positive)
    // degreeBase: -12.622221338044753 == -0.22029932126 == -0.07012345187*PI
    // approx PI/ 15

    // console.log('goal low arm angle:', lowerArmAngle);
    console.log('goal upper arm angle:', upperArmAngle);

    // 0, 0, 0
    // console.log('lowerArmAngle:', this.lowerArm.rotation.z);
    // 0, 0, -1.5707963267948966
    console.log('upperArmAngle:', this.upperArm.rotation.z);

    // console.log('original lowerArmAngle:', this.origLowerArmAngle);
    console.log('original upperArmAngle:', this.origUpperArmAngle);

    // -0.6544984694978736
    console.log('lowerArm lower boundary:', -2.5 * Math.PI / 12);
    console.log('lowerArm upper boundary:', 2.5 * Math.PI / 12);

    const LboundingBox = new THREE.Box3().setFromObject(this.lowerArm);
    const UboundingBox = new THREE.Box3().setFromObject(this.upperArm);

    const axis = new THREE.Vector3(0, 0, 1);
    const lowerArmPivot = new THREE.Vector3(0, 0, 0);

    /***uncomment later***/
    // apply degreeBase
    /**test**/
    if (lowerArmAngle < -2.5 * Math.PI / 12) {
      lowerArmAngle = -2.4 * Math.PI / 12;
    }
    // need to change upper boundary
    else if (lowerArmAngle > Math.PI / 12) {  // was 2.5
      lowerArmAngle = Math.PI / 12;
    }

    // /**test**/
    // if (upperArmAngle < (-9 * Math.PI / 12) - this.sumOfLowArmRotation) {
    //   console.log('decreasing to lower boundary');
    //   lowerArmAngle = -9 * Math.PI / 12 - this.sumOfLowArmRotation;
    // }
    // else if (upperArmAngle > (-2 * Math.PI / 12) + this.sumOfLowArmRotation) {
    //   console.log('increasing to upper boundary');
    //   lowerArmAngle = -2 * Math.PI / 12 + this.sumOfLowArmRotation;
    // }

    // if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)
    //       && (lowerArmAngle >= 0 ? this.lowerArm.rotation.z < lowerArmAngle : this.lowerArm.rotation.z > lowerArmAngle)) {
    /**test statement**/
    // console.log('!!current lowerArm rotation:', this.lowerArm.rotation.z);
    // console.log('!!goal lowerArm rotation:', lowerArmAngle);
    console.log('sumOFLowArmRotation:', this.sumOfLowArmRotation);
    console.log('upperArm lower boundaries:', (-9 * Math.PI / 12) - this.sumOfLowArmRotation);
    console.log('upperArm upper boundaries:', (-2 * Math.PI / 12) + this.sumOfLowArmRotation);

     /**test statement**/
    console.log('**current upperArm rotation:', this.upperArm.rotation.z);
    console.log('**goal upperArm rotation:', upperArmAngle);
    if ((this.origLowerArmAngle > lowerArmAngle ? this.lowerArm.rotation.z > lowerArmAngle : this.lowerArm.rotation.z < lowerArmAngle)) {
      console.log('in low if statement');

      this.lowerArm.parent.localToWorld(this.lowerArm.position);
      this.lowerArm.position.sub(lowerArmPivot);
      // if (lowerArmAngle < 0) {
      if (this.lowerArm.rotation.z > lowerArmAngle) {
        // angle down
        this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 144);
      }
      else {
        // angle up
        this.lowerArm.position.applyAxisAngle(axis, Math.PI / 144);
      }
      this.lowerArm.position.add(lowerArmPivot);
      this.lowerArm.parent.worldToLocal(this.lowerArm.position);

      // if (lowerArmAngle < 0) {
      if (this.lowerArm.rotation.z > lowerArmAngle) {
        // angle down
        this.lowerArm.rotation.z += -Math.PI / 144;
        this.sumOfLowArmRotation += -Math.PI / 144;
      }
      else {
        // angle up
        this.lowerArm.rotation.z += Math.PI / 144;
        this.sumOfLowArmRotation += Math.PI / 144;
      }

      this.testPivot = new THREE.Vector3((new THREE.Box3().setFromObject(this.lowerArm)).getSize().x,
        (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y, 0);

      /** this works about the same as prev**/
      // this.testPivot.x -= 18;

      /**test**/
      this.testPivot.x += 18;
      this.testPivot.y -= 30;

    }


    // else if ((this.upperArm.rotation.z > -9 * Math.PI / 12 - this.sumOfLowArmRotation && this.upperArm.rotation.z < -2 * Math.PI / 12 + this.sumOfLowArmRotation)
    //     && (upperArmAngle >= 0 ? this.upperArm.rotation.z < upperArmAngle : this.upperArm.rotation.z > upperArmAngle)) {

    // else if ((this.origUpperArmAngle > upperArmAngle ? this.upperArm.rotation.z > upperArmAngle : this.upperArm.rotation.z < upperArmAngle)) {
    //   console.log('in up if statement');
    //
    //   const upperArmPivot = UboundingBox.getCenter();
    //   upperArmPivot.x -= (UboundingBox.getSize().x / 2) - 2;
    //   upperArmPivot.y -= (UboundingBox.getSize().y / 2) - 18;
    //
    //   console.log('testArmPivot', this.testPivot);
    //
    //   console.log('old pos:', this.upperArm.position);
    //
    //   /**comment for now
    //   this.upperArm.parent.localToWorld(this.upperArm.position);
    //   this.upperArm.position.sub(this.testPivot);
    //   // if (upperArmAngle < 0) {
    //     this.upperArm.position.applyAxisAngle(axis, -Math.PI / 144);
    //   // }
    //   // else {
    //   //   this.upperArm.position.applyAxisAngle(axis, Math.PI / 144);
    //   // }
    //   this.upperArm.position.add(this.testPivot);
    //   this.upperArm.parent.worldToLocal(this.upperArm.position);
    //   // if (upperArmAngle < 0) {
    //     this.upperArm.rotation.z += -Math.PI / 144;
    //   // }
    //   // else {
    //   //    this.upperArm.rotation.z += Math.PI / 144;
    //   // }
    //    **/
    //
    //     this.upperArm.position.sub(this.testPivot);
    //     console.log('new pos:', this.upperArm.position);
    //     if (upperArmAngle < this.upperArm.rotation.z) {
    //       this.upperArm.position.applyAxisAngle(axis, -Math.PI / 144);
    //     }
    //     else {
    //       this.upperArm.position.applyAxisAngle(axis, Math.PI / 144);
    //     }
    //     this.upperArm.position.add(this.testPivot);
    //     if (upperArmAngle < this.upperArm.rotation.z) {
    //       this.upperArm.rotation.z += -Math.PI / 144;
    //     }
    //     else {
    //       this.upperArm.rotation.z += Math.PI / 144;
    //     }
    //
    //
    //   /**test**/
    //   // this.upperArm.parent.localToWorld(this.upperArm.position);
    //   // this.upperArm.position.sub(this.testPivot)
    //   // this.upperArm.rotation.z += -Math.PI / 144;
    //   // this.upperArm.position.add(this.testPivot);
    //   // this.upperArm.parent.worldToLocal(this.upperArm.position);
    //
    //
    // }
    /**comment for now
    else {
      prevMethod = animationOrder[0][0];
      animationOrder.shift();
    }
     **/
    // -1.7016960206944711
    // console.log('current upper arm rotation', this.upperArm.rotation.z);
  }




  /**'Working' moveArm function**/
  //  moveArmFunction(posX, posY, isElbowUp = true) {
  //     console.log('X: ' + posX + ' Y: ' + posY + ' ElbowUp: ' + isElbowUp);
  //
  //     // const calculatedAngles = this.convertLinearToDegrees(posX, posY);
  //     // const lowerArmAngle = calculatedAngles[0];
  //     // const upperArmAngle = calculatedAngles[1];
  //
  //     console.log('current up arm rotation:', this.upperArm.rotation);
  //     console.log('sum of lower arm rotation:', this.sumOfLowArmRotation);
  //
  //     const LboundingBox = new THREE.Box3().setFromObject(this.lowerArm);
  //     const RboundingBox = new THREE.Box3().setFromObject(this.upperArm);
  //
  //     const axis = new THREE.Vector3(0, 0, 1);
  //     const lowerArmPivot = new THREE.Vector3(0, 0, 0);
  //
  //     // need to change limit to -90 to 90 degrees (ofc need to add to default rot pos)
  //     // if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)) {
  //     if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)) {
  //       this.lowerArm.parent.localToWorld(this.lowerArm.position);
  //       this.lowerArm.position.sub(lowerArmPivot);
  //       this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 144);
  //       this.lowerArm.position.add(lowerArmPivot);
  //       this.lowerArm.parent.worldToLocal(this.lowerArm.position);
  //       // this.lowerArm.rotateOnAxis(axis, -Math.PI/12);
  //       this.lowerArm.rotation.z += -Math.PI / 144;  // PI/84 for iter
  //       console.log('rotation:', this.lowerArm.rotation);
  //       console.log('new lowerArm position:', this.lowerArm.position);
  //
  //       console.log('curr position of upArm:', this.upperArm.position);
  //       console.log('curr rotation of upArm:', this.upperArm.rotation);
  //
  //       this.sumOfLowArmRotation += -Math.PI / 144;
  //
  //       console.log('sum of lower arm rotation: ', this.sumOfLowArmRotation);
  //
  //     }
  //     // else if (this.upperArm.rotation.z > -5 * Math.PI / 4 - this.sumOfLowArmRotation && this.upperArm.rotation.z < 5 * Math.PI / 4 + this.sumOfLowArmRotation) {
  //     else if (this.upperArm.rotation.z > -9 * Math.PI / 12 - this.sumOfLowArmRotation && this.upperArm.rotation.z < -2 * Math.PI / 12 + this.sumOfLowArmRotation) {
  //       console.log('current pos of upperArm', this.upperArm.position);
  //
  //       const upperArmPivot = RboundingBox.getCenter();
  //       console.log('orignal upperArmPivot:', upperArmPivot);
  //       console.log('Half of y size:', RboundingBox.getSize().x / 2);
  //       upperArmPivot.x -= (RboundingBox.getSize().x / 2) - 2;
  //       upperArmPivot.y -= (RboundingBox.getSize().y / 2) - 18;
  //       console.log('upperArmPivot:', upperArmPivot);
  //
  //       console.log('curr up arm rotation:', this.upperArm.rotation);
  //
  //       console.log('TEST:', this.upperArm.position.x - upperArmPivot.x);
  //       this.upperArm.parent.localToWorld(this.upperArm.position);
  //       this.upperArm.position.sub(upperArmPivot);
  //       console.log('test position:', this.upperArm.position);
  //       this.upperArm.position.applyAxisAngle(axis, -Math.PI / 144);
  //       this.upperArm.position.add(upperArmPivot);
  //       this.upperArm.parent.worldToLocal(this.upperArm.position);
  //       // this.upperArm.rotateOnAxis(axis, 4*Math.PI / 12);
  //       this.upperArm.rotation.z += -Math.PI / 144;
  //       console.log('after pos of upperArm', this.upperArm.position);
  //       console.log('after rotation of upperArm', this.upperArm.rotation);
  //
  //       console.log('sum of lower arm rotation: ', this.sumOfLowArmRotation);
  //     }
  //     else {
  //       prevMethod = animationOrder[0][0];
  //       animationOrder.shift();
  //     }
  //
  //     /**comment out for now**/
  //     // alert('Moving robot arm (' + posX + ', ' + posY + '), with elbow up being ' + isElbowUp);
  // }


    // default is 27 centimeters apart
    moveClawFunction(distanceApart) {
      console.log('Given Distance:', distanceApart);
      // width of claw is 4
      const currentDistApart = this.leftClaw.position.z - this.rightClaw.position.z - 4;

      console.log('currDist:', currentDistApart);
      console.log('orig Dis:', this.origDist);

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
        console.log('in for loop');
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
      console.log('leftClaw position:', this.leftClaw.position.z);
      console.log('rightClaw position:', this.rightClaw.position.z);
    }

    wait(timeToWait) {
      // add timer here
      console.log('in wait function');
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
        // this.moveArmFunction(startMoveArm[1], startMoveArm[2], startMoveArm[3]);
        this.moveArmFunction(animMethod[1], animMethod[2], animMethod[3]);
        this.renderer.render(this.scene, this.camera);
      }
      else if (animMethod[0] == 'moveClaw') {
        // this.moveClawFunction((startMoveClaw[1]));
        this.moveClawFunction((animMethod[1]));
        this.renderer.render(this.scene, this.camera);
      }
      else if (animMethod[0] == 'wait') {
        // this.wait(startWait[1]);
        this.wait(animMethod[1]);
        this.renderer.render(this.scene, this.camera);
      }
    }

    // /**test**/
    this.moveArmFunction(10, 10);

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
