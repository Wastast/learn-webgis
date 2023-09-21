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

<!-- `viewer.imageryLayers` -->

## 地形图层

图层
