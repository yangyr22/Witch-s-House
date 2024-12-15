import * as THREE from 'three';
import { OBJLoader} from './three.js-dev/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader} from './three.js-dev/examples/jsm/loaders/FBXLoader.js';
import { MTLLoader} from './three.js-dev/examples/jsm/loaders/MTLLoader.js';
import { createWall } from './utils.js';

let scene, camera, renderer, selectElement, selecting, readElement, yesButton, noButton, cameraArrow;
let moveSpeed;
let turnSpeed = 0.006;
let shakeAmount = 0.05;
let shakeTimer = 0; 
let shaked = false;
let PositionCopy;
let SpaceUp = true;


// console.log(1);
// init_1(1);
// animate_1();
// requestAnimationFrame(animate_1);

export function init_1(last_room) {
  // Create the scene ************************************************************************************************************************************************
  selecting = false;
  scene = new THREE.Scene();

  // Create the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 10000);
//   camera.position.set(0, 600, 0); // 初始相机位置
//   camera.rotation.x += -Math.PI / 2;
  camera.position.set(0, 0, 400); // 初始相机位置

  // Create the renderer and add it to the DOM
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add lights to the scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);
  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
  directionalLight1.position.set(0, 1000, 0);
  scene.add(directionalLight1);
  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight2.position.set(-1, 1, 1);
  scene.add(directionalLight2);
  cameraArrow = document.getElementById('cameraArrow');

  const textureLoader = new THREE.TextureLoader();
  const groundTexture = textureLoader.load('global/ground.jpg'); // 替换为你的纹理图片路径

  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: groundTexture, // 应用纹理
    metalness: 0.5, // 设置金属度
    roughness: 1.0, // 设置粗糙度
  });

  const carpetTexture = textureLoader.load('global/carpet.jpg'); // 替换为你的纹理图片路径

  const carpetMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: carpetTexture, // 应用纹理
    metalness: 0.5, // 设置金属度
    roughness: 1.0, // 设置粗糙度
  });

  const WallTexture = textureLoader.load('global/wall.jpg');

  const WallMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: WallTexture, // 应用纹理
    metalness: 0.0, // 设置金属度
    roughness: 0.5, // 设置粗糙度
  });

  const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
  const ground1 = new THREE.Mesh(groundGeometry, groundMaterial);
  ground1.rotation.x = -Math.PI / 2; 
  ground1.position.y = -200;
  scene.add(ground1);

  const carpetGeometry = new THREE.PlaneGeometry(600, 350);
  const carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);
  carpet.rotation.x = -Math.PI / 2; 
//   carpet.rotation.z = Math.PI / 2;
  carpet.position.y = -199;
  scene.add(carpet);

  scene.add(createWall(new THREE.Vector2(-500, 500), new THREE.Vector2(-500, -500), WallMaterial));
  scene.add(createWall(new THREE.Vector2(-500, -500), new THREE.Vector2(500, -500), WallMaterial));
  scene.add(createWall(new THREE.Vector2(500, -500), new THREE.Vector2(500, 500), WallMaterial));
  scene.add(createWall(new THREE.Vector2(500, 500), new THREE.Vector2(-500, 500), WallMaterial));

  const fbxLoader = new FBXLoader();
  fbxLoader.load(
    'room1/78824/78824.fbx', // 替换为你的FBX文件路径
    function (object) {
      object.scale.set(5, 5, 5);
      object.rotation.x = -Math.PI / 2;
    //   object.rotation.z = Math.PI / 2;
      object.position.x = -300;
      object.position.y = -200;
      object.position.z = -480;
      scene.add(object);
      object.traverse(function (child) {
        if (child.isMesh) {
          child.material.metalness = 0.5; // 金属度，范围0-1
          child.material.shininess = 50; // 光泽度，范围0-100
        }
      });
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      console.error('An error happened', error);
    }
  );

  const mtlLoader = new MTLLoader();
  mtlLoader.load(
    'room1/piano/Piano.obj.mtl',
    function (materialCreator) {
      materialCreator.preload(); 
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materialCreator);
      objLoader.load(
        'room1/piano/Piano.obj',
        function (object) {
          object.scale.set(5, 5, 5);
          object.rotation.x = -Math.PI / 2;
        //   object.rotation.z = -Math.PI;
          object.position.y = -200;
          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true; 
              child.receiveShadow = true; 
            }
          });
          scene.add(object);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
          console.error('An error happened', error);
        }
      );
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      console.error('An error happened', error);
    }
  );

  mtlLoader.load(
    'room1/door1/models/8.mtl',
    function (materialCreator) {
      materialCreator.preload(); 
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materialCreator);
      objLoader.load(
        'room1/door1/models/8.obj',
        function (object) {
          object.scale.set(8, 8, 8);
          // object.rotation.x = -Math.PI;
          // object.rotation.z = -Math.PI;
          // object.rotation.x = -Math.PI;
          object.position.z = 630;
          object.position.x = 250;
          object.position.y = 250;
          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true; 
              child.receiveShadow = true; 
            }
          });
          scene.add(object);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
          console.error('An error happened', error);
        }
      );
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      console.error('An error happened', error);
    }
  );

  mtlLoader.load(
    'room1/chair/Straight_Leg_Chair_Honey_V1.mtl',
    function (materialCreator) {
      for (let i = 0; i < 4; i++) {
        materialCreator.preload(); // Preload materials
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materialCreator);
        objLoader.load(
          'room1/chair/Straight_Leg_Chair_Honey_V1.obj',
          function (object) {
            object.scale.set(2, 2, 2);
            object.rotation.x = -Math.PI / 2;
            object.rotation.z = -Math.PI / 2;
            object.position.x = 400;
            object.position.y = -110;
            object.position.z = 300 - i * 200;
            object.traverse(function (child) {
              if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });
            scene.add(object);
            console.log(object.position.z + 'loaded');
          },
          function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          },
          function (error) {
            console.error('An error happened', error);
          }
        );
      }
      for (let i = 0; i < 4; i++) {
        materialCreator.preload(); // Preload materials
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materialCreator);
        objLoader.load(
          'room1/chair/Straight_Leg_Chair_Honey_V1.obj',
          function (object) {
            object.scale.set(2, 2, 2);
            object.rotation.x = -Math.PI / 2;
            object.rotation.z = Math.PI / 2;
            object.position.x = -400;
            object.position.y = -110;
            object.position.z = 300 - i * 200;
            object.traverse(function (child) {
              if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });
            scene.add(object);
            console.log(object.position.z + 'loaded');
          },
          function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          },
          function (error) {
            console.error('An error happened', error);
          }
        );
        
      }
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      console.error('An error happened', error);
    }
  );

  PositionCopy = 0;
}

export function animate_1(current_room, last_room, keyPressed, face_item) {
  if (shakeTimer > 0) {
    shakeTimer--;
    camera.rotation.x += (Math.random() - 0.5) * shakeAmount;
    camera.rotation.y += (Math.random() - 0.5) * shakeAmount;
    camera.rotation.z += (Math.random() - 0.5) * shakeAmount;
    if (shakeTimer == 0){
      camera.rotation.x = 0;
      camera.rotation.y = PositionCopy;
      camera.rotation.z = 0;
    }
  }
  else if (shakeTimer == 0){
    while (camera.rotation.y > Math.PI) {
      camera.rotation.y -= 2 * Math.PI;
    }
    while (camera.rotation.y < -Math.PI) {
      camera.rotation.y += 2 * Math.PI;
    }
    if (keyPressed['ShiftLeft']) {
      moveSpeed = 2.4;
    }else{
      moveSpeed = 1.2;
    }
    const x_copy = camera.position.x;
    const z_copy = camera.position.z;
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
    // if (keyPressed['ArrowUp']) {
    //   camera.position.y += moveSpeed;
    // }
    // if (keyPressed['ArrowDown']) {
    //   camera.position.y -= moveSpeed;
    // }    
    if (keyPressed['Space']){
      if (SpaceUp === true) {
        if (face_book()){
            face_item['book_shelf'] = true;
        }
        if (face_door()){
          current_room = 2;
        }
      }
    }
    if (cannot_go(camera.position.x, camera.position.z)){
        camera.position.x = x_copy;
        camera.position.z = z_copy;
        if (shaked == false){
          PositionCopy = camera.rotation.y;
          shakeTimer = 10;
          shaked = true;
        }
    }
    else{
      shaked = false;
    }
    if ('Space' in keyPressed && keyPressed['Space'] === true){
      SpaceUp = false;
    }
    else{
      SpaceUp = true;
    }
  } 
  updateCameraArrow();
  renderer.render(scene, camera);
  return [current_room, face_item];
}

function face_book(){
    if (camera.position.x >= -200 || camera.position.z >= -200){
        return false;
    }
    if (camera.rotation.y >= Math.PI / 4 || camera.rotation.y <= -Math.PI / 4){
        return false;
    }
    return true;
}

function face_door(){
  if (camera.position.x <= 100 || camera.position.z <= 300 || camera.position.x >= 300){
      return false;
  }
  if (camera.rotation.y <= 3 * Math.PI / 4 && camera.rotation.y >= -3 * Math.PI / 4){
      return false;
  }
  return true;
}

function cannot_go(x, z){
    if (Math.abs(x) > 400 || Math.abs(z) > 400){
        return true;
    }
    if (Math.abs(x) <250 && Math.abs(z) < 200){
        return true;
    }
    return false;
}


function updateCameraArrow() {
  const position = camera.position;
  const direction = -camera.rotation.y;

  // 将方向转换为小地图上的相对位置
  const arrowX = position.x / 5 + 110; // 假设小地图宽度为400px，中心为200px
  const arrowY = position.z / 5 + 110; // 假设小地图高度为400px，中心为200px

  // 更新箭头的位置
  cameraArrow.style.left = arrowX + 'px';
  cameraArrow.style.top = arrowY + 'px';

  // 更新箭头的方向
  const rotation = `rotate(${direction}rad)`;
  cameraArrow.style.transform = `translate(-50%, -50%) ${rotation}`;
}