# 轨道控制器

上一节我们搭建了一个简单的场景，顺带在场景中添加了一个立方体。

这节我们来添加一个 [轨道控制器](https://threejs.org/docs/index.html?q=Contr#examples/zh/controls/OrbitControls)，听名词挺难懂的，其实就是一个操作相机视角的控制器，可以使我们从多个视角观察立方体

## 初始化控制器

```js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// 相机控件的第一个参数必须是相机类，代表相机控件需要改变哪个相机的视角
const controller = new OrbitControls(camera, renderer.domElement);
// 启用阻尼惯性
controller.enableDamping = true;
```

## 交互方式

- 缩放：滚动—鼠标中键
- 旋转：拖动—鼠标左键
- 平移：拖动—鼠标右键

## 添加渲染器

如同场景搭建一样，控制器每一次执行操作也都需要进行一次更新，所以需要将控制器的更新放入渲染器的渲染帧函数里面

```js
renderer.setAnimationLoop(() => {
  controller.update();
  ...
});
```

## 示例

添加了控制器后，就可以操作图形，任意变换视角进行查看

> 图形的位置其实一直都没有变，千万别以为是图形发生了位移，变得只是相机视角

<setup-scene type="addcontrols" />
