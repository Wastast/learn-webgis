# 根据矢量轮廓裁剪 tif

本文介绍一个 QGIS 里的功能，按掩膜图层裁剪栅格，可以根据现有的矢量轮廓裁剪 tif。

首先需要准备数据，一个 TIF 格式的图片，一个矢量数据的区域轮廓。

## 添加 TIF 数据

<img src="/image/qgis/cuttif-1.jpg" />

<img src="/image/qgis/cuttif-2.png" />

## 添加矢量数据

不局限于 `.shp`

<img src="/image/qgis/cuttif-3.png" />

## 进行数据处理

打开工具箱搜索 `按掩膜图层裁剪栅格`，并运行。

> 注意！红框内数据为必选，否则会报错。

参数选择完毕后，点击运行即可。

<img src="/image/qgis/cuttif-4.png" />

最后就会得到跟是轮廓一样的 tif 图层，按需导出即可。

<img src="/image/qgis/cuttif-5.png" />
