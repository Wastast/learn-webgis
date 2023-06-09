import { _ as e, o as d, c as i, d as o } from './app.559f79f4.js';
const t = '/learn-webgis/image/webgis/module/3dtiles/zonglan.jpg',
  r = '/learn-webgis/image/webgis/module/3dtiles/tileset.png',
  c = '/learn-webgis/image/webgis/module/3dtiles/boundingVolume.png',
  s = '/learn-webgis/image/webgis/module/3dtiles/Additive.png',
  l = '/learn-webgis/image/webgis/module/3dtiles/children.png',
  a = {},
  n = o(
    '<h1 id="_3dtiles-格式介绍" tabindex="-1"><a class="header-anchor" href="#_3dtiles-格式介绍" aria-hidden="true">#</a> 3dTiles 格式介绍</h1><p><code>3D Tiles</code> 是 <code>Cesium</code> 在 2016 年 3 月定义的一种三维模型瓦片数据格式，目前已经是 <code>OGC</code> 标准之一，<code>3D Tiles</code> 将海量三维数据以分块分层的形式组织起来，大大减轻了浏览器和 GPU 的负担。</p><p><code>3D Tiles</code> 专门为流式传输和渲染 3D 地理数据而设计的，如倾斜摄影测量、BIM、点云、建筑数据等。特点有</p><ul><li><p>开放且灵活。3D Tiles 作为开放数据规范，其切片方案灵活可变，三维模型的切片大小和覆盖范围可以人为设置。此外，3D Tiles 还可以适配三维空间中多种空间分区方案，如四叉树、八叉树、KD 树等。</p></li><li><p>异质性支持。通过一组已定义的文件格式，将多种三维地理空间要素（倾斜摄影测量、BIM、点云、建筑数据、实例化要素等）转换为三维形式的单个数据集，同时有允许多种不同格式标准的模型显示在同一场景中。</p></li><li><p>专为三维可视化设计。3D Tiles 建立在 <code>gltf</code> 格式之上，并引入了三维图形学技术，以树状的层级细节模型（<code>HLOD</code>）进行组织，降低海量数据可视化过程中的浏览器负担，减少 <code>WebGL</code> 绘制请求的数量。</p></li><li><p>可交互。3D Tiles 支持交互旋转和样式的设置。如单击高亮，修改单个模型的材质，根据属性信息设置不同的显示效果等。</p></li></ul><h2 id="_3d-tiles-总览" tabindex="-1"><a class="header-anchor" href="#_3d-tiles-总览" aria-hidden="true">#</a> 3D Tiles 总览</h2><p>开头说过，三维 GIS 数据是多源异构的，常见的就有：倾斜摄影模型、点云模型、人工模型和 BIM 模型，每个数据都有自己的特点：</p><ul><li>倾斜摄影模型范围大，整体数据量也大</li><li>点云模型没有网格，都是稀疏的点</li><li>人工模型网格比较系数，可纹理特别多</li><li>BIM 模型范围小，但是对象特别多</li></ul><p>如果希望三维引擎能够承载这些特点鲜明的数据，最好能够将他们转化为一种统一的三维格式，而 <code>Cesium</code> 提出的解决方案就是 3D Tiles。</p><img src="' +
      t +
      '"><p>我们先来看一下 <code>3D Tiles</code> 这个名字。 <code>3D</code> 就是三维的意思，<code>Tiles</code> 就是瓦片集。</p><p>在二维地图中，瓦片是一张张图像组成的，比如 jpg，png 等等。而在三维中 3D Tiles 中的瓦片也是由一个个文件组成的，不同的是，在 3D Tiles 中的瓦片并不是图像，而是具体的三维数据。</p><p>3D Tiles 中的瓦片文件分四种。而且都有相对应的名称以及应用场景</p><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>Batched3D Model(b3dm)</td><td>适用所有三维模型，包括倾斜摄影、人工和 BIM</td></tr><tr><td>Instanced3D Model(i3dm)</td><td>实例化三维模型</td></tr><tr><td>Point Cloud (pnts)</td><td>点云</td></tr><tr><td>Composite(cmpt)</td><td>将上述三种文件合并成一个文件，优化传输</td></tr></tbody></table><p>这四种瓦片文件中只包含几何和属性数据，但对于数据量比较大的三维数据，比如倾斜摄影，我们还需要数据对应的索引，才能在渲染过程中根据视点实时调度可见的数据进行渲染。在 3D Tiles 中这个索引是一个叫 tileset.json 的文件。</p><h2 id="tileset-json-文件结构" tabindex="-1"><a class="header-anchor" href="#tileset-json-文件结构" aria-hidden="true">#</a> tileset.json 文件结构</h2><p>虽然 3D Tiles 有四种瓦片类型，但是其对应的 json 文件是一样的。下面来分析一下 tileset.json 的文件结构</p><img src="' +
      r +
      '"><h3 id="boundingvolume" tabindex="-1"><a class="header-anchor" href="#boundingvolume" aria-hidden="true">#</a> boundingVolume</h3><p>对应瓦片的空间范围，可以用包围盒、包围球、区域表达。 其中，包围盒和包围球对应的是三维坐标，在 Cesium 中就是 ECFF 坐标系; 而区域则可以通过经纬度和高度来定义一个曲面范围，比较适用瓦片跨度比较大的情况。</p><img src="' +
      c +
      '"><h3 id="geometricerror" tabindex="-1"><a class="header-anchor" href="#geometricerror" aria-hidden="true">#</a> geometricError</h3><p>控制每个瓦片的 LOD 显示范围，可类比 osg 中的 pixel size。一份三维数据中，从根节点瓦片到最下层的叶节点瓦片，其 <code>geometricError</code> 会逐渐减小至 0，即每个叶节点的 <code>geometricError</code> 都是 0 <code>geometricError</code> 越大，就可以在离模型越远的地方看到模型。当 <code>geometricError</code> 等于 0 时，只有离模型非常近的况下才能看到模型。</p><h3 id="refine" tabindex="-1"><a class="header-anchor" href="#refine" aria-hidden="true">#</a> refine</h3><p>瓦片的 LOD 策略。我们在浏览倾斜摄影的时候，先看到的是上层的粗糙数据，然后我们将镜头拉近可以发现粗糙层被更加精细的模型替代。这种 lod 策略叫做 <code>Replacement</code>，即两种不同精细度的模型之间是不兼容的，同时只能看到一种。</p><p><code>Cesium</code> 在 <code>Replacement</code> 的基础上提出了 <code>Additive</code>，就是镜头拉近之后，之前显示的模型并没有消失，而是和现在新加载的模型共存，这种策略最适合 BIM 场景。</p><blockquote><p>refine 属性具备两个参数 <code>REPLACE</code> 和 <code>ADD</code></p></blockquote><p>比如有一个场景，在天空中远远地看着一栋建筑，这时候只能看清屋顶和墙壁，也就是建筑物的大致轮廓结构。随着距离的拉近，我们开始看到墙上的门窗、阳台等细节，但这时候墙壁和屋顶也仍然存在。</p><p><code>Additive</code> 这种策略就是为了这种应用场景而设计的：离的远的时候,能看到很多建筑，但是每栋楼只显示屋顶和墙壁等轮廓结构；镜头拉近后视野变小，这时候就将事业中建筑物的细节展示出来.通过这种方式，即使不对模型做简化，也可以实现在有限内存情况下，对较大数据量 BIM 模型的流畅渲染。</p><img src="' +
      s +
      '"><h3 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> content</h3><p>瓦片的范围和瓦片文件的 uri。引擎可以根据 uri 找到具体的瓦片文件，然后提交给的渲染管线进行渲染。</p><h3 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3><p>瓦片的子节点,其类型也是 tile。正是通过这种层层嵌套的结构，才构建起来 <code>HLOD(分层LOD)</code> 的树形结构，以加速渲染引擎在渲染过程中的视锥裁剪。</p><img src="' +
      l +
      '">',
    34
  ),
  p = [n];
function h(m, g) {
  return d(), i('div', null, p);
}
const _ = e(a, [
  ['render', h],
  ['__file', '3dtiles.html.vue']
]);
export { _ as default };
