# 3D 场景

入门 `three.js` 的第一步，先认识 `场景(Scene)、相机(Camera)、渲染器(Renderer)`三个基本概念。这三者的关系如下图。

<img src="/image/three/start/render.png" />

## 场景(Scene)

场景是用来模拟生活中的真实三维场景，我们通过代码生成的 `物体` 都需要将其添加到场景中才会生效，每个物体都有自身的坐标以及偏移量和角度。

可以通过 `scene.add` 方法将物体添加至场景。

```js
// 创建3D场景对象Scene
const scene = new THREE.Scene();
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);
//创建一个材质对象Material
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000 //0xff0000设置材质颜色为红色
});
// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 10, 0);
scene.add(mesh);
```

## 相机(Camera)

当我们场景有物体时，这时就需要相机来给我们场景拍照，输出成照片，用户才能看到场景的样子。

相机有两个最基本的参数 `camera.position` 和 `camera.lookAt`。

前者表示相机所处的位置，后者表示相机拍摄的位置。

<img src="/image/three/start/camera.png" />

```js
// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度
// 实例化一个透视投影相机对象
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

// 相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200);
// 指向mesh对应的位置
camera.lookAt(mesh.position);
```

## 渲染器(Renderer)

在生活中如果有了物体和相机，像获得一张照片，就需要一个拍照的过程。那么对于 `three.js` 而言，完成这个拍照的过程是通过渲染器来实现的。

```js
const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.setAnimationLoop(() => {
  renderer.render(scene, camera); //执行渲染操作
});
document.body.appendChild(renderer.domElement);
```

## 示例

将上面的代码合并后执行，就可以看到在场景中有一个红色的立方体了

<setup-scene />

```js
import * as THREE from 'three';
// 创建3D场景对象Scene
const scene = new THREE.Scene();
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);
//创建一个材质对象Material
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000 //0xff0000设置材质颜色为红色
});
// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 10, 0);
scene.add(mesh);

// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度
// 实例化一个透视投影相机对象
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

// 相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200);
// 指向mesh对应的位置
camera.lookAt(mesh.position);

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.render(scene, camera); //执行渲染操作
document.body.appendChild(renderer.domElement);
```
