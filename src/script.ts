import { Game } from './game';
import { GameState } from './state';
import { PerspectiveCamera, Scene,
       BoxGeometry, MeshPhongMaterial,
       Mesh, AmbientLight, SphereGeometry, Vector3 } from 'three';
import { WebGLRenderer } from 'three';
import Main from './main';

const canvas = document.getElementById('c');

const game = new Game(canvas);

const menu = new GameState('menu');
menu.initializer(function() {
  this.totalTime = 0;
  const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
  camera.position.set(0, 0, 5);
  this.camera = camera;

  const scene = new Scene();
  this.scene = scene;

    
  const light = new AmbientLight(0x444444);
  scene.add(light);
  
  const geometry = new BoxGeometry(1, 1, 1);

  const pinkMaterial = new MeshPhongMaterial({ color: 0xff4444 });
  const blueMaterial = new MeshPhongMaterial({ color: 0x3344ff });

  const pinkMesh = new Mesh(geometry, pinkMaterial);
  const blueMesh = new Mesh(geometry, blueMaterial);

  pinkMesh.position.set(2, 0, 0);
  blueMesh.position.set(-2, 0, 0);

  scene.add(pinkMesh);
  scene.add(blueMesh);

  this.meshes = [pinkMesh, blueMesh];
});
menu.setUpdateFunction(function(dt: number) {
  this.meshes.forEach(mesh => mesh.rotation.y += 0.01);
  this.totalTime += dt;
  if (this.totalTime > 10) {
    game.setState('jumping');
  }
});
menu.setRenderFunction(function(WebGLRenderer: WebGLRenderer) {
  const camera = this.camera;
  const scene = this.scene;

  WebGLRenderer.render(scene, camera);
});

const jumping = new GameState('jumping');
jumping.initializer(function() {
  const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
  camera.position.set(0, 0, 5);
  this.camera = camera;

  const scene = new Scene();
  this.scene = scene;
  
  const light = new AmbientLight(0xff44ff);
  scene.add(light);

  const geometry = new SphereGeometry(1, 10, 28);
  const purpleMaterial = new MeshPhongMaterial({ color: 0xff44ff });

  const mesh = new Mesh(geometry, purpleMaterial);
  scene.add(mesh);
  this.mesh = mesh;
  this.velocity = new Vector3(0, 10, 0);
  this.gravity = new Vector3(0, -9.8, 0);
});
jumping.setUpdateFunction(function(dt: number) {
  this.velocity.addScaledVector(this.gravity, dt);
  this.mesh.position.addScaledVector(this.velocity, dt);
  
  if (this.mesh.position.y < -1) {
    this.mesh.position.y = 0;
    this.velocity.y = 10;
  }

});
jumping.setRenderFunction(function(WebGLRenderer: WebGLRenderer) {
  WebGLRenderer.render(this.scene, this.camera);
});


const credits = new GameState('credits');

game.addState(menu);
game.addState(jumping);
game.setState('menu');
game.start();