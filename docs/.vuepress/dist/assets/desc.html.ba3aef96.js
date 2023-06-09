import { _ as i, o as e, c as l, d as s } from './app.559f79f4.js';
const a = '/learn-webgis/image/cesium/setup/range.png',
  c = '/learn-webgis/image/cesium/setup/dingwei.png',
  r = {},
  t = s(
    '<h1 id="cesium" tabindex="-1"><a class="header-anchor" href="#cesium" aria-hidden="true">#</a> Cesium</h1><p>Cesium 是 AGI 公司计算机图形开发小组于 2011 年研发的三维地球和地图可视化开源 JavaScript 库，Cesium 一次来源于化学元素铯，铯是 制造原子钟的关键元素，研发小组通过命名强调 Cesium 产品精益求精，专注时间数据可视化。Cesium 为三维 GIS 提供了一个高效的数据可视化平台。</p><ul><li>Cesium 是一个跨平台、跨浏览器的展示三维地球和地图的 JavaScript 库</li><li>Cesium 使用 WebGL 来进行硬件加速图形，使用时不需要任何插件支持。</li><li>Cesium 是基于 Apache2.0 许可的开源程序，可以免费用于商业和非商业用途。</li></ul><h2 id="cesium-能做什么" tabindex="-1"><a class="header-anchor" href="#cesium-能做什么" aria-hidden="true">#</a> Cesium 能做什么</h2><img src="' +
      a +
      '"><p>Cesium 的知识体系横跨 GIS、Web 前端和图形学。</p><p>Cesium 可用于地理数据可视化。支持海量数据的高效渲染，支持时间序列动态数据的三维可视化，具备太阳、大气、云雾等地理环境要素的动态模拟和地形等要素的加载绘制。</p><p>Cesium 在项目中的定位:</p><img src="' +
      c +
      '"><p>主要的功能有:</p><ol><li>使用 3D Tiles 格式流式加载各种不同的 3d 数据，包含倾斜摄影模型、三维建筑物、CAD 和 BIM 的外部内部、点云数据。并支持样式配置和用户交互操作。</li><li>全球高精度地形数据可视化，支持地形夸张效果、以及可编程实现的等高线和坡度分析效果。</li><li>支持多种资源的图像图层，包括 WMS、TMS、WMTS 以及时序图像。图像支持透明度叠加、亮度、对比度、GAMMA、色调、饱和度都可以动态调整。支持图像的卷帘对比。</li><li>支持标准的矢量格式 KML、GeoJSON、TopJSON、以及矢量的贴地效果。</li><li>三维模型支持 gltf2.0 标准的 PRB 材质、动画、蒙皮和变形效果。贴地以及高亮效果。</li><li>使用 CZML 支持动态时序数据的展示。</li><li>支持各种几何体: 点、线、面、标注、公告牌、立方体、球体、椭圆体、走廊、管径、墙体。</li><li>可视化效果包括: 基于太阳位置的阴影、自身阴影、柔和阴影。</li><li>支持大气、雾、太阳、阳光、月亮、星星、水面。</li><li>粒子特效: 烟、火、火花。</li><li>地形、模型、3D Tiles 模型的面裁剪。</li><li>对象点选和地形点选。</li><li>支持鼠标和触摸操作的缩放、渲染、惯性平移、飞行、任意视角、地形碰撞检测。</li><li>支持 3D 地球、2D 地图、2.5D 哥伦布模式。3D 视图 可以使用透视和正视两种投影方式。</li></ol><h2 id="cesium-的依赖性" tabindex="-1"><a class="header-anchor" href="#cesium-的依赖性" aria-hidden="true">#</a> Cesium 的依赖性</h2><ul><li>基于 HTML5 标准，无插件，跨平台</li><li>无法独立运行，依赖于浏览器</li><li>浏览器需要能支持 WebGL 渲染的能力</li></ul>',
    13
  ),
  u = [t];
function m(n, d) {
  return e(), l('div', null, u);
}
const h = i(r, [
  ['render', m],
  ['__file', 'desc.html.vue']
]);
export { h as default };
