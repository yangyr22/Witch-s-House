import * as THREE from 'three';

export function createWall(startPoint, endPoint, WallMaterial){
    const dist = new THREE.Vector2().add(endPoint).sub(startPoint);
    const length = dist.length();
    const WallGeometry = new THREE.PlaneGeometry(length, 1000);
    const Wall = new THREE.Mesh(WallGeometry, WallMaterial);
    const position = new THREE.Vector2().add(startPoint).add(endPoint).divideScalar(2);
    const radius = - dist.angle(); 
    console.log(radius);
    Wall.position.x = position.x;
    Wall.position.y = 300;
    Wall.position.z = position.y;
    Wall.rotation.y = radius; 
    return Wall
}