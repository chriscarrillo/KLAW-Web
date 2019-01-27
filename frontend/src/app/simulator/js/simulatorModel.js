//create model
function createModel() {
    //group to hold all parts of robot arm model
    var robotComponents = new THREE.Group();

    // robot platform box
    var geometry = new THREE.BoxGeometry(19, 15, 12);
    var material = new THREE.MeshBasicMaterial({color: 0x90c91c});
    var base = new THREE.Mesh(geometry, material);

    base.position.y += 5;
    base.castShadow = true;
    base.receiveShadow = true;
    robotComponents.add(base);

    //add the two robot arm extensions and set positions
    var lowerRobotArm = new RobotArm();
    lowerRobotArm.position.set(-13, 2, 0, -75);
    lowerRobotArm.rotation.set(0, 0, 0);
    lowerRobotArm.scale.set(.20, .20, .20);
    robotComponents.add(lowerRobotArm);

    var upperRobotArm = new RobotArm();
    upperRobotArm.position.set(-10, 44, 0, -75);
    upperRobotArm.rotation.set(0, 0, -(Math.PI / 2));
    upperRobotArm.scale.set(.20, .20, .20);
    // upperRobotArm.material.color.setHex(0x1c4bd8);
    robotComponents.add(upperRobotArm);

    //create robot claw
    var clawComponents = new THREE.Group;

    //will be static
    for (var i = 0; i < 2; i++) {
        var geometry = new THREE.BoxGeometry(4, .5, .5);
        var material = new THREE.MeshBasicMaterial({color: 0x1cc977});
        var holder = new THREE.Mesh(geometry, material);

        holder.position.set(25, 32.2, -.45, -75);
        if (i == 1) {
            holder.position.set(22, 30.3, -.43, -75);
        }
        holder.rotation.set(0, 0, (7 * Math.PI / 4));
        robotComponents.add(holder);
    }

    //create actual claws
    var leftClaw = new RobotClaw();
    leftClaw.position.set(19.6, 25.7, -0.1, -75);
    leftClaw.rotation.set(0, 0, (11 * Math.PI / 6));
    leftClaw.scale.set(.03, .03, .03);
    clawComponents.add(leftClaw);

    var rightClaw = new RobotClaw();
    rightClaw.position.set(24.3, 31.7, -0.1, -75);
    rightClaw.rotation.set(0, 0, (5 * Math.PI / 3));
    rightClaw.scale.set(.03, .03, .03);
    clawComponents.add(rightClaw);

    scene.add(clawComponents);
    scene.add(robotComponents);
};

//Define claw pieces
var RobotClaw = function () {
    THREE.Group.apply(this, arguments);

    var claw = new THREE.Shape();
    claw.moveTo(40, 40);
    claw.lineTo(40, 160);
    claw.absarc(50, 160, 10, Math.PI, 0, true);
    claw.lineTo(60, 40);
    claw.absarc(50, 40, 10, 2 * Math.PI, Math.PI, true);

    var robotClawGroup = new THREE.Group();

    var extrudeSettings = {depth: 2, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1};
    var robotClawGeometry = new THREE.ExtrudeGeometry(claw, extrudeSettings);
    var mesh = new THREE.Mesh(robotClawGeometry, new THREE.MeshStandardMaterial({
        color: 0xbd1cc9,
        flatShading: true
    }));

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    robotClawGroup.add(mesh);

    this.add(mesh);
};

RobotClaw.prototype = Object.create(THREE.Group.prototype);
RobotClaw.prototype.constructor = RobotClaw;

//Define robot arm pieces
var RobotArm = function () {
    THREE.Group.apply(this, arguments);
    //robot arm
    var robotArm = new THREE.Shape();
    robotArm.moveTo(40, 40);
    robotArm.lineTo(40, 160);
    robotArm.absarc(50, 160, 10, Math.PI, 0, true);
    robotArm.lineTo(60, 40);
    robotArm.absarc(50, 40, 10, 2 * Math.PI, Math.PI, true);

    //add holes to upper arm (end and start)
    //r = 2.5
    var upperPivotPath = new THREE.Path();
    upperPivotPath.moveTo(47.5, 160);
    upperPivotPath.absarc(50, 160, 2.5, 0, Math.PI * 2, true);

    robotArm.holes.push(upperPivotPath);

    var lowerPivotPath = new THREE.Path();
    lowerPivotPath.moveTo(50, 40);
    lowerPivotPath.absarc(50, 40, 2.5, 0, Math.PI * 2, true);

    robotArm.holes.push(lowerPivotPath);

    var robotArmGroup = new THREE.Group();

    var extrudeSettings = {depth: 5, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1};
    var robotArmGeometry = new THREE.ExtrudeGeometry(robotArm, extrudeSettings);
    var mesh = new THREE.Mesh(robotArmGeometry, new THREE.MeshStandardMaterial({
        color: 0x1c4bc9,
        flatShading: true
    }));

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    robotArmGroup.add(mesh);

    this.add(mesh);
};

RobotArm.prototype = Object.create(THREE.Group.prototype);
RobotArm.prototype.constructor = RobotArm;

//will use to animate model
function animate() {
    requestAnimationFrame(animate);
}

// Create a scene which will hold all our meshes to be rendered
var scene = new THREE.Scene();

// Create and position a camera
var camera = new THREE.PerspectiveCamera(
    60,                                   // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1,                                  // Near clipping pane
    1000                                  // Far clipping pane
);

// Reposition the camera
camera.position.set(13, 18, 80);

// Point the camera at a given coordinate
camera.lookAt(new THREE.Vector3(20, 10, 0));
// camera.lookAt(0, 30, 0);

// Create a renderer
var renderer = new THREE.WebGLRenderer({antialias: true});

// Size should be the same as the window
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', function () {
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
});

// Set a near white clear color (default is black)
// renderer.setClearColor( 0xfff6e6 );
renderer.setClearColor(0x000000);

//casts shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Append to the document
document.body.appendChild(renderer.domElement);

//platform for model
var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 80, 70, 70),
    new THREE.MeshBasicMaterial({color: 0x393839, wireframe: true})
);
plane.position.y -= 3;
plane.rotateX(Math.PI / 2);
scene.add(plane);

createModel();

var shadowMaterial = new THREE.ShadowMaterial({
    color: 0xeeeeee
});
shadowMaterial.opacity = 0.5;

//applies light to all objects in scene
var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

//applies point light
var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;


//var extrudeSettings = {depth: 4, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1};

// Render the scene/camera combination
renderer.render(scene, camera);

// Add an orbit control which allows us to move around the scene. See the three.js example for more details
// https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function () {
    renderer.render(scene, camera);
});
// add this only if there is no animation loop
// (requestAnimationFrame)

//methods
function moveClaw(distanceBetweenFingersInCentimeters){
  console.log("Moving claw " + distanceBetweenFingersInCentimeters + " centimeters apart");
}
function moveArm(x, y, isElbowUp = true) {
  console.log("Moving arm to " + x + "," + y + " with the elbow " + (isElbowUp ? "up" : "down"));
}
/*Tells the arm to return to default position.*/
function returnToHome(){
  console.log("Returning robot position to home");
}
function wait(numberOfMilliseconds){
  console.log("Waiting " + numberOfMilliseconds + "milliseconds");
}
/*Tells the robot arm to begin routine*/
function start(){
  console.log("Starting robot");
}
function stop(){
  console.log("Stopping robot");
}
function connectToRobot(robotID){
  console.log("Connecting to robot...");
}
function disconnectFromRobot(){
  console.log("Disconnecting to robot...");
}
