# 坐标系

本节中，我们来认识下在 `three.js` 中的坐标系。

`three.js` 中使用的是右手坐标系，默认的是 y 轴向上是正方向，x 轴向右是正方向，z 轴朝自己是正方向

<img src="/image/three/start/l-r-handler.jpg" />

在 `three.js` 中我们可以通过内置的对象 [THREE.AxesHelper](https://threejs.org/docs/index.html?q=Ax#api/zh/helpers/AxesHelper) 来查看其坐标轴的状态。

发现坐标轴的颜色有 `红色(R)`、`绿色(G)`、`蓝色(B)` 分别对应坐标系的 `x(红)`、`y(绿)`、`z(蓝)`

## 创建四边形

我们创建一个四边形，添加至场景中，方便认知坐标轴的变化

```js
import * as THREE from 'three';
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 60, 40);
//创建一个材质对象Material
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000, //0xff0000设置材质颜色为红色
  transparent: true, //开启透明
  opacity: 0.5 //设置透明度
});

// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 0, 0);
scene.add(mesh);
```

## 创建坐标轴

```js
// AxesHelper：辅助观察的坐标系 参数为坐标轴单边的长度
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);
```

## 示例

将以上的代码进行相应的更改和添加后，就能得到以下的场景。

y 轴向上不一定满足全部场景，某些场景需要更换坐标轴位置

<setup-scene type="axis" />
