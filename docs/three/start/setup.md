# 起步

本章介绍，如何下载版本以及本地查看文档和示例

## 版本选择

`THREE.JS` 正在飞速的发展过程中，大致上每个月都会发布一个新的版本，主要就是增加新的功能，代码优化，废弃和更名 API。

不建议每次更新都采用新版本，这样容易会造成原有的代码产生 BUG 。在使用的过程中，发现新更新的版本有必须要使用的功能时，在进行更新，否则就使用当前时间段的最新版本即可。

[点击查看 THREE.js 历史版本](https://github.com/mrdoob/three.js/releases)

[点击查看 THREE.js 官网](https://threejs.org/docs/#manual/zh/introduction/Creating-a-scene)

## 下载及启动

将当前版本一直往下拉会看到一个 `Assets` 标签，下载第一个 `Source.zip` 即可。

<img src="/image/three/start/start-banben.jpg" />

下载完成，解压后就可以看到如下的文件目录。

<img src="/image/three/start/start-catalog.jpg" />

我们主要关注的就是 `docs` `examples` `src`，前两者是我们学习的过程中频繁使用和接触的。`src` 文件是进行源码修改和调试时使用的。

通过 `vscode` 的 `live-server` 直接启动即可查看。或者将其放置到后台服务器中，输入对应的地址也可以查看。
