import {Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import * as THREE from 'three';
import * as TWEEN from 'tween';
// import * as THREE from 'three/build/three.min.js';
import './js/EnableThreeExamples';
import './js/EnableTween';

import * as createjs from 'createjs-module';


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

      console.log(this.scene);
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
      console.log('before setting model');
      // this.modelService.SimModel.prototype = Object.create(THREE.Object3D.prototype); //commented out for test
      this.modelService.SimModel.prototype = Object.create(THREE.Mesh.prototype); // added for test
      this.model = this.modelService.SimModel();
      console.log(this.model);
      console.log('after setting model');

      this.scene.add(this.model);
      // 7 children in general
      this.base = this.model.children[0];
      this.lowerArm = this.model.children[1];
      this.upperArm = this.lowerArm.children[1];
      this.leftClaw = this.upperArm.children[2];
      this.rightClaw = this.upperArm.children[3];
    }

    private convertLinearToDegrees(posX, posY) {
      /**Courtesy of Kris Hopper**/
      const startX = 0;
      const startY = 10;
      const leg1 = 22.941;
      const leg2 = 37.252;
      const moveX = posX - startX;
      const moveY = posY - startY;
      const coordLimit = Math.pow(moveX, 2) + Math.pow(moveY, 2);
      const r = Math.sqrt(coordLimit);

      if (1914.001 <= coordLimit && coordLimit <= 3623.197) {
        let q_2 = Math.acos((Math.pow(moveX, 2) + Math.pow(moveY, 2) - Math.pow(leg1, 2) - Math.pow(leg2, 2)) / (2 * leg1 * leg2));
        let q_1 = Math.atan(moveY / moveX) - Math.atan((leg2 * Math.sin(q_2) / (leg1 + leg2 * Math.cos(q_2))));
        // convert radians to degrees
        q_1 = q_1 * (180 / Math.PI);
        q_2 = q_2 * (180 / Math.PI);

        const lowerArmAngle = -(90 - q_1);
        const upperArmAngle = -(180 - q_2);

        return [lowerArmAngle, upperArmAngle];
      }
    }

    moveArmFunction(posX, posY, isElbowUp = true) {
      console.log('X: ' + posX + ' Y: ' + posY + ' ElbowUp: ' + isElbowUp);

      // const calculatedAngles = this.convertLinearToDegrees(posX, posY);
      // const lowerArmAngle = calculatedAngles[0];
      // const upperArmAngle = calculatedAngles[1];

      console.log('current up arm rotation:', this.upperArm.rotation);
      console.log('sum of lower arm rotation:', this.sumOfLowArmRotation);

      const LboundingBox = new THREE.Box3().setFromObject(this.lowerArm);
      const RboundingBox = new THREE.Box3().setFromObject(this.upperArm);

      const axis = new THREE.Vector3(0, 0, 1);
      const lowerArmPivot = new THREE.Vector3(0, 0, 0);

      // need to change limit to -90 to 90 degrees (ofc need to add to default rot pos)
      // if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)) {
      if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)) {
        this.lowerArm.parent.localToWorld(this.lowerArm.position);
        this.lowerArm.position.sub(lowerArmPivot);
        this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 144);
        this.lowerArm.position.add(lowerArmPivot);
        this.lowerArm.parent.worldToLocal(this.lowerArm.position);
        // this.lowerArm.rotateOnAxis(axis, -Math.PI/12);
        this.lowerArm.rotation.z += -Math.PI / 144;  // PI/84 for iter
        console.log('rotation:', this.lowerArm.rotation);
        console.log('new lowerArm position:', this.lowerArm.position);

        console.log('curr position of upArm:', this.upperArm.position);
        console.log('curr rotation of upArm:', this.upperArm.rotation);

        this.sumOfLowArmRotation += -Math.PI / 144;

        console.log('sum of lower arm rotation: ', this.sumOfLowArmRotation);

      }

      // default rot is 6*pi/12
      // change limit to -225 to 225  (adding defulat rot pos)
      // maybe instead of the boundaries, need to incorporate the actual rotation angles
        // that represent the given linear arguments
      else if (this.upperArm.rotation.z > -9 * Math.PI / 12 - this.sumOfLowArmRotation && this.upperArm.rotation.z < -2 * Math.PI / 12 + this.sumOfLowArmRotation) {
      // else if (this.upperArm.rotation.z > -5 * Math.PI / 4 - this.sumOfLowArmRotation && this.upperArm.rotation.z < 5 * Math.PI / 4 + this.sumOfLowArmRotation) {
        console.log('current pos of upperArm', this.upperArm.position);

        const upperArmPivot = RboundingBox.getCenter();
        console.log('orignal upperArmPivot:', upperArmPivot);
        console.log('Half of y size:', RboundingBox.getSize().x / 2);
        upperArmPivot.x -= (RboundingBox.getSize().x / 2) - 2;
        upperArmPivot.y -= (RboundingBox.getSize().y / 2) - 18;
        console.log('upperArmPivot:', upperArmPivot);

        console.log('curr up arm rotation:', this.upperArm.rotation);

        console.log('TEST:', this.upperArm.position.x - upperArmPivot.x);
        this.upperArm.parent.localToWorld(this.upperArm.position);
        this.upperArm.position.sub(upperArmPivot);
        console.log('test position:', this.upperArm.position);
        this.upperArm.position.applyAxisAngle(axis, -Math.PI / 144);
        this.upperArm.position.add(upperArmPivot);
        this.upperArm.parent.worldToLocal(this.upperArm.position);
        // this.upperArm.rotateOnAxis(axis, 4*Math.PI / 12);
        this.upperArm.rotation.z += -Math.PI / 144;
        console.log('after pos of upperArm', this.upperArm.position);
        console.log('after rotation of upperArm', this.upperArm.rotation);

        console.log('sum of lower arm rotation: ', this.sumOfLowArmRotation);
      }

      /**comment out for now**/
      // alert('Moving robot arm (' + posX + ', ' + posY + '), with elbow up being ' + isElbowUp);
    }

    moveClawFunction(distanceApart) {
      /**default linear claw movement**/
      /**works**/
      // console.log('leftClaw:', this.leftClaw.position.z);
      // console.log('rightClaw:', this.rightClaw.position.z);
      if ((this.leftClaw.position.z > 18) && (this.rightClaw.position.z < 9)) {
        console.log(this.leftClaw.position.z);
        this.leftClaw.position.z -= Math.PI / 60;
        this.rightClaw.position.z += Math.PI / 60;
      }

      // alert('Moving claw' + distanceApart + ' centimeters apart');
    }

    wait(timeToWait) {
      // add timer here
      setTimeout(function () {
        console.log('Waited ' + timeToWait + ' milliseconds!');
        alert('Waited ' + timeToWait + ' milliseconds!');
        return;
      }, timeToWait);
    }

    /**testing**/
    tweenTest() {
      // const target = new THREE.Vector3(0, 0, 0);
      const target = this.lowerArm.position;

      this.animateVector3(this.lowerArm.position, target, {
        duration: 5000,
        easing: TWEEN.Easing.Quadratic.InOut,
        update: function(d) {
          console.log('Updating: ' + d);
        },
        callback: function() {
          console.log('Completed');
        }
      });
    }

    animateVector3(vectorToAnimate, target, options) {
      options = options || {};

      const to = target || THREE.Vector3(),
        easing = options.easign ||
          TWEEN.Easing.Quadratic.In,
        duration = options.duration || 2000;

      const tweenVector3 = new TWEEN.Tween(vectorToAnimate)
        .to({x:to.x, y:to.y, z:to.z, }, duration)
        .easing(easing)
        .onUpdate(function(d) {
          if(options.update) {
            options.update(d);
          }
        })
        .onComplete(function() {
          if(options.callback) options.callback();
        });

      tweenVector3.start();
      return tweenVector3;
    }


    render() {
      this.moveClawFunction(10);

      this.renderer.render(this.scene, this.camera);

      // const clock = new THREE.Clock();
      // const animationMixer = new THREE.AnimationMixer(this.model);
      // const animation = THREE.AnimationClipCreator.CreateRotationAnimation(100, 'y');
      // animationMixer.clipAction(animation).play();
      //
      // const delta = 0.75 * clock.getDelta();
      // animationMixer.update(delta);
    }

    ngAfterViewInit(): void {
        this.createScene();
        this.createLights();
        this.createPlatform();
        this.createModel();
        this.startRendering();

        this.addControls();
    }
  }
