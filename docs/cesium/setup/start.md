# 快速上手

本章介绍如何调试 Cesium 源码以及查看本地示例和文档

## 下载以及安装 Cesium 源码

[Cesium Github](https://github.com/CesiumGS/cesium) 登录 Github 下载或克隆库

<img src="/image/cesium/setup/cesiumgithub.jpg" />

通过 `yarn` `npm install` `pnpm install` 等相关包管理工具的命令，下载相关模块包

## 启动源码库查看示例以及文档

先执行一次 `yarn release` 构建命令，构建出开发环境需要用到的库以及文档。

再次执行 `yarn build`，最后执行 `yarn start` 就可以看到开发环境已经成功运行。

打开页面，输入链接 `http://localhost:8080/` 即可查看运行页面。

<img src="/image/cesium/setup/cesium-server.jpg" />

点击 `Sandcastle` 即可查看到，Cesium 相关的所有 Demo 示例

<img src="/image/cesium/setup/ce-sandcastle.jpg" />

`yarn build` 具体是干嘛的，这时候解释下，主要是为了在 Demo 示例中开启下面的 `Development` 那一栏

<img src="/image/cesium/setup/yarn-build.jpg" />

这时候会有个问题，Cesium 的地球出不来，因为有个权限我们漏了加，需要给所有的 Demo 示例统一添加。

> 在 v1.100 版本以后似乎不需要默认添加了

```js
const cesiumAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTdmZGExYi03NDg3LTRlYjMtOTNlNS1lN2Y2YjRhY2RmZmUiLCJpZCI6OTkwOTQsImlhdCI6MTY1NjI5NzY3Nn0.iJxZxodXPrQ28iXEw1_mLsCIummsV87-OLPChOoZgdo';

Cesium.Ion.defaultAccessToken = cesiumAccessToken;
```

<img src="/image/cesium/setup/ce-glbal.jpg" />

至此，我们的开发环境快速搭建已经完成

## 如何本地调试源码

当前我的版本库为 v1.106。从 1.100 版本开始，CesiumJS 将与两个较小的包 `@cesium/engine` 和 `@cesium/widgets` 一起发布，所以本调试方法限于 v1.100 版本以后，之前的没试过。

### 启用命令 build-watch

使用 `yarn`、`npm`或者`pnpm`，执行 `build-watch` 命令，执行完毕后会在 `Build` 目录下产生一个 `CesiumUnminified` 的文件夹。

<img src="/image/cesium/setup/build-watch.png" />

接着我们在 `Build` 的同级目录中创建一个 `example` 的文件夹，并在 `example` 创建一个 `index.html` 文件，如图下所示。

<img src="/image/cesium/setup/example.png" />

最后我们在 `index.html` 中初始化 html 文本，并引入 `Build/CesiumUnminified` 下辖的 `Cesium.js` 和 `widgets.css`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="../Build/CesiumUnminified/Widgets/widgets.css"
    />
    <script src="../Build/CesiumUnminified/Cesium.js"></script>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      #cesiumContainer {
        width: 100vw;
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div class="cesiumContainer" id="cesiumContainer"></div>
    <script>
      const viewer = new Cesium.Viewer('cesiumContainer', {});
    </script>
  </body>
</html>
```

并再 `example` 文件夹中启动 `vscode` 的 `Live Server`，这样就可以运行了 html 文件了。

<img src="/image/cesium/setup/liveserve.webp" />

1. `Geocoder`：地理位置查询定位控件，默认使用 bing 地图服务
2. `HomeButton`：默认的相机位置。`Cesium.Camera.DEFAULT_VIEW_RECTANGLE` 可调整该参数用于重新设置默认相机位置
3. `SceneModePicker`：3D、2D、哥伦布地图渲染模式的切换按钮
4. `BaseLayerPicker`：选择地形、影响等图层
5. `NavigationHelpButton`：显示默认的相机控制提示
6. `Animation`：控制场景的动画播放速度
7. `CreditsDisplay`：展示数据的版权树形
8. `Timeline`：时间滚动条
9. `FullscreenButton`：全屏切换

我们尝试下修改源码，并打印 `测试成功` 的文字。

<img src="/image/cesium/setup/try.png" />

可以看到文字是可以被打印出来的，我也尝试过直接 `debugger` 也是可以正常进入的。

至此，就可以开启我们伟大的 Cesium 开发生涯了`(开始折磨)`。

## Cesium.Ion 是什么

在正常使用 `Cesium` 时，在开头我们都需要去设置一个叫 `Cesium.Ion.defaultAccessToken` 的参数，那么这个参数是什么意思？为什么要默认去设置它。

所有的 Web 程序都需要有一个默认的服务器去托管资源，CesiumJS 也不例外，尤其是 Cesium 还是一个集大成者。

而 `Cesium.Ion` 就是扮演这么一个资源服务器的角色，`Cesium` 将其一些世界地形、默认卫星图层等 GIS 资源，存放在该服务器中，需要用到 `Cesium.Ion.defaultAccessToken` 去判断当前使用者能否访问这些地图资源。

### 一定要使用 Cesium.Ion 去发布资源吗

当然不是的，我们可以自定义服务器去存放 GIS 资源，只是需要能够正常访问到而已。

下面这张图很好的诠释了 `Cesium.Ion`、`Cesium Lab` 和 `CesiumJS` 之间的关系。

前两者是数据的提供商，后者是数据的使用者。

我们也可以添加第三方服务器作为数据的提供商，以替代前两者。

<img src="/image/cesium/setup/ion.webp" />

### Cesium.Ion 的授权码如何申请

#### 登录 Cesium.Ion 平台

首先要去 `Cesium.Ion` 的[登录页](https://ion.cesium.com/signin?errorcode=A6RZ)，申请账户以及登录账户。

#### 查看 AccessToken

<img src="/image/cesium/setup/ion_apply.png" />

以上就是我们整个 `Cesium.Ion` token 如何获取的流程。下面则开始了解 `Cesium` 中某些相关的概念

> 记得要科学上网
