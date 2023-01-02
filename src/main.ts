/*
*  
*
*  Copyright 2023 Nullmetry
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/




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