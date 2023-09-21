# 影像与地形

本章将 `影像图层(ImageryProvider)` 和 `地形图层(terrainProvider)` 放一起讲。

## 影像图层

Cesium 支持多种服务来源的高精度影像数据的加载和渲染，图层支持排序和透明混合。每个图层的 `亮度(brightness)`、`对比度(contrast)`、`伽马矫正(gamma)`、`色调(hue)`、`饱和度(saturation)` 都可以动态修改。

当我们第一次初始化 Cesium 地球是，默认会具备一个的 Bing 服务卫星影像图层。

我们可以通过以下几种方式创建自己的影像图层来替代 Cesium 原有的影响图层。

- 知名 GIS 服务商

- - ArcGis: `Cesium.ArcGisMapServerImageryProvider`
- - BingMap: `Cesium.BingMapsImageryProvider`
- - Google: `Cesium.GoogleEarthEnterpriseImageryProvider`
- - Mapbox: `Cesium.MapboxStyleImageryProvider`
- - OSM: `Cesium.OpenStreetMapImageryProvider`
- - Ion: `Cesium.IonImageryProvider`

---

- 标准 OGC 服务
- - WMS: `Cesium.WebMapServiceImageryProvider`
- - WMTS: `Cesium.WebMapTileServiceImageryProvider`
- - TMS: `TileMapServiceImageryProvider`

---

- 自定义链接图层
- - XYZ: `Cesium.UrlTemplateImageryProvider`

---

- 单个图像图层
- - Image: `Cesium.SingleTileImageryProvider`

因为相关参数过多，本文不再赘述，有需求可查看 [API 文档](http://cesium.xin/cesium/cn/Documentation1.95/SingleTileImageryProvider.html?classFilter=ImageryProvider)

### ImageryLayerCollection 影像图层集合

`ImageryLayerCollection` 类是用于管理在 Cesium 场景中的图像图层，也就是上述所列的 `ImageryProvider`。

`ImageryLayerCollection` 具备以下几种基本的应用方法

- add: 将图层添加至集合中，并给定一个排序值
- addImageryProvider: 将 `imageryProvider` 添加至集合中，并给定一个排序值

`add` 和 `addImageryProvider` 之间的区别？

本文上述推荐的影像图层，都是基于 `ImageryProvider`，可以用 `addImageryProvider` 直接添加至集合中。而 `add` 方法是为了 `ImageryLayer` 而准备的，该类支持两个参数，一个是 `ImageryProvider`，一个是参数配置 具体情况请查看[API 文档](http://cesium.xin/cesium/cn/Documentation1.95/ImageryLayer.html)

一般情况下推荐采用 `ImageryLayer` 和 `add` 的组合使用。

我们将影像图层添加至地图时，往往会碰到一个问题，如何将图层上下级排序？

默认情况下，添加图层的排序是后添加的在新添加的上面，我们也可以通过给定排序值，自定义排序上下级。

`add` 和 `addImageryProvider` 均提供了第二个参数 `index`，用于给定图层排序的上下级，不填则默认添加到所有层之上。

我们还可以通过以下方法来更好的进行图层排序

- lower: 将图层降低一个位置
- lowerToBottom: 将图层降低到集合的底部
- raise: 将图层上升一个位置
- raiseToTop: 将图层上升到集合的顶部

## 地形图层

我们日常生活的地球是凹凸不平的，有山脉、平原、丘陵等等。

在以往的 WebGIS 引擎中，由于都是平面二维的，不好或者说是不能展示真实地球中凹凸不平的地形。

相对 2D 地图，这些地形特征更适宜在 3D 地球中展示，Cesium 支持渐进流式加载和渲染地形，并且可以包含海、湖、河等水面效果。

让我们快速的添加地形查看一下效果

```js
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain({
    requestWaterMask: true // 获取水面, 需要有对应的数据文件
  })
});
```

<img src="/image/cesium/terrain/check.png" />
<img src="/image/cesium/terrain/water.png" />

Cesium 默认有 `Cesium.createWorldTerrain` 可用于添加世界地形，这是一个 `Cesium.Ion` 的服务，需要默认的授权码才可使用。

我们再日常使用的过程中，并不一定会使用世界地形，大概率会用到局部地形。

Cesium 也提供了一个类 `Cesium.CesiumTerrainProvider` ，用于我们添加我们自己的地形数据。

```js
const Terrain = new Cesium.CesiumTerrainProvider({
  // 此链接不一定有效,只做演示
  url: 'https://assets.ion.cesium.com/ap-northeast-1/asset_depot/1/CesiumWorldTerrain/v1.2/'
});
viewer.terrainProvider = Terrain;
```

需要注意的是，地形图层不同于影像图层，整个场景中只能存在一个，不具备叠加能力。

至此，本章的内容已经结束。
