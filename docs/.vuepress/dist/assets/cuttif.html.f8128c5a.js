import { _ as e, o as i, c as t, d as a } from './app.559f79f4.js';
const c = '/learn-webgis/image/qgis/cuttif-1.jpg',
  s = '/learn-webgis/image/qgis/cuttif-2.png',
  r = '/learn-webgis/image/qgis/cuttif-3.png',
  n = '/learn-webgis/image/qgis/cuttif-4.png',
  o = '/learn-webgis/image/qgis/cuttif-5.png',
  d = {},
  h = a(
    '<h1 id="根据矢量轮廓裁剪-tif" tabindex="-1"><a class="header-anchor" href="#根据矢量轮廓裁剪-tif" aria-hidden="true">#</a> 根据矢量轮廓裁剪 tif</h1><p>本文介绍一个 QGIS 里的功能，按掩膜图层裁剪栅格，可以根据现有的矢量轮廓裁剪 tif。</p><p>首先需要准备数据，一个 TIF 格式的图片，一个矢量数据的区域轮廓。</p><h2 id="添加-tif-数据" tabindex="-1"><a class="header-anchor" href="#添加-tif-数据" aria-hidden="true">#</a> 添加 TIF 数据</h2><img src="' +
      c +
      '"><img src="' +
      s +
      '"><h2 id="添加矢量数据" tabindex="-1"><a class="header-anchor" href="#添加矢量数据" aria-hidden="true">#</a> 添加矢量数据</h2><p>不局限于 <code>.shp</code></p><img src="' +
      r +
      '"><h2 id="进行数据处理" tabindex="-1"><a class="header-anchor" href="#进行数据处理" aria-hidden="true">#</a> 进行数据处理</h2><p>打开工具箱搜索 <code>按掩膜图层裁剪栅格</code>，并运行。</p><blockquote><p>注意！红框内数据为必选，否则会报错。</p></blockquote><p>参数选择完毕后，点击运行即可。</p><img src="' +
      n +
      '"><p>最后就会得到跟是轮廓一样的 tif 图层，按需导出即可。</p><img src="' +
      o +
      '">',
    16
  ),
  p = [h];
function _(f, g) {
  return i(), t('div', null, p);
}
const l = e(d, [
  ['render', _],
  ['__file', 'cuttif.html.vue']
]);
export { l as default };
