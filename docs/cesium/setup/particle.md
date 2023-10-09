# 粒子系统

粒子系统是一种图形技术，可以模拟复杂的物理效果。

粒子系统由一堆很小的图片组成，当这些小图片数量足够多且一起观看时，会形成一个更复杂，偏 `模糊` 的物体，比如火、烟、汽车尾气和烟花等。

## 基础粒子

```js
const entity = CMapCe.viewer.entities.add({
  //选择粒子放置的坐标
  position: Cesium.Cartesian3.fromDegrees(119.9320456, 28.48276084, 0)
});

const particleSystem = CMapCe.viewer.scene.primitives.add(
  new Cesium.ParticleSystem({
    // 粒子图片
    image:
      'https://cloud-map.oss-cn-hangzhou.aliyuncs.com/resource/particle/fire.png',
    imageSize: new Cesium.Cartesian2(20, 20), // 粒子大小
    startScale: 1.0, // 粒子在开始时的图片比例大小
    endScale: 4.0, // 粒子在结束时的图片比例大小
    particleLife: 1.0, // 粒子的生存时间
    speed: 5.0, // 粒子的移动速度
    emitter: new Cesium.CircleEmitter(0.5), // 粒子发射器的类别 默认 CircleEmitter
    emissionRate: 5.0, // 每秒发射的粒子个数
    modelMatrix: entity.computeModelMatrix(
      // 将粒子系统从模型转换为世界坐标的 4 x 4 矩阵
      CMapCe.viewer.clock.startTime,
      new Cesium.Matrix4()
    ),
    lifetime: 16.0 // 粒子系统发射粒子的时间
  })
);
```

<img src="/image/cesium/setup/particle_basic.gif" />

上面的代码创建了一个基本的粒子系统以及一些相关的参数解析。详细可看 [粒子系统 API](http://cesium.xin/cesium/cn/Documentation1.95/ParticleSystem.html?classFilter=ParticleSystem)

## 发射器

发射器对于粒子系统而言，是一个重要的概念，在上面我们成功创建了一个简单的粒子动画，该粒子是从下往上发射，直至到达最后的动画时间。

本节，介绍下粒子系统中其他的发射器，在合适的场景中进行应用。

### CircleEmitter

`CircleEmitter` 在发射器上方，产生一个指定半径的圆形，随机采样位置初始化粒子。

<img src="/image/cesium/setup/particle_basic.gif" />

```js
const emitter = new Cesium.CircleEmitter(0.5);
```

### BoxEmitter

`BoxEmitter` 在一个盒子内随机取样位置初始化粒子。它接受 `Cartesian3` 参数，该参数指定框的宽度、高度和深度尺寸。

<img src="/image/cesium/setup/box_emitter.gif" />

```js
const emitter = new Cesium.BoxEmitter(new Cesium.Cartesian3(5.0, 5.0, 5.0));
```

### ConeEmitter

`ConeEmitter` 在圆锥体的顶端初始化粒子，并以随机的角度发射。支持一个圆锥体角度的参数。

<img src="/image/cesium/setup/cone_emitter.gif" />

```js
const emitter = new Cesium.ConeEmitter(Cesium.Math.toRadians(30.0));
```

### SphereEmitter

`SphereEmitter` 在球体内随机取样的位置发射粒子，并将他们从球体中心往外发射。接受一个球体半径的值作为参数

<img src="/image/cesium/setup/sphere_emitter.gif" />

```js
const emitter = new Cesium.SphereEmitter(5.0);
```

## 配置粒子系统

上节我们介绍了发射器的概念，本节我们介绍一些在配置粒子系统的过程中比较重要的参数。

再介绍参数之前，要先了解一个概念，除却某些固定的参数值，在粒子系统中的参数都会具备 `开始(start)` 和 `结束(end)`、`最小(min)` 和 `最大(max)`，用于各种随机取样的情况，以增加粒子的多样性。

### emissionRate

`emissionRate` 控制每秒发射多少粒子，以整数为单位。该参数会增加发射粒子的密度。

```json
{
  "emissionRate": 1
}
```

<img src="/image/cesium/setup/emissionRate.gif" />

### bursts

`bursts` 在指定时间节点发射粒子，可以设置粒子个数的最小值和最大值用于随机采样。该参数会增加粒子系统的多样性和爆炸性。

```js
const bursts = [
  new Cesium.ParticleBurst({ time: 5.0, minimum: 300, maximum: 500 }),
  new Cesium.ParticleBurst({ time: 10.0, minimum: 50, maximum: 100 }),
  new Cesium.ParticleBurst({ time: 15.0, minimum: 200, maximum: 300 })
];
```

<img src="/image/cesium/setup/bursts.gif" />

### lifetime

`lifetime` 指定了在几秒钟之内持续的发射粒子。它有一个配合的参数叫 `loop`, 是否循环发射粒子。

如果 `loop` 为 `false`，则在规定的时间结束后，粒子发射器就不在发射粒子。为 `true` 时，当时间结束则又开始重新循环。

```json
{
  "lifetime": 10.0, // 支持小数点
  "loop": true // true: 循环时间 | false: 时间结束则停止   默认为 true
}
```

### particleLife

上面介绍的 `lifetime` 是粒子发射的持续时间，而 `particleLife` 则是粒子被发射后，在场景中的生存时间。

此处有两个概念，随机生存时间 和 固定生存时间。

```json
{
  // 随机生存时间
  "minimumParticleLife": 5.0, // 最小生存时间
  "maximumParticleLife": 10.0, // 最大生存时间

  // 固定生存时间
  "particleLife": 1.0 // 固定时间
}
```

`particleLife` 参数如果具有, 则 `minimumParticleLife` 和 `maximumParticleLife` 不会生效。

### color

在粒子系统中我们一般用图片决定粒子的形状，用 `color` 来决定粒子的颜色。

```js
const obj = {
  // 固定颜色
  color: Cesium.Color.RED,
  // 颜色过渡
  startColor: Cesium.Color.RED.withAlpha(0.7),
  endColor: Cesium.Color.WHITE.withAlpha(0.0)
};
```

> 除却图片本身就自带所需要的颜色，其余都可采用该方法设置颜色

### size

粒子的大小我们可以通过两种方式进行管控，根据实际情况进行应用。

`imageSize`、`minimumImageSize`、`maximumImageSize` 可以控制粒子图片的大小，在粒子被发射之前会随机或固定采样大小

`scale`、`startScale`、`endScale` 可以控制粒子被发射后在生存时间的大小，可固定可过渡

### speed

`speed` 可以调整粒子被发射后的移动速度 米/秒，可以通过 `speed`、`minimumSpeed`、`maximumSpeed` 来固定或者随机控制

```json
{
  // 固定速度
  "speed": 1.0,

  // 随机速度
  "minimumSpeed": 1.0,
  "maximumSpeed": 2.0
}
```

### updateCallback

`updateCallback` 在某些情况不那么常用，但也是一个非常重要的概念，之前我们了解的所有参数都是对粒子进行的统一设置，用这个函数我们就可以在粒子生存时间中进行修改粒子的颜色、尺寸等相关参数。

```js
// p 当前的粒子
// dt 自上次更新的时间 以秒为单位
const updateCallback = (p, dt) => {
  const position = p.position;
  const gravityVector = Cesium.Cartesian3.normalize(
    position,
    new Cesium.Cartesian3()
  );
  Cesium.Cartesian3.multiplyByScalar(
    gravityVector,
    GRAVITATIONAL_CONSTANT * dt,
    gravityVector
  );
  p.velocity = Cesium.Cartesian3.add(p.velocity, gravityVector, p.velocity);
};
```

## 定位

在上面我们了解了粒子系统的一些基本参数和发射器, 现在我们要知道如何将粒子系统正确的定位到某个位置供我们使用。

粒子系统的定位与其余的实体定位不同, 它需要采取矩阵。

使用以下参数变化矩阵定位粒子系统

- modelMatrix: 将粒子系统从模型转换为世界坐标
- emitterModelMatrix: 在粒子系统的局部坐标系中变换粒子系统发射器位置

### 先创建一个车

```js
const entity = CMapCe.viewer.entities.add({
  model: {
    uri: 'https://cloud-map.oss-cn-hangzhou.aliyuncs.com/resource/gltf/car.glb'
  },
  position: Cesium.Cartesian3.fromDegrees(119.9320456, 28.48276084, 0)
});

CMapCe.viewer.trackedEntity = entity; // 将视角锁定在实体上
```

### 将粒子系统定位到实体上

```js
const modelMatrix = entity.computeModelMatrix(
  CMapCe.viewer.clock.startTime,
  new Cesium.Matrix4()
); // 获取实体的变换矩阵

const particleSystem = CMapCe.viewer.scene.primitives.add(
  new Cesium.ParticleSystem({
    image:
      'https://cloud-map.oss-cn-hangzhou.aliyuncs.com/resource/particle/smoke.png',
    startColor: Cesium.Color.LIGHTSEAGREEN.withAlpha(0.7),
    endColor: Cesium.Color.WHITE.withAlpha(0.0),
    startScale: 1.0,
    endScale: 5.0,
    minimumParticleLife: 1.2,
    maximumParticleLife: 1.2,
    minimumSpeed: 1.0,
    maximumSpeed: 4.0,
    imageSize: new Cesium.Cartesian2(25.0, 25.0),
    emissionRate: 5.0,
    emitter: new Cesium.CircleEmitter(2.0)
  })
);

particleSystem.modelMatrix = entity.computeModelMatrix(
  CMapCe.viewer.clock.startTime,
  new Cesium.Matrix4()
);
```

<img src="/image/cesium/setup/car_start.gif" />

这样我们就将粒子的定位绑定在了小车身上，但仔细看的会发现，它的粒子发射器定位在小车的中心，而不是尾部。

毕竟汽车尾气是从尾部发出的，而不是底盘发出的，所以我们要调整粒子发射器的局部位置，这时我们就需要用到 `emitterModelMatrix` 来调整局部矩阵

### 调整粒子的局部位置

```js
// 这是一个组合，目前无需了解做了什么处理
let hpr = new Cesium.HeadingPitchRoll();
const trs = new Cesium.TranslationRotationScale();
const translation = new Cesium.Cartesian3();
const rotation = new Cesium.Quaternion();
const emitterModelMatrix = new Cesium.Matrix4();

function computeEmitterModelMatrix() {
  hpr = Cesium.HeadingPitchRoll.fromDegrees(0.0, 0.0, 0.0, hpr);
  // fromElements 后续跟着的三个参数则是调整局部位置的关键  x, y, z 按米为单位
  trs.translation = Cesium.Cartesian3.fromElements(-3.0, 0.0, 1.0, translation);
  trs.rotation = Cesium.Quaternion.fromHeadingPitchRoll(hpr, rotation);

  return Cesium.Matrix4.fromTranslationRotationScale(trs, emitterModelMatrix);
}

particleSystem.emitterModelMatrix = computeEmitterModelMatrix();
```

<img src="/image/cesium/setup/car_end.gif" />

这样我们就调整好汽车尾气的位置了，只是目前汽车不会动。
