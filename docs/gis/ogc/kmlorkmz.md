# KML 文件解析

## KML 概述

KML 全称 `Keyhole Markup Language`，是基于 XML 语法标准的一种标记语言(基于 XML 语法)，采用标记结构，含有嵌套的元素和属性，并定义了一些 TAG 用来规定地理数据的显示方式，描述和存储地理信息数据（点、线、面、图片等）。

KML 在 2008 年 4 月 14 日被 OGC(开放地理信息协会) 宣布为开放地理信息编码标准，而 GooGle 同时也宣布不再控制 KML 标准，而移交给 OGC 去维护发展，被采纳的 KML 版本为 2.2 [OGC KMl](https://www.ogc.org/standard/kml/)。

KML 主要用于地理数据的可视化，详细的用途如下：

- 指定地点的图标和注记
- 为每一个地理特征创建不同的视角位置
- 在地球上叠放图像
- 指定地理特征显示的样式
- 编写地理特征的 HTML 的描述，包括超链接和内嵌图像
- 使用文件夹对地理特征进行群组
- KML 文件的动态获取及修改
- 显示三维地物

> XML：全称 eXtensible Markup Language, 可扩展标记语言

## KML 代码解析

```xml
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://earth.google.com/kml/2.1">
  <Placemark>
    <name>Simple placemark</name>
    <description>
      Attached to the ground. Intelligently places itself at the height of the underlying terrain.
    </description>
    <Point>
      <coordinates>-122.0822035425683,37.42228990140251,0</coordinates>
    </Point>
  </Placemark>
</kml>
```

以上是一个比较常见的 KML 代码，它包括以下几个部分

- XML 头：`<?xml version="1.0" encoding="UTF-8"?>` 因为 KML 是基于 XML 语言的，所以会携带该头部
- KML 空间：`<kml xmlns="http://earth.google.com/kml/2.1">...</kml>` kml 主体，包含了需要显示的地理，`xmlns` 代表了当前 kml 的版本
- 特征 tag：`Placemark`，`description`，`Point` 之类都属于 kml 的自定义 tag，用这些 tag 可以详细的描述地理信息，以及借助某些工具显示地理数据

## KML 和 KMZ 文件

KMZ 文件是压缩过的 KML 文件。也是 Google 提出来以及应用的一种格式，一个 KMZ 文件，由一个主 KML 文件和 0 至多个支持文件组成，并使用 ZIP 压缩格式打包压成一个文件(称之为归档)。

KMZ 一般应用于单一个 KML 文件携带的地理数据太多，涉及图片，ICON 之类，就可以采用 KMZ 进行合并归档。

> Google Earth 和 Google Maps 能够直接读取 KML 和 KMZ 文件

## js 在线解析 KML 和 KMZ 文件

### KML 文件

```js
import toGeoJSON from '@mapbox/togeojson';
fetch(url, {
  mode: 'cors'
})
  .then((res) => res.blob())
  .then((res) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      // 将文本解析成 xml 格式
      const xml = new DOMParser().parseFromString(e.target.result, 'text/xml');
      // 利用 @mapbox/togeojson 库 解析 xml 文件变成 geojson 格式
      const geojson = toGeoJSON.kml(xml);
    };
    reader.readAsText(res); // 将二进制数据解析成文本数据
  })
  .catch((e) => {
    console.log(e);
  });
```

### KMZ 文件

```js
import JSZip from 'jszip';
import toGeoJSON from '@mapbox/togeojson';

fetch(url, {
  mode: 'cors'
})
  .then((res) => res.arrayBuffer())
  .then((res) => {
    var new_zip = new JSZip();
    new_zip.loadAsync(res).then((zip) => {
      zip
        .file('wpmz/template.kml') // 在 KMZ 中的文件名称
        .async('text') // 将其转换为 text 文本格式
        .then((text) => {
          // 将文本解析成 xml 格式
          const xml = new DOMParser().parseFromString(text, 'text/xml');
          // 利用 @mapbox/togeojson 库 解析 xml 文件变成 geojson 格式
          const geojson = toGeoJSON.kml(xml);
        });
    });
  })
  .catch((e) => {
    console.log(e);
  });
```
