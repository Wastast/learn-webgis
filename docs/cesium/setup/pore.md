# Primitive 与 Entity

Cesium 为开发者提供了丰富的图形绘制和空间数据管理 API，可以分为两类，一类是面向图形开发人员的低层次 API，通常被称为 `Primitive API`，另一类是用于驱动数据可视化的高层次 API，称为 `Entity API`。

总的来说，`Primitive` 偏底层，图形绘制和数据加载效率较高，而 `Entity API` 基于 `Primitive` 做了进一步封装，调用更加便捷。

## Primitive(图元)

`Primitive` 通常由两个部分组成

### Geometry

几何形状，定义了 Primitive 的结构，例如点、线、面、体等形状。

### Appearance

图形外观，可以是简单的材质，也可以是复杂的着色器代码。

> geometry 定义了结构和位置（顶点），appearance 定义了视觉特征。解耦 geometry 和 aappearance，允许我们混合和匹配使用。

<img src="/image/cesium/primitive/primitive-geometry.png" />

<!-- | 几何类型                      | 说明                                                           |
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
| WallOutlineGeometry           | 只有轮廓的墙                                                   | -->

## Entity(实体)

更高级别的数据驱动 API，它使用一致性设计的、高级别对象来管理一组相关性的可视化对象，其底层也是使用 `Primitive`。

多个类型的实体可以结合使用 (如 billboard + label)，但同一种实体不能存在多个（如多个 billboard 只能分别创建 entity 实例）。

| 实体类型               | 说明                                                           |
| ---------------------- | -------------------------------------------------------------- |
| BillboardGraphics      | 点、广告牌、图片标注                                           |
| LabelGraphics          | 点、文字标注                                                   |
| PointGraphics          | 点、填充颜色的圆                                               |
| CorridorGraphics       | 走廊：沿着地表的多段线，且具备一定的宽度，可以拉伸到一定的高度 |
| CylinderGraphics       | 圆柱、圆锥或者截断的圆锥                                       |
| EllipseGraphics        | 椭圆或者拉伸的椭圆                                             |
| EllipsoidGraphics      | 椭球体                                                         |
| RectangleGraphics      | 矩形或者正柱体                                                 |
| PlaneGraphics          | 平面                                                           |
| PolygonGraphics        | 多边形，可以具有空洞或者拉伸一定的高度                         |
| PathGraphics           | 多段线，可以具有一定的宽度                                     |
| PolylineVolumeGraphics | 多段线柱体                                                     |
| BoxGraphics            | 立方体                                                         |
| WallGraphics           | 墙                                                             |
| ModelGraphics          | gltf 3d 模型                                                   |

## 两者区别

`Entity` 用的是 Graphics，参数化创建图形，并可以参数符号化，几何形状和外观耦合在一起

`Primitive` 用的是 Geometry + Appearance，可以分别修改几何形状和外观。虽然有预定义的 Geometry，但是 `Primitive` APi 提供的是更接近 WebGL 的接口，构造 Geometry 完全可以使用于 WebGl 十分接近的逻辑，传入顶点、法线等素材创建难以想象的形状。

`Entity` 拥有 Property 进行时间插值，`Primitive` 没有时间插值，需要深入着色器。

`Entity` 在数据量特别的的情况下性能比 `Primitive` 差。
