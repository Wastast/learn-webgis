# 几何图形

Cesium 丰富多样的几何图形 API 分为两大类：`Primitive API` 是面向三维图形开发者，会更加底层一些，适用于懂图形学的使用者，`Entity API` 是数据驱动，拥有一些封装好的接口，简易化使用。

- `Primitive API`：主要目的是为了完成绘制几何图形的任务。要求使用者以一个图形开发者的方式去思考，并且使用了一些图形学的属于。它是为了最高效最灵活的实现可视化的效果，忽略了 API 的一致性。

- `Entity API`：主要目的是定义一组高级对象，把可视化和信息存储到统一的数据结果中。它让我们更加关注我们的数据可视化展示而不是底层的渲染机制。`Entity API` 提供灵活的，高层次的可视化，同时暴露一些一致性的、容易去学习和使用的接口。

本章主要介绍 `Entity API`，`Primitive API` 放到后续讲解。

## 几何体 Entity

| 图片                                                   | 实体 API                         | 说明           |
| ------------------------------------------------------ | -------------------------------- | -------------- |
| <img src="/image/cesium/entity/box.webp" />            | `Cesium.BoxGraphics`             | 盒子           |
| <img src="/image/cesium/entity/corridor.webp" />       | `Cesium.CorridorGraphics`        | 管道           |
| <img src="/image/cesium/entity/cylinder.webp" />       | `Cesium.CylinderGraphics `       | 圆柱体、圆锥体 |
| <img src="/image/cesium/entity/ellipse.webp" />        | `Cesium.EllipseGraphics `        | 圆或椭圆       |
| <img src="/image/cesium/entity/ellipsoid.webp" />      | `Cesium.EllipsoidGraphics `      | 球体或椭球体   |
| <img src="/image/cesium/entity/polygon.webp" />        | `Cesium.PolygonGraphics`         | 多边形         |
| <img src="/image/cesium/entity/polyline.webp" />       | `Cesium.PolylineGraphics`        | 线段           |
| <img src="/image/cesium/entity/polylineVolume.webp" /> | `Cesium.PolylineVolumeGraphics ` | 线段体积       |
| <img src="/image/cesium/entity/rectangle.webp" />      | `Cesium.RectangleGraphics`       | 矩形           |
| <img src="/image/cesium/entity/wall.webp" />           | `Cesium.WallGraphics`            | 墙体           |

### 外观

无论几何体有什么不同，所有形状和体都有相同的属性来控制他们的外观。

#### fill

控制表面是否填充，默认为 `true`。

当 `fill = true` 时，我们就可以通过几何体的 `material` 属性决定该物体用什么材质填充表面。
当 `fill = false` 时，则会取消 `material` 对于几何体的作用。

`material` 可以是 `图片`、`材质`和纯色，也可以基于 `Cesium.MaterialProperty` 的概念自定义材质。

```js
const greenRectangle = viewer.entities.add({
  name: 'Entity Demo',
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(-110.0, 30.0, -100.0, 40.0),
    fill: true, // true | false
    material: Cesium.Color.GREEN.withAlpha(0.5)
  }
});
```

<img src="/image/cesium/entity/fill.png" />

本章不涉及材质，后续讲解。

#### outline

该属性控制几何体是否有外边线。默认为 `false`。

和 `fill` 属性很不一样，`outline` 没有对应的 `material` 属性可以设置材质或者颜色。

而是用两个独立的属性 `outlineColor` 和 `outlineWidth` 设置外边线的颜色和宽度。

<img src="/image/cesium/entity/outline.png" />

```js
const greenRectangle = viewer.entities.add({
  name: 'Entity Demo',
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(-110.0, 30.0, -100.0, 40.0),
    material: Cesium.Color.GREEN.withAlpha(0.5),
    outline: true, // true | false
    outlineColor: Cesium.Color.WHITE
  }
});
```

> `outlineWidth` 属性仅仅在非 `windows` 系统上有效。比如 `Android`、`ios`、`Linux`和 `OSX`。在 `windows` 一直为 1。
> `Polyline` 图形是个特例，可以设置 `material`、宽度。所以一般矢量图形做边框，都会辅助采用 `Polyline`

<!-- | <img src="/image/cesium/entity/billboard.png" />       | `Cesium.BillboardGraphics`       | 广告牌         | -->
<!-- | <img src="/image/cesium/entity/model.png" />           | `Cesium.ModelGraphics`           | 3D 模型        | -->

<!-- ## Entity API 参数

### heightReference

一个属性，指定相对于实体位置的高度

- Cesium.HeightReference.NONE
- Cesium.HeightReference.CLAMP_TO_GROUND：该图形处于地形之上
- Cesium.HeightReference.RELATIVE_TO_GROUND： -->

### 高度和挤压体积

有大部分的几何体一开始都是面形状，平铺在地球上，比如 `多边形(polygon)`、`矩形(rectangle)`、`圆(ellipse)` 等。它们会贴合地球曲率(有地形时也会贴合)。]

> 一旦设置高程属性或者挤压属性任意一个时，则贴合失效

```js
const redPolygon = viewer.entities.add({
  name: 'Entity demo',
  polygon: {
    hierarchy: Cesium.Cartesian3.fromDegreesArray([
      119.86297845, 28.15799439, 119.89544851, 28.16208804, 119.89405951,
      28.1366316, 119.86609709, 28.13429662, 119.86297845, 28.15799439
    ]),
    material: Cesium.Color.RED
  }
});
```

<img src="/image/cesium/entity/height1.png" />

当我们设置了高程属性后，图形就会升高。

> 如果没有特殊声明的话，Cesium 则默认采用 米、弧度、秒作为标准单位

```js
redPolygon.polygon.height = 2000;
```

<img src="/image/cesium/entity/height2.png" />

现在图形还处于平面形态，我们通过调整 `extrudedHeight` 属性，让其成为多边形体。

当设置了 `extrudedHeight` 属性后，将会创建一个在 `height` 和 `extrudedHeight` 之间的体块，一般来说是 `extrudedHeight - height = Number(val)`。

如果 `height` 未被定义，则默认从 0 开始。

下面的代码来创建一个高度为 1000 米的体块，由于前面我们已经将高程设为 2000 米，所以属性 `extrudedHeight` 的值为。`2000 + 1000 = extrudedHeight`

```js
redPolygon.polygon.height = 2000;
redPolygon.polygon.extrudedHeight = 3000;
```

<img src="/image/cesium/entity/height3.png" />

至此，一些重要的概念已经说明，剩余的一些 API 属性，可通过阅读相关的[API 文档](https://cesium.com/learn/cesiumjs/ref-doc/BillboardGraphics.html?classFilter=Graphics)来了解。

## 非几何体 Entity

| 图片                                             | 实体 API                   | 说明    |
| ------------------------------------------------ | -------------------------- | ------- |
| <img src="/image/cesium/entity/billboard.png" /> | `Cesium.BillboardGraphics` | 广告牌  |
| <img src="/image/cesium/entity/point.png" />     | `Cesium.PointGraphics`     | 点位    |
| <img src="/image/cesium/entity/label.png" />     | `Cesium.LabelGraphics`     | 文本    |
| <img src="/image/cesium/entity/model.png" />     | `Cesium.ModelGraphics`     | 3D 模型 |

这些实体类别，不适用于上面几何体类别的一些参数。

### 广告牌(BillboardGraphics)

这个在 Cesium 的项目中是常用的一个图形，经常作为 POI 点来使用，有一个较为重要的参数 `image`，可以设置一张图片作为背景。

与之搭配的则是 `width` 和 `height` 设置图片的宽高，如不设置默认采用图片本身的宽高。

<img src="/image/cesium/entity/billboard.png" />

### 点位(PointGraphics)

常用于拾取某些场景中的点时采用，获取该点的经度、纬度、高度等相关信息。

有意思的是，点位的大小设置为 `pixelSize`，是基于屏幕像素来的，不是基于场景中的米单位。可以通过 `outlineColor` 和 `outlineWidth` 设置外边框的大小和颜色。

<img src="/image/cesium/entity/point2.png" />

### 文本(LabelGraphics)

文本一般是用于辅助展示信息，通过 `text` 和 `font` 两个属性来定义，文字内容以及文字大小和字体家族。使用 `fillColor` 来填充文字颜色，`outlineColor` 和 `outlineWidth` 来显示文字边框。

### 三维模型(ModelGraphics)

Cesium 通过 `gltf` 格式来支持三维模型，gltf 模型的文件后缀有 `.gltf|.glb` 两种。

本章仅介绍一些基本使用。

通过 `uri` 参数来设置模型的资源路径。`scale` 和 `minimumPixelSize` 可以调整模型在场景中的大小。`Entity.orientation` 可以调整模型的方向，模型默认向右朝向东方。

```js
var position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706);
var heading = Cesium.Math.toRadians(45.0);
var pitch = Cesium.Math.toRadians(15.0);
var roll = Cesium.Math.toRadians(0.0);
// 转向参数
var orientation = Cesium.Transforms.headingPitchRollQuaternion(
  position,
  new Cesium.HeadingPitchRoll(heading, pitch, roll)
);

var entity = viewer.entities.add({
  position: position,
  orientation: orientation,
  model: {
    uri: '../../../../Apps/SampleData/models/GroundVehicle/GroundVehicle.glb'
  }
});
viewer.trackedEntity = entity;
```

非几何体的 `Entity` 参数介绍到这，由于属性参数过多，本文不在赘述，详细可查看 [API 文档](https://cesium.com/learn/cesiumjs/ref-doc/BillboardGraphics.html?classFilter=Graphics)

## Entity 集合

`EntityCollection` 是一个 `Entity` 的数组集合，一般情况下 Cesium 用它来管理和控制 `Entity`，我们将 `Entity` 添加至场景的 `Viewer.entities.add` 方法，就是基于该类。

`EntityCollection` 具备以下几种基本的应用方法

- add：添加实体至场景
- getById：通过 Id 获取 `Entity`
- remove：接受一个 `Entity` 为参数，移除当前 `Entity`
- removeById：通过 Id 移除 `Entity`
- removeAll：移除全部的 `Entity`

我们正常往场景中添加实体，都会具备一个 `id`，`id` 不填，Cesium 则会调用某个方法生成一个 `GUID` 防止 `id` 重复，如果 `id` 重复了则会报错。这个是很严重的报错，会导致项目无法运行下去。

<img src="/image/cesium/entity/iderror.png" />

我们可以采用以下代码来监听集合中 `Entity` 的变动

```js
/**
 * 监听场景中的 Entity 变动
 * @param {Array} collection 当前 EntityCollection
 * @param {Array} added 添加的 Entity 数组
 * @param {Array} removed 移除的 Entity 数组
 * @param {Array} changed 改变的 Entity 数组
 */
function onChanged(collection, added, removed, changed) {
  console.log(collection._entities.values); // 当前的集合 Entity 个数
  console.log(added);
  console.log(removed);
  console.log(changed);
}
viewer.entities.collectionChanged.addEventListener(onChanged);
```

本章关于 `Entity API` 的相关内容已经介绍完毕。
