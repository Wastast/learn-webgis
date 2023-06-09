import { _ as t, o as r, c as i, f as d, d as e } from './app.559f79f4.js';
const o = '/learn-webgis/image/cesium/primitive/primitive-geometry.png',
  a = {},
  n = e(
    '<h1 id="primitive-与-entity" tabindex="-1"><a class="header-anchor" href="#primitive-与-entity" aria-hidden="true">#</a> Primitive 与 Entity</h1><p>Cesium 为开发者提供了丰富的图形绘制和空间数据管理 API，可以分为两类，一类是面向图形开发人员的低层次 API，通常被称为 <code>Primitive API</code>，另一类是用于驱动数据可视化的高层次 API，称为 <code>Entity API</code>。</p><p>总的来说，<code>Primitive</code> 偏底层，图形绘制和数据加载效率较高，而 <code>Entity API</code> 基于 <code>Primitive</code> 做了进一步封装，调用更加便捷。</p><h2 id="primitive-图元" tabindex="-1"><a class="header-anchor" href="#primitive-图元" aria-hidden="true">#</a> Primitive(图元)</h2><p><code>Primitive</code> 通常由两个部分组成</p><h3 id="geometry" tabindex="-1"><a class="header-anchor" href="#geometry" aria-hidden="true">#</a> Geometry</h3><p>几何形状，定义了 Primitive 的结构，例如点、线、面、体等形状。</p><h3 id="appearance" tabindex="-1"><a class="header-anchor" href="#appearance" aria-hidden="true">#</a> Appearance</h3><p>图形外观，可以是简单的材质，也可以是复杂的着色器代码。</p><blockquote><p>geometry 定义了结构和位置（顶点），appearance 定义了视觉特征。解耦 geometry 和 aappearance，允许我们混合和匹配使用。</p></blockquote><img src="' +
      o +
      '">',
    11
  ),
  c = e(
    '<h2 id="entity-实体" tabindex="-1"><a class="header-anchor" href="#entity-实体" aria-hidden="true">#</a> Entity(实体)</h2><p>更高级别的数据驱动 API，它使用一致性设计的、高级别对象来管理一组相关性的可视化对象，其底层也是使用 <code>Primitive</code>。</p><p>多个类型的实体可以结合使用 (如 billboard + label)，但同一种实体不能存在多个（如多个 billboard 只能分别创建 entity 实例）。</p><table><thead><tr><th>实体类型</th><th>说明</th></tr></thead><tbody><tr><td>BillboardGraphics</td><td>点、广告牌、图片标注</td></tr><tr><td>LabelGraphics</td><td>点、文字标注</td></tr><tr><td>PointGraphics</td><td>点、填充颜色的圆</td></tr><tr><td>CorridorGraphics</td><td>走廊：沿着地表的多段线，且具备一定的宽度，可以拉伸到一定的高度</td></tr><tr><td>CylinderGraphics</td><td>圆柱、圆锥或者截断的圆锥</td></tr><tr><td>EllipseGraphics</td><td>椭圆或者拉伸的椭圆</td></tr><tr><td>EllipsoidGraphics</td><td>椭球体</td></tr><tr><td>RectangleGraphics</td><td>矩形或者正柱体</td></tr><tr><td>PlaneGraphics</td><td>平面</td></tr><tr><td>PolygonGraphics</td><td>多边形，可以具有空洞或者拉伸一定的高度</td></tr><tr><td>PathGraphics</td><td>多段线，可以具有一定的宽度</td></tr><tr><td>PolylineVolumeGraphics</td><td>多段线柱体</td></tr><tr><td>BoxGraphics</td><td>立方体</td></tr><tr><td>WallGraphics</td><td>墙</td></tr><tr><td>ModelGraphics</td><td>gltf 3d 模型</td></tr></tbody></table><h2 id="两者区别" tabindex="-1"><a class="header-anchor" href="#两者区别" aria-hidden="true">#</a> 两者区别</h2><p><code>Entity</code> 用的是 Graphics，参数化创建图形，并可以参数符号化，几何形状和外观耦合在一起</p><p><code>Primitive</code> 用的是 Geometry + Appearance，可以分别修改几何形状和外观。虽然有预定义的 Geometry，但是 <code>Primitive</code> APi 提供的是更接近 WebGL 的接口，构造 Geometry 完全可以使用于 WebGl 十分接近的逻辑，传入顶点、法线等素材创建难以想象的形状。</p><p><code>Entity</code> 拥有 Property 进行时间插值，<code>Primitive</code> 没有时间插值，需要深入着色器。</p><p><code>Entity</code> 在数据量特别的的情况下性能比 <code>Primitive</code> 差。</p>',
    9
  );
function l(p, m) {
  return (
    r(),
    i('div', null, [
      n,
      d(` | 几何类型                      | 说明                                                           |
| ----------------------------- | -------------------------------------------------------------- |
| BoxGeometry                   | 立方体                                                         |
| BoxOutlineGeomertry           | 仅有轮廓的立方体                                               |
| CircleGeometry                | 圆形或者拉伸的圆形                                             |
| CircleOutlineGeometry         | 只有轮廓的图形                                                 |
| CorridorGeometry              | 走廊：沿着地表的多段线，且具有一定的宽度，可以拉伸到一定的高度 |
| CorridorOutLineGeometry       | 只有轮廓的走廊                                                 |
| CylinderGeometry              | 圆柱、圆锥或者截断的圆锥                                       |
| CylinderOutlineGeometry       | 只有轮廓的圆柱、圆锥或者截断的圆锥                             |
| EllipseGeometry               | 椭圆或者拉伸的椭圆                                             |
| EllipseOutlineGeometry        | 只有轮廓的椭圆或者拉伸的椭圆                                   |
| EllipsoidGeometry             | 椭球体                                                         |
| EllipsoidOutlineGeometry      | 只有轮廓的椭球体                                               |
| RectangleGeometry             | 矩形或者拉伸的矩形                                             |
| RectangleOutlineGeometry      | 只有的轮廓的矩形或者拉伸的矩形                                 |
| PolygonGeometry               | 多边形，可以具有空洞或者拉伸一定的高度                         |
| PolygonOutlineGeometry        | 只有轮廓的多边形                                               |
| PolylineGeometry              | 多段线，可以具有一定的高度                                     |
| SimplePolylineGeometry        | 简单的多段线                                                   |
| PolylineVolumeGeometry        | 多段线柱体                                                     |
| PolylineVolumeOutlineGeometry | 只有轮廓的多段线柱体                                           |
| SphereGeometry                | 球体                                                           |
| SphereOutlineGeometry         | 只有轮廓的球体                                                 |
| WallGeometry                  | 墙                                                             |
| WallOutlineGeometry           | 只有轮廓的墙                                                   | `),
      c
    ])
  );
}
const y = t(a, [
  ['render', l],
  ['__file', 'pore.html.vue']
]);
export { y as default };
