# 光源

在实际的生活中，我们一直生活的光的照射下，就跟拍照一样，物体表面的明暗效果是会受到光照的影响，既然 `three.js` 是模拟生活的三维场景，当然也会存在光照对物体的影响，本节来学习光源对物体的影响以及光源的类型

## 受光照的影响的材质

在学习光源之前，需要首先要了解下在 `three.js` 有哪几种材质是受光影响的。

<img src="/image/three/start/material.svg" />

`three.js` 包括但不限于以上几种材质，以上只是罗列了几种常用的材质。

之前我们使用的是 `MeshBasicMaterial`，它是一个不受光照影响的材质，本节我们使用 `MeshLambertMaterial` 来体验下光源的效果。

`MeshLambertMaterial`，漫反射网格材质，该材质也可以成为 `Lambert网格材质`，音译为兰伯特网格材质。

## 光源简介

在小节示例开始前，我们先来了解下在 `three.js` 中有哪几种光源，以及光源是如何照亮物体。

也是一样先看下 `three.js` 中常用的几种光源。

<img src="/image/three/start/light.svg" />

再看一下每个光源的照射方向，其中 `环境光(AmbientLight)` 有一些特殊，它是全局照射不吃角度

<img src="/image/three/start/lightAngle.png" />

## 示例

我们通过几个示例代码来了解以及使用光源，本节只介绍如何使用，更细节的使用方式将在以后的章节写出

<light-angle />
