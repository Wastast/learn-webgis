# 相机

在三维世界中，物体的坐标决定了物体所处的位置，而相机的坐标决定了我们从何处查看物体，相机控制了场景的观察视角。有很多相机的操作方法，比如旋转、缩放、平移以及飞行定位等，满足日常针对三维场景的交互需求。

Cesium 默认支持使用鼠标(PC)和触摸(H5)事件控制相机，也提供了一套 API 方法，用于外部调用控制相机。本篇就是介绍在 Cesium 中我们如何控制相机以满足我们日常的交互需求。

<img src="/image/cesium/setup/camera_handle.png" />

## 相机的方向和位置

### position

Camera 相机的位置，仅支持接受笛卡尔坐标，一般用 `Cesium.Cartesian3.fromDegrees(lon, lat, height)` 将经纬度转换后

### orientation

Camera 的 `orientation` 参数用于设定相机的方向，它是一个 object 对象，包含三个参数 `heading`、`pitch` 和 `roll`。

- heading：偏航角，默认方向为正北，正角度为向东旋转，即左右摇头
- pitch：俯仰角，默认角度为 -90°，即朝向地面，0° 为平视，正角度为仰视，负角度为俯视，即抬头低头
- roll：翻转角，默认角度为 0°，正角度向右旋转，负角度向左旋转，即左右歪头

## 相机的控制

在上面我们了解了一些基础的参数，这次我们来了解几个基础的用法

### setView 快速定位

`setView` 通过定义相机的三维坐标和视角方向，将相机直接移动到所设定的位置以及将视角调整为设定好的视角方向，中间没有飞行过程，适合快速切换视角时使用。

```js
// 1. 不调整视角方向，直接设置相机位置
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
});

// 2. 调整视角方向以及相机位置
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0),
  orientation: {
    heading: Cesium.Math.toRadians(90.0), // 东，默认值为 0.0（北）
    pitch: Cesium.Math.toRadians(-90), // 默认值（向下看）
    roll: 0.0 // 默认值
  }
});

// 3. 仅调整视角方向
viewer.camera.setView({
  orientation: {
    heading: Cesium.Math.toRadians(90.0), // 东，默认值为 0.0（北）
    pitch: Cesium.Math.toRadians(-90), // 默认值（向下看）
    roll: 0.0 // 默认值
  }
});

// 4. 相机位置不仅仅支持 x, y, z 坐标，也可以传入范围，会内部提取中心点
viewer.camera.setView({
  destination: Cesium.Rectangle.fromDegrees(west, south, east, north)
});
```

### flyTo 飞行定位

`flyTo` 与 `setView` 都是用于控制相机的位置和视角方向，快速切换视角时使用。但不同的是 `flyTo` 有过渡，可以调整飞行时间，以此产生飞行动画，避免视角跳转太过生硬。

```js
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0),
  orientation: {
    heading: Cesium.Math.toRadians(90.0), // 东，默认值为 0.0（北）
    pitch: Cesium.Math.toRadians(-90), // 默认值（向下看）
    roll: 0.0 // 默认值
  },
  duration: 3, // 以秒为单位的飞行持续时间，如果省略，Cesium 会自行计算其动画时间，建议填写
  complete: () => {}, // 飞行动画完毕时的回调函数
  cancel: () => {}, // 飞行动画取消时执行，一般时在飞行时直接执行下一个飞行动画，会取消上一个飞行
  pitchAdjustHeight: -90, // 如果摄像机飞越高度高于该值，则会调整俯仰角度，保证地球在视域中
  easingFunction: Cesium.EasingFunction.BACK_IN // 飞行动画
});
```

### lookAt 锁定目标

`lookAt` 与前两者不相同，前两者是用于快速切换视角，而 `lookAt` 是用于将视角固定在所设置的目的点上，用户可以通过鼠标任意旋转视角方向，但不会改变其位置

```js
const center = Cesium.Cartesian3.fromDegrees(-72.0, 40.0);
const heading = Cesium.Math.toRadians(50.0);
const pitch = Cesium.Math.toRadians(-20.0);
const range = 5000.0;
viewer.camera.lookAt(
  center,
  new Cesium.HeadingPitchRange(heading, pitch, range)
);
```
