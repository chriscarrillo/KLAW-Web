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

export class SimulatorComponent implements OnInit {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: THREE.OrbitControls;
  container;
  model;
  base;
  lowerArm;
  upperArm;
  oneHolder;
  secondHolder;
  leftClaw;
  rightClaw;
  flag;

  constructor(private modelService: ModelService) {
    this.render = this.render.bind(this);
  }

  ngOnInit(): void {
  }

  createScene() {
      console.log(this.scene)
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
      // Create a renderer
      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      // this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

      // Set a near white clear color (default is black)
      this.renderer.setClearColor(0x000000);

      // casts shadows
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // Append to the document
      document.getElementById('simulator').appendChild(this.renderer.domElement);
    }

    @HostListener('window:resize', ['$event'])
    resizeWindow(event: Event) {
        const WIDTH = this.container.clientWidth,
          HEIGHT = this.container.clientHeight;
        this.renderer.setSize(WIDTH, HEIGHT);
        this.camera.aspect = WIDTH / HEIGHT;
        this.camera.updateProjectionMatrix();

    }

    createControls() {
      this.controls = new THREE.OrbitControls(this.camera);
      this.controls.addEventListener('change', this.render);
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
      this.oneHolder = this.upperArm.children[1];
      this.secondHolder = this.upperArm.children[2];
      this.leftClaw = this.upperArm.children[3];
      this.rightClaw = this.upperArm.children[4];
    }

    moveArmFunction(posX, posY, isElbowUp = true) {
      console.log('X: ' + posX + ' Y: ' + posY + ' ElbowUP: ' + isElbowUp);

      const LboundingBox = new THREE.Box3().setFromObject(this.lowerArm);
      const RboundingBox = new THREE.Box3().setFromObject(this.upperArm);
      // console.log('low arm dimensions: ', LboundingBox.getSize());
      // console.log('low arm center by boundingbox: ', LboundingBox.getCenter());
      // console.log('up arm dimensions: ', RboundingBox.getSize());
      // console.log('up arm center by boundingbox: ', RboundingBox.getCenter());

      console.log(this.lowerArm.position);

      const axis = new THREE.Vector3(0, 0, 1);
      const lowerArmPivot = new THREE.Vector3(0, 0, 0);

      if ((this.lowerArm.rotation.z > -2.5 * Math.PI / 12 && this.lowerArm.rotation.z < 2.5 * Math.PI / 12)) {
        // // Works a bit
        /**UNCOMMENT**/
        this.lowerArm.parent.localToWorld(this.lowerArm.position);
        this.lowerArm.position.sub(lowerArmPivot);
        this.lowerArm.position.applyAxisAngle(axis, -Math.PI / 12);  // PI/12  PI/84 for iter
        this.lowerArm.position.add(lowerArmPivot);
        this.lowerArm.parent.worldToLocal(this.lowerArm.position);
        // this.lowerArm.rotateOnAxis(axis, -Math.PI/12);
        this.lowerArm.rotation.z += -Math.PI / 12;  // PI/84 for iter
        console.log('rotation:', this.lowerArm.rotation);
        console.log('new lowerArm position:', this.lowerArm.position);

        console.log('curr position of upArm:', this.upperArm.position);
        console.log('curr rotation of upArm:', this.upperArm.rotation);

      }


      /** upper arm rotation is based on the lower arm position so the pivot would need to change
       * accordingly so that the pivot point is in the correct place
       * so what to do is log the position of the upperArm and see if that changes after rotation of lower arm only,
       * leaving the upper ar static**/

      // else if(this.upperArm.rotation.z > -9 * Math.PI / 12 && this.upperArm.rotation.z < -2 * Math.PI / 12) {
      //   console.log('current pos of upperArm', this.upperArm.position);
      //
      //   const leftClawBoundingBox = new THREE.Box3().setFromObject(this.leftClaw);
      //
      //   // works a bit
      //   const upperArmPivot = RboundingBox.getCenter();
      //   console.log('orignal upperArmPivot:', upperArmPivot);
      //   console.log('Half of y size:', RboundingBox.getSize().x / 2);
      //   // upperArmPivot.x -= (RboundingBox.getSize().x / 2) - 2.4;  //2.4 pretty good
      //   /**adding this to fix**/
      //   upperArmPivot.x -= (RboundingBox.getSize().x / 2) - 2;
      //   /**adding this to fix**/
      //   // upperArmPivot.y -= (RboundingBox.getSize().y / 2) - 5; //1 ok...
      //   /**adding this to fix**/
      //   upperArmPivot.y -= (RboundingBox.getSize().y / 2) - 14;
      //   /**adding this to fix**/
      //   console.log('upperArmPivot:', upperArmPivot);
      //
      //   console.log('curr up arm rotation:', this.upperArm.rotation);
      //
      //   console.log('TEST:', this.upperArm.position.x - upperArmPivot.x);
      //   /*UNCOMMENT*/
      //   this.upperArm.parent.localToWorld(this.upperArm.position);
      //   this.upperArm.position.sub(upperArmPivot);
      //   console.log('test position:', this.upperArm.position);
      //   this.upperArm.position.applyAxisAngle(axis, -Math.PI / 144);  //4*Math.PI/12
      //   this.upperArm.position.add(upperArmPivot);
      //   this.upperArm.parent.worldToLocal(this.upperArm.position);
      //   // this.upperArm.rotateOnAxis(axis, 4*Math.PI / 12);
      //   this.upperArm.rotation.z += -Math.PI / 144;
      //   console.log('after pos of upperArm', this.upperArm.position);
      //   console.log('after rotation of upperArm', this.upperArm.rotation);
      // }
    }

    private changeRotationPoint(obj, scene, position) {
      const parent = new THREE.Object3D();
      parent.add(obj);
      if (obj.parent) {
        scene.add(parent);
      }
      parent.position.set(position.x, position.y, position.z);


      const x = this.lowerArm.position.x - position.x;
      const y = this.lowerArm.position.y - position.y;
      const z = this.lowerArm.position.z - position.z;
      obj.position.set(x, y, z);
    }

    moveClawFunction(distanceApart) {
      console.log('moveClaw func called');
      const axis = new THREE.Vector3(0, 0, 1);
      // rotate both left claw and right claw
      const leftClawBox = new THREE.Box3().setFromObject(this.leftClaw);
      const rightClawBox = new THREE.Box3().setFromObject(this.rightClaw);
      const leftClawPivot = leftClawBox.getCenter();
      const rightClawPivot = rightClawBox.getCenter();
      console.log('leftClaw dimension:', leftClawBox.getSize());
      console.log('leftClaw center:', leftClawPivot);
      console.log('rightClaw dimension:', rightClawBox.getSize());
      console.log('rightClaw center:', rightClawPivot);

      /*this.leftClaw.position.set(80, 125, -0.1, -75);
      this.leftClaw.rotation.set(0, 0, -(11 * Math.PI / 6));
      this.leftClaw.scale.set(.2,.2,.2);*/

      this.leftClaw.parent.localToWorld(this.leftClaw.position);
      this.leftClaw.position.sub(leftClawPivot);
      console.log('test l claw position:', this.leftClaw.position);
      this.leftClaw.position.applyAxisAngle(axis, Math.PI / 144);
      this.leftClaw.position.add(leftClawPivot);
      this.leftClaw.parent.worldToLocal(this.leftClaw.position);
      this.leftClaw.rotation.z += Math.PI / 144;
    }

    // wait(timeToWait) {
    //   // add timer here
    //   setTimeout(function () {
    //     console.log('Waited ' + timeToWait + ' milliseconds!');
    //     alert('Waited ' + timeToWait + ' milliseconds!');
    //     return;
    //   }, timeToWait);
    // }


    render() {
      // requestAnimationFrame(this.render);
      // /*if moveArm function is called*/
      // if ((this.lowerArm.rotation.z > -3 * Math.PI / 12 && this.lowerArm.rotation.z < 3 * Math.PI / 12)
      //    && (this.upperArm.rotation.z > -9 * Math.PI / 12 && this.upperArm.rotation.z < -2 * Math.PI / 12)) {
      //   this.moveArmFunction(10, 10, true);
      // }

      //moveClaw function called


      this.renderer.render(this.scene, this.camera);

      // test animation
      // this.model.rotation.y += .01;

      // if (this.lowerArm.rotation.z >= 1 || this.lowerArm.rotation.z <= -1) {
      //   this.flag = !this.flag;
      // }
      //
      // if (this.flag) {
      //   this.lowerArm.rotation.z += .01;
      // } else {
      //   this.lowerArm.rotation.z -= .01;
      //    cancelAnimationFrame(requestAnimationFrame(this.render));
      // }
      // this.upperArm.rotation.z += .01;

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

        this.createControls();

        this.createPlatform();
        this.createModel();

        this.moveArmFunction(10, 10, true);

        // this.moveClawFunction(5);

        // this.wait(5000);
    }
  }
