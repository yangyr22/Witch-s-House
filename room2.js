import * as THREE from 'three';
import { GLTFLoader} from './three.js-dev/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader} from './three.js-dev/examples/jsm/loaders/DRACOLoader.js';
import { OBJLoader} from './three.js-dev/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader} from './three.js-dev/examples/jsm/loaders/MTLLoader.js';
import { createWall } from './utils.js';

let scene, camera, renderer, selectElement, selecting, readElement, yesButton, noButton, cameraArrow;
let moveSpeed, clock;
let mixers = [];
let cat, cat_mixer, dist, cat_origin;
let turnSpeed = 0.006;
// let keyPressed = {}; 
let shakeAmount = 0.05;
let shakeTimer = 0; 
let shaked = false;
let PositionCopy;
let SpaceUp = true;


// console.log(1);
// init_1(1);
// animate_1();
// requestAnimationFrame(animate_1);

export function init_2(last_room, room_lit) {
  // Create the scene ************************************************************************************************************************************************
  selecting = false;
  scene = new THREE.Scene();
  clock = new THREE.Clock()
  // Create the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 10000);
//   camera.position.set(0, 600, 0); // 初始相机位置
//   camera.rotation.x += -Math.PI / 2;
  if (last_room === 0){
    camera.position.set(0, 0, 700); // 初始相机位置
  }
  else if (last_room === 1){
    camera.position.set(0, 0, -700); // 初始相机位置
    camera.rotation.y = Math.PI;
  }

  // Create the renderer and add it to the DOM
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add lights to the scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
  scene.add(ambientLight);

  // Event handling *************************************************************************************************************************************************
  selectElement = document.getElementById('select1');
  readElement = document.getElementById('Read');
  yesButton = document.getElementById('yesButton');
  noButton = document.getElementById('noButton');
  cameraArrow = document.getElementById('cameraArrow');

  yesButton.addEventListener('click', function() {
      readElement.style.display = 'flex';
      selectElement.style.display = 'none'; // Hide the text
  });
  noButton.addEventListener('click', function() {
      selectElement.style.display = 'none';
      selecting = false;
  });

  const textureLoader = new THREE.TextureLoader();
  const groundTexture = textureLoader.load('global/ground.jpg'); // 替换为你的纹理图片路径

  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: groundTexture, // 应用纹理
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

  const groundGeometry = new THREE.PlaneGeometry(1050, 1500);
  const ground1 = new THREE.Mesh(groundGeometry, groundMaterial);
  ground1.rotation.x = -Math.PI / 2; 
  ground1.position.y = -200;
  scene.add(ground1);
  const ground2 = new THREE.Mesh(groundGeometry, groundMaterial);
  ground2.rotation.x = Math.PI / 2; 
  ground2.position.y = 800;
  scene.add(ground2);

  scene.add(createWall(new THREE.Vector2(-525, 600), new THREE.Vector2(-525, 150), WallMaterial));
  scene.add(createWall(new THREE.Vector2(525, 150), new THREE.Vector2(525, 600), WallMaterial));
  scene.add(createWall(new THREE.Vector2(-225, -750), new THREE.Vector2(225, -750), WallMaterial));
  scene.add(createWall(new THREE.Vector2(225, 750), new THREE.Vector2(-225, 750), WallMaterial));
  scene.add(createWall(new THREE.Vector2(-225, 0), new THREE.Vector2(-225, -750), WallMaterial));
  scene.add(createWall(new THREE.Vector2(225, -750), new THREE.Vector2(225, 0), WallMaterial));
  scene.add(createWall(new THREE.Vector2(-525, 150), new THREE.Vector2(-375, 150), WallMaterial));
  scene.add(createWall(new THREE.Vector2(-375, 600), new THREE.Vector2(-525, 600), WallMaterial));
  scene.add(createWall(new THREE.Vector2(525, 600), new THREE.Vector2(375, 600), WallMaterial));
  scene.add(createWall(new THREE.Vector2(375, 150), new THREE.Vector2(525, 150), WallMaterial));
  scene.add(createWall(new THREE.Vector2(-375, 150), new THREE.Vector2(-225, 0), WallMaterial));
  scene.add(createWall(new THREE.Vector2(225, 0), new THREE.Vector2(375, 150), WallMaterial));
  scene.add(createWall(new THREE.Vector2(-225, 750), new THREE.Vector2(-375, 600), WallMaterial));
  scene.add(createWall(new THREE.Vector2(375, 600), new THREE.Vector2(225, 750), WallMaterial));

  load_items(room_lit);
  
  PositionCopy = 0;
}

function load_items(room_lit){
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath( 'three.js-dev/examples/jsm/libs/draco/' );
  loader.setDRACOLoader( dracoLoader );
  for (const key in room_lit){
    if (room_lit[key] === true){
      loader.load(
        'room2/copper_candlestick.glb',
        function ( gltf ) {
          gltf.scene.traverse(function (node) {
            if (node.isMesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });
          gltf.scene.scale.set(500, 500, 500);
          gltf.scene.position.set(360 * (key % 2) - 180, 0, -300 + 200 * Math.floor(key / 2));
          gltf.scene.rotation.set(0, (key - 1 / 6) * Math.PI, 0);
          const mixer = new THREE.AnimationMixer(gltf.scene);
          mixer.clipAction(gltf.animations[0]).play();
          mixers.push(mixer);
          scene.add(gltf.scene); 
        },
      );
      const pointLight = new THREE.PointLight(0xffffff, 300);
      pointLight.position.set(360 * (key % 2) - 180, 120, -300 + 200 * Math.floor(key / 2));
      scene.add(pointLight);
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
      scene.add(ambientLight);
    }
    else{
      loader.load(
        'room2/scene.glb',
        function ( gltf ) {
          gltf.scene.traverse(function (node) {
            if (node.isMesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });
          gltf.scene.scale.set(500, 500, 500);
          gltf.scene.position.set(360 * (key % 2) - 180, 0, -300 + 200 * Math.floor(key / 2));
          gltf.scene.rotation.set(0, (key - 1 / 6) * Math.PI, 0);
          scene.add(gltf.scene); 
        },
      );
    }
  }
  //cat
  loader.load(
    'room2/black_cat.glb',
    function ( gltf ) {
      cat = gltf.scene;
      cat.traverse(function (node) {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      cat.scale.set(30, 30, 30);
      cat.position.set(100, -200, 450);
      cat.rotation.set(0, 0, 0);
      cat_mixer = new THREE.AnimationMixer(cat);
      cat_mixer.clipAction(gltf.animations[0]).play();
      scene.add(cat); 
    },
  );
  const mtlLoader = new MTLLoader();
  mtlLoader.load(
    'room2/Toy_Soldier/11584_Toy Soldier_V2_l3.mtl',
    function (materialCreator) {
      materialCreator.preload(); 
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materialCreator);
      objLoader.load(
        'room2/Toy_Soldier/11584_Toy Soldier_V2_l3.obj',
        function (object) {
          object.scale.set(24, 24, 24);
          object.rotation.x = -Math.PI / 2;
          object.position.set(100, -200, -650);
          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true; 
              child.receiveShadow = true; 
            }
          });
          scene.add(object);
        },
      );
    },
  ); 
}

export function animate_2(current_room, last_room, keyPressed, face_item) {
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
  else if (shakeTimer == 0 && selecting == false){
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
    if (keyPressed['ArrowUp']) {
      camera.position.y += moveSpeed;
    }
    if (keyPressed['ArrowDown']) {
      camera.position.y -= moveSpeed;
    }
    dist = new THREE.Vector2(camera.position.x - 100, camera.position.z - 450)
    cat.rotation.y = dist.angle() * (-1) + Math.PI / 2;
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
  } else{
    if (keyPressed['Space'] && readElement.style.display==='flex') {
      selectElement.style.display = 'none'; 
      readElement.style.display = 'none';
      selecting = false;
    }
  }
  updateCameraArrow();
  //动画
  const time = clock.getDelta();
  for (const key in mixers){
    mixers[key].update(time);
  }
  if (dist.length() <= 300){
    cat_mixer.update(time);
  }
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
    // if (Math.abs(x) > 400 || Math.abs(z) > 400){
    //     return true;
    // }
    // if (Math.abs(x) <250 && Math.abs(z) < 200){
    //     return true;
    // }
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