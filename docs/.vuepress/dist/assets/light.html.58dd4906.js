import { _ as a, r as t, o as r, c, e as o, d as s } from './app.559f79f4.js';
const d = '/learn-webgis/image/three/start/material.svg',
  i = '/learn-webgis/image/three/start/light.svg',
  h = '/learn-webgis/image/three/start/lightAngle.png',
  n = {},
  l = s(
    '<h1 id="光源" tabindex="-1"><a class="header-anchor" href="#光源" aria-hidden="true">#</a> 光源</h1><p>在实际的生活中，我们一直生活的光的照射下，就跟拍照一样，物体表面的明暗效果是会受到光照的影响，既然 <code>three.js</code> 是模拟生活的三维场景，当然也会存在光照对物体的影响，本节来学习光源对物体的影响以及光源的类型</p><h2 id="受光照的影响的材质" tabindex="-1"><a class="header-anchor" href="#受光照的影响的材质" aria-hidden="true">#</a> 受光照的影响的材质</h2><p>在学习光源之前，需要首先要了解下在 <code>three.js</code> 有哪几种材质是受光影响的。</p><img src="' +
      d +
      '"><p><code>three.js</code> 包括但不限于以上几种材质，以上只是罗列了几种常用的材质。</p><p>之前我们使用的是 <code>MeshBasicMaterial</code>，它是一个不受光照影响的材质，本节我们使用 <code>MeshLambertMaterial</code> 来体验下光源的效果。</p><p><code>MeshLambertMaterial</code>，漫反射网格材质，该材质也可以成为 <code>Lambert网格材质</code>，音译为兰伯特网格材质。</p><h2 id="光源简介" tabindex="-1"><a class="header-anchor" href="#光源简介" aria-hidden="true">#</a> 光源简介</h2><p>在小节示例开始前，我们先来了解下在 <code>three.js</code> 中有哪几种光源，以及光源是如何照亮物体。</p><p>也是一样先看下 <code>three.js</code> 中常用的几种光源。</p><img src="' +
      i +
      '"><p>再看一下每个光源的照射方向，其中 <code>环境光(AmbientLight)</code> 有一些特殊，它是全局照射不吃角度</p><img src="' +
      h +
      '"><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>我们通过几个示例代码来了解以及使用光源，本节只介绍如何使用，更细节的使用方式将在以后的章节写出</p>',
    16
  );
function p(_, g) {
  const e = t('light-angle');
  return r(), c('div', null, [l, o(e)]);
}
const b = a(n, [
  ['render', p],
  ['__file', 'light.html.vue']
]);
export { b as default };
