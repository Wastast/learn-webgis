# 用 stats 查看渲染帧率

`three.js` 每执行 WebGL 渲染器 `.render` 方法一次，就在 canvas 画布上得到一帧图像，不停地周期性执行 `.render()` 方法就可以更新 canvas 画布内容，一般场景约复杂往往渲染性能越低，也就是每秒钟执行 `.render()` 的次数越低。

通过 `stats` 库可以查看到 `three.js` 当前的渲染性能，计算当前的渲染帧率(FPS)

> 渲染帧率(FPS): 简单说就是每秒钟完成的渲染次数，一般每秒钟渲染 60 次 为最佳状态，也就是 FPS = 60

```js
import Stats from 'three/examples/jsm/libs/stats.module.js';
const stats = new Stats();
document.body.appendChild(stats.domElement);
renderer.setAnimationLoop(() => {
  stats.update();
  ...
});
```

<render-stats></render-stats>
