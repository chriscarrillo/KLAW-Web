import {Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from 'tween';
// import * as THREE from 'three/build/three.min.js';
import './js/EnableThreeExamples';
import './js/EnableTween';

import 'three/examples/js/controls/OrbitControls';
import {ModelService} from './model.service';

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
  // tests the reset animation
  test = true;

  constructor(private modelService: ModelService) {
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
          /**adding or testing**/
          // const testCodeStr = 'moveArm(10,10,true)/moveClaw{10)';
          // const commands = testCodeStr.split('/');
          const functionArray = [];
          // functionArray.push(component.moveArmFunction(10, 10, true));
          // commands.forEach(function(command) {
          //   if (command.startsWith('moveArm')) {
          //     /**can't add function in here since it doesn't recognize `this`?**/
          //     need to also parse for the argument values
              // functionArray.push(component.moveArmFunction(10, 10, true));
            // }
            // else if (command.startsWith('moveClaw')) {
            //   functionArray.push(component.moveClawFunction(10));
            // }
          // });
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

      /**added**/
      this.lowerArmLength = (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y;
      this.upperArmLength = (new THREE.Box3().setFromObject(this.upperArm)).getSize().x;

      /**added**/
    }

    private convertLinearToDegrees(posX, posY) {
      /**Courtesy of Kris Hopper**/
      /**updated code**/
      // A
      // const lowerArmLength = (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y;
      // B
      // const upperArmLength = (new THREE.Box3().setFromObject(this.upperArm)).getSize().x;

      // console.log('lowerArmLength:', this.lowerArmLength);
      // console.log('upperArmLength:', this.upperArmLength);

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

    moveArmFunction(posX, posY, isElbowUp = true) {
      const calculatedAngles = this.convertLinearToDegrees(posX, posY);
      let lowerArmAngle = calculatedAngles[0];
      let upperArmAngle = calculatedAngles[1];
      lowerArmAngle *= (Math.PI / 180);
      upperArmAngle *= (Math.PI / 180);
      // degreeElbow: 150 == 2.61799 == PI/12 (positive)
      // degreeBase: -12.622221338044753 == -0.22029932126 == -0.07012345187*PI
      // approx PI/ 15

      // console.log('goal low arm angle:', lowerArmAngle);
      // console.log('goal upper arm angle:', upperArmAngle);

      /**problem:
       * the rotation angles of the lower and upper arm do change
       * but for the upper arm rotation, it goes way off model...
       * is there some sort of limitation that the robot cannot move??
       * well, already have boundaries set within the if statements...
       * figure out the angle it is rotating to currently and compare to boundaries
       */

      // 0, 0, 0
      console.log('lowerArmAngle:', this.lowerArm.rotation.z);
      // 0, 0, -1.5707963267948966
      console.log('upperArmAngle:', this.upperArm.rotation.z);

      const LboundingBox = new THREE.Box3().setFromObject(this.lowerArm);
      const UboundingBox = new THREE.Box3().setFromObject(this.upperArm);

      const axis = new THREE.Vector3(0, 0, 1);
      const lowerArmPivot = new THREE.Vector3(0, 0, 0);

      /***uncomment later***/
      // apply degreeBase
      if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)
            && (lowerArmAngle >= 0 ? this.lowerArm.rotation.z < lowerArmAngle : this.lowerArm.rotation.z > lowerArmAngle)) {
        this.lowerArm.parent.localToWorld(this.lowerArm.position);
        this.lowerArm.position.sub(lowerArmPivot);
        if (lowerArmAngle < 0) {
          this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 144);
        }
        else {
          this.lowerArm.position.applyAxisAngle(axis, Math.PI / 144);
        }
        this.lowerArm.position.add(lowerArmPivot);
        this.lowerArm.parent.worldToLocal(this.lowerArm.position);

        if (lowerArmAngle < 0) {
          this.lowerArm.rotation.z += -Math.PI / 144;
          this.sumOfLowArmRotation += -Math.PI / 144;
        }
        else {
          this.lowerArm.rotation.z += Math.PI / 144;
          this.sumOfLowArmRotation += Math.PI / 144;
        }

        this.testPivot = new THREE.Vector3((new THREE.Box3().setFromObject(this.lowerArm)).getSize().x,
          (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y, 0);

        // this works about the same as prev
        this.testPivot.x -= 18;

      }

      // console.log('sumOFLowArmRotation:', this.sumOfLowArmRotation);
      // console.log('upperArm lower boundaries:', -9 * Math.PI / 12 - this.sumOfLowArmRotation);
      // console.log('upperArm upper boundaries:', -2 * Math.PI / 12 + this.sumOfLowArmRotation);
      /**uncomment later**/
      else if ((this.upperArm.rotation.z > -9 * Math.PI / 12 - this.sumOfLowArmRotation && this.upperArm.rotation.z < -2 * Math.PI / 12 + this.sumOfLowArmRotation)
          && (upperArmAngle >= 0 ? this.upperArm.rotation.z < upperArmAngle : this.upperArm.rotation.z > upperArmAngle)) {

        const upperArmPivot = UboundingBox.getCenter();
        upperArmPivot.x -= (UboundingBox.getSize().x / 2) - 2;
        upperArmPivot.y -= (UboundingBox.getSize().y / 2) - 18;


        /**testing**/
        // maybe use updated lower arm length instead to find pivot point
          // maybe want ot only calculate the lower arm size once to avoid fluctuation
        // const testArmPivot = new THREE.Vector3((new THREE.Box3().setFromObject(this.lowerArm)).getSize().x,
        //   (new THREE.Box3().setFromObject(this.lowerArm)).getSize().y, 0);


        /** x direction needs to be lessened**/
        console.log('testArmPivot', this.testPivot);


        this.upperArm.parent.localToWorld(this.upperArm.position);
        this.upperArm.position.sub(this.testPivot);
        if (upperArmAngle < 0) {
          this.upperArm.position.applyAxisAngle(axis, -Math.PI / 144);
        }
        else {
          this.upperArm.position.applyAxisAngle(axis, Math.PI / 144);
        }
        this.upperArm.position.add(this.testPivot);
        this.upperArm.parent.worldToLocal(this.upperArm.position);
        if (upperArmAngle < 0) {
          this.upperArm.rotation.z += -Math.PI / 144;
        }
        else {
           this.upperArm.rotation.z += Math.PI / 144;
        }


        /**test**/
        // this.upperArm.parent.localToWorld(this.upperArm.position);
        // this.upperArm.position.sub(this.testPivot)
        // this.upperArm.rotation.z += -Math.PI / 144;
        // this.upperArm.position.add(this.testPivot);
        // this.upperArm.parent.worldToLocal(this.upperArm.position);


      }
      // -1.7016960206944711
      console.log('current upper arm rotation', this.upperArm.rotation.z);
    }

    // default is 27 centimeters apart
    moveClawFunction(distanceApart) {
      /**default linear claw movement**/
      /**works**/
      const currentDistApart = this.leftClaw.position.z - this.rightClaw.position.z;
      console.log('currDist:', currentDistApart);
      if (!this.test) {
        return;
      }
      if ((this.leftClaw.position.z > 18) && (this.rightClaw.position.z < 9)
          && (currentDistApart >= distanceApart)) {
        this.leftClaw.position.z -= Math.PI / 60;
        this.rightClaw.position.z += Math.PI / 60;
      }
      // else {
      //   // reset animation test
      //   this.resetModel();
      //   this.test = false;
      // }
    }

    wait(timeToWait) {
      // add timer here
      setTimeout(function () {
        // alert('Waited ' + timeToWait + ' milliseconds!');
        return;
      }, timeToWait);
    }

    resetModel() {
        this.scene.remove(this.model);
        this.createModel();
    }

    render() {
      this.moveArmFunction(10,10, true);
      // this.moveClawFunction(0);

      this.renderer.render(this.scene, this.camera);
    }

    ngAfterViewInit(): void {
        this.createScene();
        this.createLights();
        this.createPlatform();
        this.createModel();
        this.startRendering();

        // this.moveArmFunction(10, 10, true);

        this.addControls();
    }
  }
