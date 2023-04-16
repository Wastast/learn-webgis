# 快速上手

本章介绍如何调试 Cesium 源码以及查看本地示例和文档

## 下载以及安装 Cesium 源码

[Cesium Github](https://github.com/CesiumGS/cesium) 登录 Github 下载或克隆库

<img src="/image/cesium/setup/cesiumgithub.jpg" />

> 此文章对应的版本是 1.95。版本之间除应用功能会有些区别，具体启动方法没有区别，可放心下载别的版本

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

```js
const cesiumAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTdmZGExYi03NDg3LTRlYjMtOTNlNS1lN2Y2YjRhY2RmZmUiLCJpZCI6OTkwOTQsImlhdCI6MTY1NjI5NzY3Nn0.iJxZxodXPrQ28iXEw1_mLsCIummsV87-OLPChOoZgdo';

Cesium.Ion.defaultAccessToken = cesiumAccessToken;
```

<img src="/image/cesium/setup/ce-glbal.jpg" />

至此，我们的开发环境快速搭建已经完成
