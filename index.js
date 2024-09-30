import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js";
const w=window.innerWidth;
const h=window.innerHeight;
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(w,h);
document.body.appendChild( renderer.domElement );
const camera=new THREE.PerspectiveCamera(75,w/h,0.1,100);
camera.position.z=2;
const scene=new THREE.Scene();

const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true;
controls.dampingFactor=0.03;
const geo=new THREE.IcosahedronGeometry(1.0,2);
const mat=new THREE.MeshStandardMaterial({
    color:0xffffff,
    flatShading:true
});

const mesh=new THREE.Mesh(geo,mat);
scene.add(mesh);

const wireMat=new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe:true
});
const wireMesh=new THREE.Mesh(geo,wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);
const hemilight=new THREE.HemisphereLight(0xffb533,0x33c4ff);
scene.add(hemilight);
function animate(t=0){
    requestAnimationFrame(animate);
    mesh.rotation.y=t*0.001;
    mesh.rotation.x=t*0.0001;
    renderer.render(scene,camera);
    controls.update();
}
animate();