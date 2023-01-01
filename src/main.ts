import { Scene, PerspectiveCamera } from 'three';
import { BoxGeometry, SphereGeometry,
       Mesh, MeshPhongMaterial } from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);

{// local box variable
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshPhongMaterial({ color: 0xf51488 });
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);
}
{// local sphere variable
  const geometry = new SphereGeometry(1, 10, 28);
  const material = new MeshPhongMaterial({ color: 0xf51488 });
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);
}

export default {
  scene,
  camera
};