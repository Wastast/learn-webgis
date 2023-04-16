---
lastUpdated: false
contributors: false
---

# 层叠上下文

通常情况下, `HTML` 页面可以被认为是二维的，因为文本、图像以及其他元素在页面上按顺序排列，而上下不重叠，但实际情况下并不是如此。

## 排列方式

`HTML` 页面的排列方式可以分为两种：`页面文档流` 和 `层叠上下文`。

### 页面文档流

页面文档流就是通常我们说的正常排列方式，它是二维的，所有的页面元素根据自身的特性（`block`、`inline`、`inlint-block`）进行排列。

非块级元素 (`inline`、`inline-block`) 会自动的从左到右进行排列。块级元素（`block`）从上到下进行排列。

<img src="/image/css/concept/stacking/normal-flow.png" />

### 脱离文档流

当使用了 `position` 中的 `absolute` 和 `fixed` 或者 `transform` 之类的 css 属性，会将当前元素浮起来，元素脱离普通文档流，不在使用普通文档流的方式进行排列。

而是独自排列，浮在文档流上面。

> 每个块级元素盒子内部都是一个普通文档流

<img src="/image/css/concept/stacking/normal-pos.png" />

## 层叠

当元素脱离文档流时 `HTML` 页面的排列产生了 `z` 轴，此时已经不是二维了是一个三维的排列顺序。是一个层叠的概念。

<img src="/image/css/concept/stacking/layers.png" />

此图就是当前页面的一个排列情况, 可以看到，在最底下有一个最基础的底版，适用于`页面文档流`排序。而浮在上面的元素，都是已经`脱离文档流`了，通过 `top`，`left`，`right`，`bottom`，`x`，`y` 等参数自行排列渲染。
