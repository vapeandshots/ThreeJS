import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js";
const w=window.innerWidth;
const h=window.innerHeight;
const render=new THREE.WebGLRenderer();
render.setSize(w,h);
document.body.appendChild(render.domElement);

const camera=new THREE.PerspectiveCamera(45,w/h,1,500);
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

const scene=new THREE.Scene();
// create a blue LineBasiicMaterial

const material=new THREE.LineBasicMaterial({color:0x00ff00});

const points=[];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,10,0));
points.push(new THREE.Vector3(10,0,0));

const geometry=new THREE.BufferGeometry().setFromPoints(points);

const line=new THREE.Line(geometry,material);
scene.add(line);
render.render(scene,camera);
