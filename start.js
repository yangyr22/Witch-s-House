import * as THREE from 'three';
import { GLTFLoader } from './three.js-dev/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader} from './three.js-dev/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader} from './three.js-dev/examples/jsm/loaders/MTLLoader.js';

let scene, camera, renderer, menObject;
let moveSpeed = 1.5;
let turnSpeed = 0.01;
let keyPressed = {}; 

init();
animate();

function init() {
  // Create the scene
  scene = new THREE.Scene();

  // Create the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, 305); // 初始相机位置

  // Create the renderer and add it to the DOM
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add lights to the scene
  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
  directionalLight.position.set(-1, 1, 1);
  scene.add(directionalLight);

  const groundGeometry1 = new THREE.PlaneGeometry(1000, 1000);
  const groundMaterial1 = new THREE.MeshStandardMaterial({ color: 0x880000 });
  const ground1 = new THREE.Mesh(groundGeometry1, groundMaterial1);
  ground1.rotation.x = -Math.PI / 2; 
  ground1.position.y = -200
  scene.add(ground1);

  const WallGeometry = new THREE.PlaneGeometry(1000, 1000);
  const WallMaterial1 = new THREE.MeshStandardMaterial({ color: 0x000088 });
  const Wall1 = new THREE.Mesh(WallGeometry, WallMaterial1);
  Wall1.rotation.y = Math.PI / 2; 
  Wall1.position.y += 300;
  Wall1.position.x -= 500;
  scene.add(Wall1);

  const Wall2 = new THREE.Mesh(WallGeometry, WallMaterial1);
  Wall2.rotation.y = -Math.PI / 2; 
  Wall2.position.y += 300;
  Wall2.position.x += 500;
  scene.add(Wall2);

  const WallMaterial2 = new THREE.MeshStandardMaterial({ color: 0x008800 });
  const Wall3 = new THREE.Mesh(WallGeometry, WallMaterial2);
  Wall3.position.y += 300;
  Wall3.position.z -= 500;
  scene.add(Wall3);

//   const mtlLoader = new MTLLoader();
//   const materials = mtlLoader.load(
//     'house/medieval-house-2.mtl',
//     function (materialCreator) {
//       materialCreator.preload(); 
//       const objLoader = new OBJLoader();
//       objLoader.setMaterials(materialCreator);
//       objLoader.load(
//         'house/medieval-house-2.obj',
//         function (object) {
//           menObject = new THREE.Object3D(); 
//           object.traverse(function (child) {
//             if (child.isMesh) {
//               child.castShadow = true; 
//               child.receiveShadow = true; 
//             }
//           });
//           menObject.add(object);
//           scene.add(menObject);
//         },
//         function (xhr) {
//           console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//         },
//         function (error) {
//           console.error('An error happened', error);
//         }
//       );
//     },
//     function (xhr) {
//       console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     },
//     function (error) {
//       console.error('An error happened', error);
//     }
//   );

  // Add keyboard listeners
  document.addEventListener('keydown', function(event) {
    keyPressed[event.code] = true; 
  });
  document.addEventListener('keyup', function(event) {
    keyPressed[event.code] = false; 
  });
}

function animate() {
  requestAnimationFrame(animate);

  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  camera.getWorldDirection(forward);
  forward.normalize();
  right.crossVectors(forward, up).normalize();

  // Update camera position based on moveDirection
  if (keyPressed['KeyW']) {
    camera.position.add(forward.multiplyScalar(moveSpeed));
  }
  if (keyPressed['KeyS']) {
    camera.position.sub(forward.multiplyScalar(moveSpeed));
  }
  if (keyPressed['KeyA']) {
    camera.position.sub(right.multiplyScalar(moveSpeed));
  }
  if (keyPressed['KeyD']) {
    camera.position.add(right.multiplyScalar(moveSpeed));
  }

  // Update menObject rotation based on rotation
  if (keyPressed['ArrowLeft']) {
    camera.rotation.y += turnSpeed;
  }
  if (keyPressed['ArrowRight']) {
    camera.rotation.y -= turnSpeed;
  }
  if (keyPressed['ArrowUp']) {
    camera.position.y += moveSpeed;
  }
  if (keyPressed['ArrowDown']) {
    camera.position.y -= moveSpeed;
  }

  renderer.render(scene, camera);
}