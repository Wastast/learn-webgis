# Potree

Potree 是一种基于 WebGL 的点云数据可视化解决方案，是一套开源的系统，基于 Three.js，对点云数据进行了多尺度的管理，在数据传输和可视化上都做了优化。

目标是开发一个能够流式传输和渲染数十亿点得点云数据集查看器，而不需要先传输整个数据集或安装第三方软件。

下面介绍如何正常使用 `Potree`

## 1. 下载 Potree

[Potree](https://github.com/potree/potree) 进入 `Github` 官方库下载或克隆 `Potree`

下载完成后，会看到如下的一个文件目录结构

<img src="/image/potree/desc/file-desc.png" />

通过 `npm` 或者 `yarn` 等包管理工具安装模块包。安装完毕后执行 `yarn start` 命令。

:::tip
默认端口为 `1234`, `http://localhost:1234`
:::

## 2. 下载 PotreeDesktop

> 目前这个 C 端处理器 仅支持 window 。如果不是该系统则不适用此教程

[PotreeDesktop](https://github.com/potree/PotreeDesktop) 进入 `Github` 官方库下载或克隆 `PotreeDesktop`

下载后看到如下文件目录结构

<img src="/image/potree/desc/PotreeDesktop-file.png" />

双击 `PotreeDesktop.bat` 会运行一个程序, 成功后得到如下窗口

<img src="/image/potree/desc/PotreeDesktop.bat.png" />

这是一个 `Potree` 桌面端的一个应用，可以用以处理点云数据以及展现数据，采用 `Electron` 为核心进行构建。

## 3. PotreeDesktop 处理点云数据, Potree 展示

首先需要拥有一个点云数据，可以是 `.las` 也可以是 `.laz` 数据格式。

在此我提供了一份 简单的数据

链接：https://pan.baidu.com/s/1MYLKq0lgI5EZZ8MA9-ZnTg
提取码：qdvu

将下载完成的数据文件拖拽至刚才打开的 `PotreeDesktop` 桌面端程序

<img src="/image/potree/desc/PotreeDesktop-drop.png" />
<img src="/image/potree/desc/PotreeDesktop-end.png" />

将处理完毕的数据复制到 `Potree` 源码中的 `pointclouds` 目录中

<img src="/image/potree/desc/transform.png" />

接着在 `examples` 中创建 `test.html` 并输入以下代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no"
    />
    <title>Potree Viewer</title>

    <link rel="stylesheet" type="text/css" href="../build/potree/potree.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="../libs/jquery-ui/jquery-ui.min.css"
    />
    <link rel="stylesheet" type="text/css" href="../libs/openlayers3/ol.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="../libs/spectrum/spectrum.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../libs/jstree/themes/mixed/style.css"
    />
  </head>

  <body>
    <script src="../libs/jquery/jquery-3.1.1.min.js"></script>
    <script src="../libs/spectrum/spectrum.js"></script>
    <script src="../libs/jquery-ui/jquery-ui.min.js"></script>
    <script src="../libs/other/BinaryHeap.js"></script>
    <script src="../libs/tween/tween.min.js"></script>
    <script src="../libs/d3/d3.js"></script>
    <script src="../libs/proj4/proj4.js"></script>
    <script src="../libs/openlayers3/ol.js"></script>
    <script src="../libs/i18next/i18next.js"></script>
    <script src="../libs/jstree/jstree.js"></script>
    <script src="../build/potree/potree.js"></script>
    <script src="../libs/plasio/js/laslaz.js"></script>
    <script src="../libs/other/stats.js"></script>

    <div
      class="potree_container"
      style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px"
    >
      <div
        id="potree_render_area"
        style="
          background-image: url('../build/potree/resources/images/background.jpg');
        "
      ></div>
      <div id="potree_sidebar_container"></div>
    </div>

    <script type="module">
      import * as THREE from '../libs/three.js/build/three.module.js';

      window.viewer = new Potree.Viewer(
        document.getElementById('potree_render_area')
      );

      viewer.setEDLEnabled(true);
      viewer.setFOV(60);
      viewer.setPointBudget(5_000_000);
      viewer.loadSettingsFromURL();

      viewer.setDescription(
        `Point cloud courtesy of PG&E and <a href="https://opentopography.org/">Open Topography</a>.`
      );

      viewer.loadGUI().then(() => {
        viewer.setLanguage('en');
        viewer.toggleSidebar();
      });

      Potree.loadPointCloud(
        '../pointclouds/house_converted/cloud.js',
        'CA13',
        function (e) {
          viewer.scene.addPointCloud(e.pointcloud);
          e.pointcloud.position.z = 0;
          let material = e.pointcloud.material;
          material.size = 0.8;
          viewer.fitToScreen();
        }
      );
    </script>
  </body>
</html>
```
