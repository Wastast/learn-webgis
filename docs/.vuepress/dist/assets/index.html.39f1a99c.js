import { _ as e, o as t, c as i, f as n, d as o } from './app.559f79f4.js';
const c = '/learn-webgis/image/cesium/entity/props.jpg',
  r = {},
  d = o(
    '<h1 id="entity-介绍" tabindex="-1"><a class="header-anchor" href="#entity-介绍" aria-hidden="true">#</a> Entity 介绍</h1><p>Cesium 中 Entity 实例是将多种形式的可视化图形聚合到单个高级对象中，它们可以手动创建并添加到 <code>Viewer.entities</code> 中。</p><p>我们可以借助 <code>Entity</code> 快速的绘制各种图形以及形状，比如 cylinder(圆柱)、polygon(多边形)、box(盒子)、polyline(折线) 等。</p><p>下面这张图片包含了 <code>Entity</code> 所有可绘制的图形以及 <code>Entity</code> 的可选属性。</p><img src="' +
      c +
      '">',
    5
  );
function a(s, p) {
  return t(), i('div', null, [d, n(' <EntityGeometry /> ')]);
}
const l = e(r, [
  ['render', a],
  ['__file', 'index.html.vue']
]);
export { l as default };
