## 自定义天空盒

要想场景好看，必定绕不过 `Skybox(天空盒)`，此处不解释天空盒的概念。

`Potree` 提供了一个默认的天空盒

<img src="/image/potree/skybox/default.png" />

需要使用代码主动调用，或者页面中进行操作，以下两种方式都可以调出 `Potree` 的默认天空盒。

<img src="/image/potree/skybox/setBox.png" />

在项目应用过程中，默认天空盒难以应对多变的需求，所以我们要通过以下步骤替换默认的天空盒，来添加上自定义的天空盒

### 准备天空盒图片

首先要准备一个如下的文件夹，且具备 `nx`，`ny`，`nz`，`px`，`py`，`pz` 等图片

> 图片名称是定死的，如果缺少或者名称不对会报错

<img src="/image/potree/skybox/skyboxval.png" />

### 加载天空盒

在代码中添加以下代码

```js
// 替换场景
viewer.setBackground('skybox');

// 加载天空盒
let Skybox = Potree.Utils.loadSkybox('../skybox/'); // 天空盒的文件夹路径
viewer.skybox = Skybox;
```

<img src="/image/potree/skybox/custom-skybox.png" />

这时刷新页面就看到已经替换成功了。

但是事情并没有这么简单。

如果场景替换在前，而加载天空盒在后，则没有什么问题。

但如果是加载天空盒在前，而替换场景在后，也就是如下代码顺序

```js
// 加载天空盒
let Skybox = Potree.Utils.loadSkybox('../skybox/'); // 天空盒的文件夹路径
viewer.skybox = Skybox;

// 替换场景
viewer.setBackground('skybox');
```

则发现自定义天空盒失效了，还是 `Potree` 的默认天空盒

<img src="/image/potree/skybox/default.png" />

### 解决加载顺序导致自定义失效问题

这个问题，本质是源码问题

我们快速定位至 `src/viewer/viewer.js`

<img src="/image/potree/skybox/viewerjs.png" />

搜索 `setBackground` 函数，则会看到以下代码

```js
setBackground(bg) {
  if (this.background === bg) {
    return;
  }

  if (bg === 'skybox') {
    this.skybox = Utils.loadSkybox(
      new URL(Potree.resourcePath + '/textures/skybox2/').href
    );
  }

  this.background = bg;
  this.dispatchEvent({ type: 'background_changed', viewer: this });
}
```

一旦设置为 `skybox` 则就将天空盒场景替换为默认的，所以导致我们先前的设置失效。

将代码改动至如下

```js
setBackground(bg) {
  if (this.background === bg) {
    return;
  }

  if (bg === 'skybox' && !this.skybox) {
    this.skybox = Utils.loadSkybox(
      new URL(Potree.resourcePath + '/textures/skybox2/').href
    );
  }

  this.background = bg;
  this.dispatchEvent({ type: 'background_changed', viewer: this });
}
```

此时，场景替换也就不会将我们先前加载的天空盒给替换了
