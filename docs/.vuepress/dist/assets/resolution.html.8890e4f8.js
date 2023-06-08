import { _ as e, o as i, c as a, d as s } from './app.559f79f4.js';
const r = '/learn-webgis/image/webgis/gis/pix.png',
  t = '/learn-webgis/image/webgis/gis/gis-looktif.png',
  o = '/learn-webgis/image/webgis/gis/gis-image.png',
  n = '/learn-webgis/image/webgis/gis/gis-source.png',
  c = '/learn-webgis/image/webgis/gis/gis-xy84.png',
  p = '/learn-webgis/image/webgis/gis/gis-toolbox-btn.png',
  g = '/learn-webgis/image/webgis/gis/gis-toolbox.png',
  d = '/learn-webgis/image/webgis/gis/tis-touyingpop.png',
  h = '/learn-webgis/image/webgis/gis/gis-projectras-value.png',
  m = {},
  l = s(
    '<h1 id="比例尺和分辨率" tabindex="-1"><a class="header-anchor" href="#比例尺和分辨率" aria-hidden="true">#</a> 比例尺和分辨率</h1><h2 id="比例尺" tabindex="-1"><a class="header-anchor" href="#比例尺" aria-hidden="true">#</a> 比例尺</h2><p>比例尺是表示图上距离与实地距离缩小或扩大的程度。</p><p>比例尺是人为了把地理上的信息放到图纸上而定义的缩放值，因为人们用肉眼在图上能分辨的最小距离为 0.1mm，因此地图上 0.1mm 所代表的实地水平距离成为比例尺精度。</p><p>一般矢量数据和栅格数据都会使用到比例尺进行描述。</p><p>计算公式 比例尺 = 图上距离 ： 实地距离</p><h2 id="分辨率" tabindex="-1"><a class="header-anchor" href="#分辨率" aria-hidden="true">#</a> 分辨率</h2><p>地图分辨率又称地面分辨率或空间分辨率。分辨率一般用来描述栅格数据的精度。如果想要了解分辨率，必须先了解栅格中像元的概念。</p><h3 id="像元" tabindex="-1"><a class="header-anchor" href="#像元" aria-hidden="true">#</a> 像元</h3><p>像元又称像素，每一张栅格图片都是由按行和列组织的像元矩阵组成，每一个像元都是等高等宽的正方形。</p><img src="' +
      r +
      '"><p>如果一个像元的覆盖面积是 5 x 5 米，则分辨率为 5 米。</p><h2 id="例子-计算-tif-的分辨率和比例尺" tabindex="-1"><a class="header-anchor" href="#例子-计算-tif-的分辨率和比例尺" aria-hidden="true">#</a> 例子：计算 tif 的分辨率和比例尺</h2><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><p>需要 ArcGis 工具以及一张 tif 数据。</p><blockquote><p>没有数据自行获取</p></blockquote><h3 id="在-arcgis-中展示数据" tabindex="-1"><a class="header-anchor" href="#在-arcgis-中展示数据" aria-hidden="true">#</a> 在 ArcGis 中展示数据</h3><p>打开 ArgGis 将 tif 数据拖入，会出现如下图一样的提示，点击确定即可。</p><img src="' +
      t +
      '"><p>等待相关文件构建完毕后会展示出图形。</p><img src="' +
      o +
      '"><p>右键点击图层，查看图层相关源数据，查看像元大小。</p><img src="' +
      n +
      '"><p>这时候会发现为什么像元大小为什么这么小，是不是操作的有问题。</p><p>其实是没有问题的，只是坐标系的问题，这些数据默认为地理坐标系数据，也就是经纬度展现形式，</p><img src="' +
      c +
      '"><p>在这个条件下，像元大小都会变得很小，我们需要将其坐标系做转换。</p><h3 id="tif-图像投影转换" tabindex="-1"><a class="header-anchor" href="#tif-图像投影转换" aria-hidden="true">#</a> tif 图像投影转换</h3><p>打开 ArcToolbox, 找到对应的功能块</p><img src="' +
      p +
      '"><img src="' +
      g +
      '"><p>确认需要转换的 tif 以及填写对应的坐标系。<code>WGS_1984_UTM-Zone-46N</code>，点击确定即可。</p><img src="' +
      d +
      '"><p>转换后会自动打开该 tif，如未自动打开，则去输出文件夹自行打开查看。</p><p>再次进行属性查看，就可以看到像元大小已经变了，此时单位是 m</p><img src="' +
      h +
      '"><h3 id="得出分辨率并计算比例尺" tabindex="-1"><a class="header-anchor" href="#得出分辨率并计算比例尺" aria-hidden="true">#</a> 得出分辨率并计算比例尺</h3><p>根据上图来看，单位是 <code>m</code> 数据为 <code>0.50792915</code>。</p><p>分辨率是 <code>0.50792915(m) * 100 ≈ 5.079(cm)</code>，也就是 5 公分(厘米) 的分辨率精度。</p>',
    39
  ),
  _ = [l];
function b(f, u) {
  return i(), a('div', null, _);
}
const x = e(m, [
  ['render', b],
  ['__file', 'resolution.html.vue']
]);
export { x as default };
