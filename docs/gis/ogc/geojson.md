# GeoJSON

## 介绍

GeoJSON 是一种对地理数据结构进行编码的格式，常用于矢量数据。

GeoJSON 对象可以表示特征要素或者特征要素集合。一个特征要素中通常包含着一个几何对象和属性对象。

几何对象中支持以下几何类型。点(Point)、线(LineString)、面(Polygon)、多点(MultiPoint)、多线(MultiLineString)、多面(MultiPolygon)、综合几何(GeometryCollection)

属性对象则通常具备用于描述该特征要素的一些信息。例如 `name`，`description` 等。

## GeoJSON 对象

GeoJSON 总是由一个单独的对象组成。这个对象表示几何、特征要素、特征要素集合，通常一个 GeoJSON 文件，都是以特征要素集合来进行存储的。

```json
{
  "type": "FeatureCollection",
  "features": [
    // 特征要素集合
  ]
}
```

一个 GeoJSON 文件对象一般有以下 4 点要注意

1. GeoJSON 对象必须有一个名字为 `type` 的成员，这个成员的值一般表示该对象的类型。

2. `type` 的值必须是下面之一

- - FeatureCollection 特征要素集合
- - Feature 特征要素
- - Point 点
- - MultiPoint 多点
- - LineString 线段
- - MultiLineString 多线段
- - Polygon 面
- - MultiPolygon 多面
- - GeometryCollection 综合几何

3. GeoJSON 对象可能有一个可选的 `crs` 成员，它表示当前 GeoJSON 的坐标参考系，它的值必须是一个坐标参考系的对象。

4. GeoJSON 对象可能有一个 `bbox` 成员，他表示当前 GeoJSON 数据可显示的范围。

## Feature 特征要素对象

类型为 `Feature` 的 GeoJSON 对象是要素对象，`FeatureCollection` 特征要素集合的主体就是 `Feature` 要素对象。

1. 该特征要素的 `type` 必定为 `Feature`
2. 该特征要素必须要有一个名字为 `geometry` 的几何成员，这个几何成员的值定义了，该特征要素的几何形态。
3. 该特征要素可能会带有一个名字为 `properties` 的属性成员，可能会携带者着对该特征要素的描述
4. 该特征要素可能还会有一个 ID 字段，如果经常使用需要进行标识的话

### Geometry 几何对象

`几何对象(Geometry)`是一种 GeoJSON 对象，通常来讲不会单独使用，配合 `Feature` 特征要素对象一起使用居多。

1. 几何对象的 type 成员支持的值包含以下类型

- - Point 点
- - MultiPoint 多点
- - LineString 线段
- - MultiLineString 多线段
- - Polygon 面
- - MultiPolygon 多面
- - GeometryCollection 综合几何

2. 几何对象必定包含一个 `coordinates` 成员，`coordinates` 成员的值总是数组，但是值的具体类型由几何类型确定

> 几何对象单独使用的数据目前我没碰见过，都是在特征要素集合里配合特征要素使用

#### Point 点

对类型 "Point" 来说，`coordinates`成员必须是一个单独的 position。

```json
{
  "type": "Point",
  "coordinates": [100.0, 0.0]
}
```

#### MultiPoint 多点

对类型 "MultiPoint" 来说，`coordinates` 成员必须是 position 数组。

```json
{
  "type": "MultiPoint",
  "coordinates": [
    [100.0, 0.0],
    [101.0, 1.0]
  ]
}
```

#### LineString 线

对类型 "LineString" 来说，`coordinates` 成员必须是两个或者多个 position 的数组。

```json
{
  "type": "LineString",
  "coordinates": [
    [100.0, 0.0],
    [101.0, 1.0]
  ]
}
```

#### MultiLineString

对类型 “MultiLineString" 来说，`coordinates` 成员必须是一个线坐标数组的数组。

```json
{
  "type": "MultiLineString",
  "coordinates": [
    [
      [100.0, 0.0],
      [101.0, 1.0]
    ],
    [
      [102.0, 2.0],
      [103.0, 3.0]
    ]
  ]
}
```

#### Polygon

对类型"Polygon"来说，`coordinates` 成员必须是一个线性环坐标数组的数组。

对拥有多个环的的面来说，第一个环必须是外部环，其他的必须是内部环或者孔，而且内部环和外部环的走向是相反的。

```json
// 没有孔的：
{
  "type": "Polygon",
  "coordinates": [
    [
      [100.0, 0.0],
      [101.0, 0.0],
      [101.0, 1.0],
      [100.0, 1.0],
      [100.0, 0.0]
    ]
  ]
}

// 有孔的（外环和内环的方向始终相反）

{
    "type": "Polygon",
    "coordinates": [
      [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
      [ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
    ]
}
```

#### MultiPolygon

对类型"MultiPlygon"来说，`coordinates` 成员必须是面坐标数组的数组。

```json
{
  "type": "Polygon",
  "coordinates": [
    [
      [100.0, 0.0],
      [101.0, 0.0],
      [101.0, 1.0],
      [100.0, 1.0],
      [100.0, 0.0]
    ],
    [
      [100.2, 0.2],
      [100.8, 0.2],
      [100.8, 0.8],
      [100.2, 0.8],
      [100.2, 0.2]
    ]
  ]
}
```

#### GeometryCollection

GeometryCollection 是几何集合，不是纯粹的单个特征要素，有点像 FeatureCollection 是一个特征要素集合。

几何集合必须有一个名字为 `geometries` 的成员。与 `geometries` 相对应的值是一个数组。这个数组中的每个元素都是一个 GeoJSON 几何对象。

```json
{
  "type": "GeometryCollection",
  "geometries": [
    {
      "type": "Point",
      "coordinates": [100.0, 0.0]
    },
    {
      "type": "LineString",
      "coordinates": [
        [101.0, 0.0],
        [102.0, 1.0]
      ]
    },
    {
      "type": "Polygon",
      "coordinates": [
        [
          [100.0, 0.0],
          [101.0, 0.0],
          [101.0, 1.0],
          [100.0, 1.0],
          [100.0, 0.0]
        ]
      ]
    }
  ]
}
```

### Properties 属性对象

`properties` 成员的内容是保存要素对象的其他属性信息，例如该要素对象的 name 信息等。

## crs 坐标参考系对象

GeoJSON 对象的坐标参考系统（CRS）是由它的"crs"成员来确定的。如果对象没有 crs 成员，那么它的父对象或者祖父对象的 crs 成员可能被获取作为它的 crs。如果这样还没有获得 crs 成员，那么默认的 CRS 将应用到 GeoJSON 对象。

1. 默认的 CRS 是地理坐标参考系统，使用的是 WGS84 数据，长度和高度的单位是十进制标示。

2. 名字为"crs"成员的值必须是 JSON 对象（指的是下面的 CRS 对象）或者 JSON 的 null。如果 CRS 的值为 null,那么就假设没有 CRS 了，也就是采用了默认的 CRS 坐标参考系统。

3. crs 成员应当位于（特征集合、特征、几何的顺序的）层级结构里 GeoJSON 对象的最顶级，而且在自对象或者孙子对象里不应该重复或者覆盖。

4. 非空的 CRS 对象有两个强制拥有的对象:“type"和"properties”。

5. type 成员的值必须是字符串，这个字符串说明了 CRS 对象的类型。

6. 属性成员的值必须是对象。

7. CRS 不能更改坐标顺序，默认为 `[经度，纬度，高度]`

### 具体 crs

通过一个具体的 crs 名称，来限定当前 geojson 的坐标数据，通常来讲，由于 gis 数据的交换性，所以该方式使用较多。

```json
{
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": []
}
```

### 在线 crs

```json
{
  "type": "FeatureCollection",
  "crs": {
    "type": "link",
    "properties": {
      "href": "http://example.com/crs/42",
      "type": "proj4"
    }
  },
  "features": []
}
```

### 本地 crs

```json
{
  "type": "FeatureCollection",
  "crs": {
    "type": "link",
    "properties": {
      "href": "data.crs",
      "type": "ogcwkt"
    }
  },
  "features": [
    // 其他内容
  ]
}
```
