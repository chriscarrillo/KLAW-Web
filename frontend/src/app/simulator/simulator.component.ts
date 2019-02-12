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
  // controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  controls: THREE.OrbitControls;
  container;
  model;
  base;
  lArm;
  rArm;
  oneHolder;
  secondHolder;
  lClaw;
  rClaw;

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

    public render() {
      this.renderer.render(this.scene, this.camera);
    }

    // private get canvas(): HTMLCanvasElement {
    //     return this.canvasRef.nativeElement;
    // }

    @HostListener('window:resize', ['$event'])
    resizeWindow(event: Event) {
        const WIDTH = this.container.clientWidth,
          HEIGHT = this.container.clientHeight;
        this.renderer.setSize(WIDTH, HEIGHT);
        this.camera.aspect = WIDTH / HEIGHT;
        this.camera.updateProjectionMatrix();

    }

    createControls() {
      // const controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      // controls.addEventListener('change', this.renderer.render(this.scene, this.camera));
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
      this.lArm = this.model.children[1];
      this.rArm = this.lArm.children[1];
      this.oneHolder = this.rArm.children[2];
      this.secondHolder = this.rArm.children[4];
      this.lClaw = this.rArm.children[5];
      this.rClaw = this.rArm.children[6];
    }

    moveFunction(posX, posY, isElbowUp = true) {
      console.log('X: ' + posX + ' Y: ' + posY + ' ElbowUP: ' + true);

      // this.model.upperRobotArm.position.set(10, 20, 50);
      // console.log(this.model.children[2]);
      // works!
      // this.model.children[2].position.set(10,20,50);
      // console.log(this.model.children[2].position);;
      // // instead of moving to (10,10)
      // const newPosX = this.model.children[2].position.x + posX;
      // const newPosY  = this.model.children[2].position.y + posY;
      // this.model.children[2].position.set(newPosX, newPosY, 0);
      // console.log(this.model.children[2].position);
      //
      // this.modelService.SimModel.prototype.move = function(posX, posY, isElbowUp = true) {
      //   console.log('protype test');
      // };
      //
      // this.modelService.SimModel.prototype.move(10,10,true);



      // for x movement, rotate lower arm (but also affects y)
      // for y movement, rotate upper arm?
      // ** don't rotate by x
      // object position is counting the bottom of the object
      const LboundingBox = new THREE.Box3().setFromObject(this.lArm);
      const RboundingBox = new THREE.Box3().setFromObject(this.rArm);
      console.log('low arm dimensions: ', LboundingBox.getSize());
      console.log('up arm dimensions: ', RboundingBox.getSize());

      // console.log(boundingBox);
      //
      //
      // let center = new THREE.Vector3();
      // center =  boundingBox.getCenter();
      // // console.log('box position: ', this.model.children[0].position);
      // console.log('object height: ', boundingBox.getSize());
      // console.log('object position: ', this.model.children[0].position);
      // console.log('object center: ', center);
      //
      // const axis = new THREE.Vector3(0,0,1);
      // // end of lower robot arm pt = (-3, 7.8, 0.5);
      // const point = new THREE.Vector3(-3,7.8,0.5);
      // this.model.children[0].position.sub(point);
      // this.model.children[0].position.applyAxisAngle(axis, Math.PI/12);
      // this.model.children[0].position.add(point);
      //
      // this.model.children[0].rotateOnAxis(axis,-Math.PI/12);



      // this.model.children[1].translateX(center.x);
      // this.model.children[1].translateY(center.y);
      // this.model.children[1].translateZ(center.z);
      //
      // console.log('object position after translation: ', this.model.children[1].position);

      // this.model.children[1].translateX(0);
      // this.model.children[1].translateY(0);
      // this.model.children[1].translateZ(boundingBox.getSize().y / 2);
      // console.log('object position after translation: ', this.model.children[1].position);

      // this.model.children[1].translateX(center.x);
      // this.model.children[1].translateY(center.y);
      // this.model.children[1].translateZ(center.z);
      // this.model.children[1].position.set();
      // console.log(this.model.children[1].position);

      // this.model.children[1].rotation.set(0, 0, -Math.PI / 6);
      // console.log(this.model.children[1].position);

      // this.model.children[1].translateX(-center.x);
      // this.model.children[1].translateY(-center.y);
      // this.model.children[1].translateZ(-center.z);
      // console.log(this.model.children[1].position);
    }

    animate() {

      // const animateFunc = this.animate;
      // requestAnimationFrame(animateFunc);

      // this.model.children[1].rotation.z += Math.PI / 6;
      // this.model.children[1].rotation.z += Math.PI / 6;

      this.renderer.render(this.scene, this.camera);

      // console.log("TEST");

    }

    ngAfterViewInit(): void {
        this.createScene();
        this.createLights();

        this.createControls();

        this.createPlatform();
        this.createModel();

        this.moveFunction(10, 10, true);

        this.animate();
    }
  }
