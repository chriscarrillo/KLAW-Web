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

  constructor(private modelService: ModelService) {
    this.render = this.render.bind(this);
  }

  ngOnInit(): void {
  }

  // @ViewChild('simulator') canvasRef: ElementRef;

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

    animate() {
      this.renderer.render(this.scene, this.camera);
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
      this.modelService.SimModel.prototype = Object.create(THREE.Object3D.prototype);
      this.model = this.modelService.SimModel();
      console.log(this.model);
      console.log('after setting model');
      this.scene.add(this.model);



      // this.model = new this.modelService.SimModel();
    }

    moveFunction() {
      console.log(this.model.position);
      // this.model.position.set(10,20,50);

      console.log(this.model.position);

      this.model.upperRobotArm.position.set(10,20,50);

    }

    ngAfterViewInit(): void {
        this.createScene();
        this.createLights();

        this.createControls();

        this.createPlatform();
        this.createModel();

        // this.moveFunction();

        this.animate();
    }
  }
