import { _ as e, o as c, c as o, d } from './app.559f79f4.js';
const a = '/learn-webgis/image/css/concept/stacking/normal-flow.png',
  i = '/learn-webgis/image/css/concept/stacking/normal-pos.png',
  n = '/learn-webgis/image/css/concept/stacking/layers.png',
  t = {},
  s = d(
    '<h1 id="层叠上下文" tabindex="-1"><a class="header-anchor" href="#层叠上下文" aria-hidden="true">#</a> 层叠上下文</h1><p>通常情况下, <code>HTML</code> 页面可以被认为是二维的，因为文本、图像以及其他元素在页面上按顺序排列，而上下不重叠，但实际情况下并不是如此。</p><h2 id="排列方式" tabindex="-1"><a class="header-anchor" href="#排列方式" aria-hidden="true">#</a> 排列方式</h2><p><code>HTML</code> 页面的排列方式可以分为两种：<code>页面文档流</code> 和 <code>层叠上下文</code>。</p><h3 id="页面文档流" tabindex="-1"><a class="header-anchor" href="#页面文档流" aria-hidden="true">#</a> 页面文档流</h3><p>页面文档流就是通常我们说的正常排列方式，它是二维的，所有的页面元素根据自身的特性（<code>block</code>、<code>inline</code>、<code>inlint-block</code>）进行排列。</p><p>非块级元素 (<code>inline</code>、<code>inline-block</code>) 会自动的从左到右进行排列。块级元素（<code>block</code>）从上到下进行排列。</p><img src="' +
      a +
      '"><h3 id="脱离文档流" tabindex="-1"><a class="header-anchor" href="#脱离文档流" aria-hidden="true">#</a> 脱离文档流</h3><p>当使用了 <code>position</code> 中的 <code>absolute</code> 和 <code>fixed</code> 或者 <code>transform</code> 之类的 css 属性，会将当前元素浮起来，元素脱离普通文档流，不在使用普通文档流的方式进行排列。</p><p>而是独自排列，浮在文档流上面。</p><blockquote><p>每个块级元素盒子内部都是一个普通文档流</p></blockquote><img src="' +
      i +
      '"><h2 id="层叠" tabindex="-1"><a class="header-anchor" href="#层叠" aria-hidden="true">#</a> 层叠</h2><p>当元素脱离文档流时 <code>HTML</code> 页面的排列产生了 <code>z</code> 轴，此时已经不是二维了是一个三维的排列顺序。是一个层叠的概念。</p><img src="' +
      n +
      '"><p>此图就是当前页面的一个排列情况, 可以看到，在最底下有一个最基础的底版，适用于<code>页面文档流</code>排序。而浮在上面的元素，都是已经<code>脱离文档流</code>了，通过 <code>top</code>，<code>left</code>，<code>right</code>，<code>bottom</code>，<code>x</code>，<code>y</code> 等参数自行排列渲染。</p>',
    17
  ),
  r = [s];
function h(p, l) {
  return c(), o('div', null, r);
}
const m = e(t, [
  ['render', h],
  ['__file', 'stacking.html.vue']
]);
export { m as default };
