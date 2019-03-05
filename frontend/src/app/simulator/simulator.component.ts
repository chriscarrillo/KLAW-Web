import {Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import * as THREE from 'three';
// import * as THREE from 'three/build/three.min.js';
import './js/EnableThreeExamples';
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

    //adds Orbit Controls to scene
    addControls() {
      this.controls = new THREE.OrbitControls(this.camera);
      this.controls.addEventListener('change', this.render);
    }

    //inits renderer and maintains timing on animation
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

      let component: SimulatorComponent = this;

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
      // THIS WORKS!!!:
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
      // this.oneHolder = this.upperArm.children[1];
      // this.secondHolder = this.upperArm.children[2];
      this.leftClaw = this.upperArm.children[3];
      this.rightClaw = this.upperArm.children[4];
    }

    moveArmFunction(posX, posY, isElbowUp = true) {
      console.log('X: ' + posX + ' Y: ' + posY + ' ElbowUp: ' + isElbowUp);

      const LboundingBox = new THREE.Box3().setFromObject(this.lowerArm);
      const RboundingBox = new THREE.Box3().setFromObject(this.upperArm);

      const axis = new THREE.Vector3(0, 0, 1);
      const lowerArmPivot = new THREE.Vector3(0, 0, 0);

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

      else if (this.upperArm.rotation.z > -9 * Math.PI / 12 - this.sumOfLowArmRotation && this.upperArm.rotation.z < -2 * Math.PI / 12 + this.sumOfLowArmRotation) {
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
      console.log('moveClaw func called');
      const axis = new THREE.Vector3(0, 0, 1);
      const leftClawBox = new THREE.Box3().setFromObject(this.leftClaw);
      const rightClawBox = new THREE.Box3().setFromObject(this.rightClaw);
      const leftClawPivot = leftClawBox.getCenter();
      const rightClawPivot = rightClawBox.getCenter();
      // console.log('default pos of leftClaw:', this.leftClaw.position);
      // console.log('default rot of leftClaw:', this.leftClaw.rotation);
      console.log('leftClaw position:', this.leftClaw.position);
      console.log('leftClaw dimension:', leftClawBox.getSize());
      console.log('leftClaw center:', leftClawPivot);
      // console.log('rightClaw dimension:', rightClawBox.getSize());
      // console.log('rightClaw center:', rightClawPivot);


      // if (this.leftClaw.rotation.z > -11 * Math.PI / 6 + -1.5 * Math.PI / 12 && this.leftClaw.rotation.z < -11 * Math.PI / 6 + 8.5 * Math.PI / 12) {
      //   console.log('leftClaw center:', leftClawPivot);
        leftClawPivot.x -= (leftClawBox.getSize().x/* / 2*/) + 20;  // changes vertical direction
        leftClawPivot.y -= (leftClawBox.getSize().y /*/ 2*/) + 37; // changes horizontal direction

        console.log('new l pivot:', leftClawPivot);
        // console.log('rotation of l:', this.leftClaw.rotation);

        /**test**/
        // this.leftClaw.rotation.z += Math.PI/24;
        /**test**/

        console.log('leftClaw min:', leftClawBox.min);
        console.log('leftClaw max:', leftClawBox.max);

        this.leftClaw.parent.localToWorld(this.leftClaw.position);
        /**test**/
        this.leftClaw.parent.localToWorld(leftClawBox.getCenter());
        // this.leftClaw.position.sub(leftClawPivot);
        console.log('new leftClaw position:', this.leftClaw.position);
        console.log('world pivot:', leftClawBox.getCenter());
        // this.leftClaw.position.applyAxisAngle(axis, Math.PI / 144);
        // this.leftClaw.position.add(leftClawPivot);
        // this.leftClaw.parent.worldToLocal(this.leftClaw.position);
        // // this.leftClaw.rotation.z += Math.PI / 48;
        // this.leftClaw.rotateOnAxis(axis, Math.PI / 144);

        // console.log('leftClaw after position', this.leftClaw.position);
        // console.log('leftClaw after rotation', this.leftClaw.rotation);
        // console.log('leftClaw center after rotation', leftClawBox.getCenter());

      // }

      // else if (this.rightClaw.rotation.z > 12 * Math.PI / 6 + -4 * Math.PI / 12 && this.rightClaw.rotation.z < 12 * Math.PI / 6 + 3.5 * Math.PI / 12) {
      //
      //   rightClawPivot.x -= (rightClawBox.getSize().x / 2) - .75; // kinda works without offset
      //   rightClawPivot.y -= (rightClawBox.getSize().y / 2) + 0; // kinda works without offset
      //
      //   console.log('new r pivot:', rightClawPivot);
      //   console.log('default rot of r:', this.rightClaw.rotation);
      //
      //   /**Maybe this works??**/
      //   this.rightClaw.parent.localToWorld(this.rightClaw.position);
      //   this.rightClaw.position.sub(rightClawPivot);
      //   console.log('test r claw position:', this.rightClaw.position);
      //   this.rightClaw.position.applyAxisAngle(axis, Math.PI / 144);
      //   this.rightClaw.position.add(rightClawPivot);
      //   this.rightClaw.parent.worldToLocal(this.rightClaw.position);
      //   this.rightClaw.rotation.z += Math.PI / 144;
      // }


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


    render() {
      /*if moveArm function is called*/
      // this.moveArmFunction(10, 10, true);

      // moveClaw function called
      // this.moveClawFunction(10);
      this.renderer.render(this.scene, this.camera);

      // test animation
      // this.model.rotation.y += .01;

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

        this.moveArmFunction(10, 10, true);

        // this.moveClawFunction(5);

        // this.wait(5000);

        //this.addControls();
    }
  }
