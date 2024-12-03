import * as THREE from 'three';
import { OBJLoader} from './three.js-dev/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader} from './three.js-dev/examples/jsm/loaders/FBXLoader.js';
import { MTLLoader} from './three.js-dev/examples/jsm/loaders/MTLLoader.js';

let scene, camera, renderer, selectElement, selecting, readElement, yesButton, noButton;
let moveSpeed;
let turnSpeed = 0.01;
let keyPressed = {}; 

init();
animate();

window.onload = function() {
    var audio = document.getElementById('new-game-audio');
  
    var oldAudio = document.getElementById('background-audio');
    if (oldAudio) {
        oldAudio.pause();
        oldAudio.currentTime = 0;
    }
  
    audio.play();
};

function init() {
  // Create the scene
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
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
  directionalLight.position.set(-1, 1, 1);
  scene.add(directionalLight);


  selectElement = document.getElementById('select1');
  readElement = document.getElementById('Read');
  yesButton = document.getElementById('yesButton');
  noButton = document.getElementById('noButton');

  yesButton.addEventListener('click', function() {
      readElement.style.display = 'flex';
      selectElement.style.display = 'none'; // Hide the text
  });
  noButton.addEventListener('click', function() {
      selectElement.style.display = 'none';
      selecting = false;
  });

  const textureLoader = new THREE.TextureLoader();
  const groundTexture = textureLoader.load('room1/ground.jpg'); // 替换为你的纹理图片路径

  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: groundTexture, // 应用纹理
    metalness: 0.5, // 设置金属度
    roughness: 1.0, // 设置粗糙度
  });

  const carpetTexture = textureLoader.load('room1/carpet.jpg'); // 替换为你的纹理图片路径

  const carpetMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: carpetTexture, // 应用纹理
    metalness: 0.5, // 设置金属度
    roughness: 1.0, // 设置粗糙度
  });

  const WallTexture = textureLoader.load('room1/wall.jpg');

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

  const WallGeometry = new THREE.PlaneGeometry(1000, 1000);
  const Wall1 = new THREE.Mesh(WallGeometry, WallMaterial);
  Wall1.rotation.y = Math.PI / 2; 
  Wall1.position.y += 300;
  Wall1.position.x -= 500;
  scene.add(Wall1);

  const Wall2 = new THREE.Mesh(WallGeometry, WallMaterial);
  Wall2.rotation.y = -Math.PI / 2; 
  Wall2.position.y += 300;
  Wall2.position.x += 500;
  scene.add(Wall2);

  const Wall3 = new THREE.Mesh(WallGeometry, WallMaterial);
  Wall3.position.y += 300;
  Wall3.position.z -= 500;
  scene.add(Wall3);

  const Wall4 = new THREE.Mesh(WallGeometry, WallMaterial);
  Wall4.rotation.y = Math.PI;
  Wall4.position.y += 300;
  Wall4.position.z += 500;
  scene.add(Wall4);

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
  while (camera.rotation.y > Math.PI) {
    camera.rotation.y -= 2 * Math.PI;
  }
  while (camera.rotation.y < -Math.PI) {
    camera.rotation.y += 2 * Math.PI;
  }
  if (keyPressed['ShiftLeft']) {
    moveSpeed = 6;
  }else{
    moveSpeed = 2;
  }
  if (selecting == false){
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
    if (keyPressed['Space'] && face_book()) {
      selectElement.style.display = 'flex'; 
      selecting = true;
    }
    if (cannot_go(camera.position.x, camera.position.z)){
        camera.position.x = x_copy;
        camera.position.z = z_copy;
    }
  } else{
    if (keyPressed['Escape']) {
      selectElement.style.display = 'none'; 
      readElement.style.display = 'none';
      selecting = false;
    }
  }
  renderer.render(scene, camera);
}

function face_book(){
    if (camera.position.x >= -200 || camera.position.z >= -200){
        console.log(camera.position.x + ' ' +camera.position.z +' not in book range.')
        return false;
    }
    if (camera.rotation.y >= Math.PI / 4 || camera.rotation.y <= -Math.PI / 4){
        console.log(camera.rotation.y + ' not facing book.')
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