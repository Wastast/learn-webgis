import { _ as a, o as e, c as h, d as r } from './app.559f79f4.js';
const d = {},
  i = r(
    '<h1 id="gis-地理信息系统" tabindex="-1"><a class="header-anchor" href="#gis-地理信息系统" aria-hidden="true">#</a> GIS 地理信息系统</h1><p><code>地理信息系统</code> (Geographic Infomation System 或 Geo Infomation System，GIS 有时又称 &quot;地学信息系统&quot;。</p><p>它是一种特定的十分重要的空间信息系统。它是在计算机软、硬件系统的支持下，对整个或部分地球表层(包括大气层)空间中的有关地理分布数据进行采集、存储、管理、运算、分析、显示和描述的技术系统。</p><blockquote><p>简单来说 GIS 就是通过某些方法获取(采集)一堆坐标，经过科学的操作后(管理、运算、分析)，进行数据的渲染展示</p></blockquote><h2 id="起源" tabindex="-1"><a class="header-anchor" href="#起源" aria-hidden="true">#</a> 起源</h2><p>1963 年，加拿大测量学家 罗杰·汤姆林森(Roget Tomlinson) 首先提出 GIS 这一术语，并建成世界上第一个 GIS 系统 (加拿大地理信息系统 CGIS)，用于自然资源的管理和规划。汤姆林森提倡使用计算机进行空间分析的先见之名以及他在建立 CGIS 过程中的领导角色，为他赢得了 &quot;GIS 之父&quot; 的称号。</p><p>到现在，GIS 发展已有 50 多年的历程。这个期间计算机爆炸式的变化，CPU、显卡、存储的革新促使了一大堆 GIS 软件的诞生。如 ArcGIs、GoogleEarth、SuperMap、LocaSpace 等不同的 GIS 产品。不同的产品和平台对数据的支持也各有不同，在此期间逐渐形成了一些规范化的标准，有了更多的通用风格</p><p>GIS 项目中的空间数据处理是一个非常重要的流程，它涉及到对地理空间数据处理、分析和可视化的过程，以了解地理表征和趋势，是空间数据得以表示和应用的前提。</p><p>GIS 数据根据空间关系，又可以分为二维数据和三维数据，每种数据都有对应的几种数据格式，下面我们来了解下每种数据之间的区别，以及生产方式和应用</p><h2 id="二维数据" tabindex="-1"><a class="header-anchor" href="#二维数据" aria-hidden="true">#</a> 二维数据</h2><h3 id="栅格数据" tabindex="-1"><a class="header-anchor" href="#栅格数据" aria-hidden="true">#</a> 栅格数据</h3><p>最简单的栅格是由按行和列组织的像元(像素)矩阵组成，其中的每个像元都包含一个信息值，用于表示该位置的某个信息特征，例如温度、高程或光谱值(颜色) 点要素由单个像元表示，线要素由一序列相邻的像元表示，面要素由连续的栅格像元的集合表示。</p><p>来源：图像、遥感影像、数字正射影像 DOM</p><p>格式：TIFF，IMG(png, jpeg, jpg...)</p><h3 id="矢量数据" tabindex="-1"><a class="header-anchor" href="#矢量数据" aria-hidden="true">#</a> 矢量数据</h3><h2 id="三维数据" tabindex="-1"><a class="header-anchor" href="#三维数据" aria-hidden="true">#</a> 三维数据</h2><h3 id="实景三维-倾斜模型" tabindex="-1"><a class="header-anchor" href="#实景三维-倾斜模型" aria-hidden="true">#</a> 实景三维(倾斜模型)</h3><h3 id="点云模型" tabindex="-1"><a class="header-anchor" href="#点云模型" aria-hidden="true">#</a> 点云模型</h3><h3 id="地形数据" tabindex="-1"><a class="header-anchor" href="#地形数据" aria-hidden="true">#</a> 地形数据</h3><h3 id="手工模型" tabindex="-1"><a class="header-anchor" href="#手工模型" aria-hidden="true">#</a> 手工模型</h3>',
    20
  ),
  n = [i];
function t(o, c) {
  return e(), h('div', null, n);
}
const p = a(d, [
  ['render', t],
  ['__file', 'index.html.vue']
]);
export { p as default };
