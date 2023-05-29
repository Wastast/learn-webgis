# WMS

WMS 是指 OGC 的 Web 地图服务规范（Web Map Service），是一种动态地图服务，用户可以通过在请求 url 中携带所需参数(符合规范的)，根据用户请求返回对应地图数据的可视化结果，实时切片，因此速度较慢，是常用的一种地图服务。

WMS 定义了一个规范的 HTTP 接口，直接标准的 HTTP 协议 的 GET 和 POST 的请求，但大多都是 GET 请求。能够根据用户的请求参数，返回相应的地图（包括 PNG，GIF，JPEG 等栅格形式或者是 SVG 和 WEB CGM 等矢量形式）。

GeoServer 支持 WMS 1.1.1 和 1.3.0。

> WMS 最广泛使用的版本 是 1.1.1

## 请求类型

### GetCapabilities

返回服务级元数据，它是对服务信息内容和要求参数的一种描述

> 以一个 xml 文档形式返回服务级元数据：WMS 的参数（图片格式、WMS 版本兼容性）；图层（包围盒大小、坐标系统、数据位置以及是否透明）

| 参数                    | 描述                                                                  | 是否必须 |
| ----------------------- | --------------------------------------------------------------------- | -------- |
| VERSION                 | WMS 版本号（没有指定时，使用当前服务提供商提供的最高的 wms 版本服务） | 否       |
| SERVICE=WMS             | 当前的 WMS 服务（此项在 1.3.0 版本中必须要求，之前的版本可选）        | 是       |
| REQUEST=GetCapabilities | 请求名称                                                              | 是       |

```js 请求示例
// VERSION=1.3.0
// SERVICE=WMS
// REQUEST=GetCapabilities
http://www.someserver.com/wms?VERSION=1.3.0&SERVICE=WMS&REQUEST=GetCapabilities
```

### GetMap

返回一个地图影像，其地理空间参考和大小参数是明确定义了的

> 被地图引擎调用时，都是通过切片算法，调用该方法，返回该范围内的图片数据

| 参数                       | 描述                                         | 是否必须 |
| -------------------------- | -------------------------------------------- | -------- |
| VERSION=`<version>`        | WMS 版本号                                   | 是       |
| REQUEST=GetMap             | 当前请求的操作类型                           | 是       |
| LAYERS=`<layer_list>`      | 请求图层，多个图层间用逗号分隔               | 是       |
| STYLES=`<style_list>`      | 指定每个图层的渲染风格，多个图层间用逗号分隔 | 是       |
| CRS=`namespace:identifier` | 投影坐标系                                   | 是       |
| BBOX=`minx,miny,maxx,maxy` | 需要获取的包围盒坐标信息                     | 是       |
| WIDTH=`<width>`            | 图片宽度                                     | 是       |
| HEIGHT=`<height>`          | 图片高度                                     | 是       |
| FORMAT=`image/png`         | 图片格式                                     | 是       |
| TRANSPARENT=`<boolean>`    | 图片是否透明，默认为 false 不透明            | 否       |
| BGCOLOR=`<color_value>`    | 背景颜色 默认为 Oxffffff（白色）             | 否       |
| TIME=`<color_value>`       | 请求时间，主要用于元数据中包括时间维度       | 否       |
| ELEVATION=`<color_value>`  | 元数据包括高程纬度                           | 否       |

```js
http://www.someserver.com/wms?VERSION=1.3.0&REQUEST=GetMap&CRS=CRS:84&BBOX=-97.105,24.913,-78.794,36.358&WIDTH=256&HEIGHT=256&LAYERS=BUILTUPA_1M,COASTL_1M,POLBNDL_1M&STYLES=0XFF8080,0X101040,BLACK&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&EXCEPTIONS=INIMAGE
```

### GetFeatureInfo

获取 getMap 响应地图上某一点的特征数据信息

| 参数                        | 描述                                                    | 是否必须 |
| --------------------------- | ------------------------------------------------------- | -------- |
| VERSION=`<version>`         | WMS 版本号                                              | 是       |
| REQUEST=GetFeatureInfo      | 当前请求的操作类型                                      | 是       |
| QUERY_LAYERS=`<layer_list>` | 查询的图层信息，多个图层以逗号隔开                      | 是       |
| INFO_FORMAT=`text/html`     | 表示特征信息以何种形式返回                              | 是       |
| FEATURE_COUNT=`<number>`    | 表示每个层返回的最大特征信息数                          | 是       |
| `<I,X>`=`<number>`          | 指的是当前 getMap 返回图像 X 方向的像素值(笛卡尔坐标系) | 是       |
| `<J,Y>`=`<number>`          | 指的是当前 getMap 返回图像 Y 方向的像素值(笛卡尔坐标系) | 是       |

> 注意，在 WMS 1.3.0 版本中 可以使用 I 和 J ，在 1.1.1 版本中 只接受 X Y

```js
http://www.someserver.com/wms?request=GetFeatureInfo&VERSION=1.3.0&FORMAT=image/jpeg&BBOX=-4.0325,-2.9078,40.5189,41.6436&QUERY_LAYERS=Countries,Cities&INFO_FORMAT=text/htmlHEIGHT=256&WIDTH=256&STYLES=&I=290&J=246&
```
