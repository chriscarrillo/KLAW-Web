import { Injectable } from '@angular/core';
import * as THREE from 'three';
import './js/EnableThreeExamples';
@Injectable({
  providedIn: 'root'
})
export class ModelService {
  // constructor() { }

  SimModel = function(): /*THREE.Object3D*/ THREE.Mesh {  // changing to mesh for test
      console.log('in SimModel function');

      // THREE.Object3D.call(this);  //commented out for test

      // adds a whole object (group)
      this.mesh = new THREE.Object3D();
      this.mesh.name = 'simModel';

      // robot platform box
      const baseGeometry = new THREE.BoxGeometry(19, 15, 12);
      const baseMaterial = new THREE.MeshBasicMaterial({color: 0x90c91c});
      const base = new THREE.Mesh(baseGeometry, baseMaterial);

      base.position.y += 5;
      base.castShadow = true;
      base.receiveShadow = true;
      this.mesh.add(base);

      this.RobotArm.prototype = Object.create(/*THREE.Object3D.prototype*/THREE.Mesh.prototype); // changed to mesh for test
      // add the two robot arm extensions and set position

      this.lowerRobotArm = new this.RobotArm();
      this.lowerRobotArm.position.set(-13, 2, 0, -75);
      this.lowerRobotArm.rotation.set(0, 0, 0);
      this.lowerRobotArm.scale.set(.20, .20, .20);
      this.mesh.add(this.lowerRobotArm);

      console.log(this.lowerRobotArm.rotation);

      this.upperRobotArm = new this.RobotArm();
      this.upperRobotArm.rotation.z = -Math.PI / 2;
      this.upperRobotArm.position.x += 10;
      this.upperRobotArm.position.y += 210;
      this.lowerRobotArm.add(this.upperRobotArm);

      // create the pieces that will hold both claws together
      // for (let i = 0; i < 2; i++) {
      //   const geometry = new THREE.BoxGeometry(4, 20, .5);
      //   const material = new THREE.MeshBasicMaterial({color: 0x1cc977});
      //   const holder = new THREE.Mesh(geometry, material);
      //
      //   holder.position.set(60, 175, -.45, -75);
      //   if (i === 1) {
      //     holder.position.set(66, 153, -.43, -75);
      //   }
      //   holder.rotation.set(0, 0, (7 * Math.PI / 4));
      //   this.upperRobotArm.add(holder);
      // }
      //
      // // create actual claws
      // this.RobotClaw.prototype = Object.create(/*THREE.Object3D.prototype*/THREE.Mesh.prototype);  //changed to meh for test
      //
      // this.leftClaw = new this.RobotClaw();
      // this.leftClaw.position.set(80, 125, -0.1, -75);
      // this.leftClaw.rotation.set(0, 0, -(11 * Math.PI / 6));
      // this.leftClaw.scale.set(.2,.2,.2);
      //
      // this.upperRobotArm.add(this.leftClaw);
      //
      // this.rightClaw = new this.RobotClaw();
      // this.rightClaw.position.set(55, 171, -0.1, -75);
      // this.rightClaw.rotation.set(0, 0, (12 * Math.PI / 6)); //changed for testing (was 12pi/6)
      // this.rightClaw.scale.set(.2, .2, .2);
      //
      // // test:
      // this.upperRobotArm.add(this.rightClaw);

    /**updated claw**/
      // width, height, depth
      const holderGeometry = new THREE.BoxGeometry(25, 30, 35);
      const holderMaterial = new THREE.MeshBasicMaterial({color: 0x1cc977});
      const holder = new THREE.Mesh(holderGeometry, holderMaterial);
      // holder.scale.set(.8, .8, .8);
      holder.position.set(51, 160, 3, -75);
      // rotate slightly downward
      holder.rotation.set(0, 0, -Math.PI / 6);
      this.upperRobotArm.add(holder);

      this.RobotClaw.prototype = Object.create(/*THREE.Object3D.prototype*/THREE.Mesh.prototype);  // changed to mesh for test

      this.leftClaw = new this.RobotClaw();
      this.leftClaw.position.set(43, 173, 27, -75);
      this.leftClaw.rotation.set(0, 0, -Math.PI / 6);
      this.leftClaw.scale.set(.2, .2, .2);
      this.leftClaw.updateMatrix();

      this.upperRobotArm.add(this.leftClaw);

      this.rightClaw = new this.RobotClaw();
      this.rightClaw.position.set(43, 173, 0, -75);
      this.rightClaw.rotation.set(0, 0, -Math.PI / 6);
      this.rightClaw.scale.set(.2, .2, .2);
      this.rightClaw.updateMatrix();

      this.upperRobotArm.add(this.rightClaw);


      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;

      return this.mesh;
    };

  RobotClaw = function(): /*THREE.Object3D*/THREE.Mesh {  //changed to mesh for test
      THREE.Object3D.call(this);

      this.mesh = new THREE.Object3D();
      this.mesh.name = 'robot claw';

      const clawShape = new THREE.Shape();
      clawShape.moveTo(40, 40);
      clawShape.lineTo(40, 160);
      clawShape.absarc(50, 160, 10, Math.PI, 0, true);
      clawShape.lineTo(60, 40);
      clawShape.absarc(50, 40, 10, 2 * Math.PI, Math.PI, true);

      const extrudeSettings = {
        depth: 2,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 1,
        bevelThickness: 1
      };
      const robotClawGeometry = new THREE.ExtrudeGeometry(clawShape, extrudeSettings);
      const clawMesh = new THREE.Mesh(robotClawGeometry, new THREE.MeshStandardMaterial({
        color: 0xbd1cc9,
        flatShading: true
      }));

      /**added rotation**/
      clawMesh.rotation.y += Math.PI / 2;

      clawMesh.castShadow = true;
      clawMesh.receiveShadow = true;

      this.mesh.add(clawMesh);

      return this.mesh;
    };
    // RobotClaw.prototype = Object.create(THREE.Object3D.prototype);
    // RobotClaw.prototype.constructor = RobotClaw;


    // Define robot arm pieces
    RobotArm = function(): /*THREE.Object3D*/THREE.Mesh {  //changed to mesh for test
      THREE.Object3D.call(this);

      this.mesh = new THREE.Object3D();  //commented out to mesh for test
      this.mesh.name = 'robot arm';

      // robot arm
      const robotArmShape = new THREE.Shape();
      robotArmShape.moveTo(40, 40);
      robotArmShape.lineTo(40, 160);
      robotArmShape.absarc(50, 160, 10, Math.PI, 0, true);
      robotArmShape.lineTo(60, 40);
      robotArmShape.absarc(50, 40, 10, 2 * Math.PI, Math.PI, true);

      // add holes to upper arm (end and start)
      // r = 2.5
      const upperPivotPath = new THREE.Path();
      upperPivotPath.moveTo(47.5, 160);
      upperPivotPath.absarc(50, 160, 2.5, 0, Math.PI * 2, true);

      // creates the holes in the robot arm
      robotArmShape.holes.push(upperPivotPath);

      const lowerPivotPath = new THREE.Path();
      lowerPivotPath.moveTo(50, 40);
      lowerPivotPath.absarc(50, 40, 2.5, 0, Math.PI * 2, true);

      robotArmShape.holes.push(lowerPivotPath);

      const extrudeSettings = {
        depth: 5,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 1,
        bevelThickness: 1
      };
      const robotArmGeometry = new THREE.ExtrudeGeometry(robotArmShape, extrudeSettings);
      const robotArmMesh = new THREE.Mesh(robotArmGeometry, new THREE.MeshStandardMaterial({
        color: 0x1c4bc9,
        flatShading: true
      }));

      robotArmMesh.castShadow = true;
      robotArmMesh.receiveShadow = true;

      this.mesh.add(robotArmMesh);

      return this.mesh;
    };
}
