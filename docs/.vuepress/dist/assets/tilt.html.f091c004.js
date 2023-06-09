import { _ as e, o as i, c as a, d as t } from './app.559f79f4.js';
const c = '/learn-webgis/image/webgis/tilt/chuantong.png',
  r = '/learn-webgis/image/webgis/tilt/modality.png',
  s = '/learn-webgis/image/webgis/tilt/poincloud.png',
  d = '/learn-webgis/image/webgis/tilt/tin.png',
  o = '/learn-webgis/image/webgis/tilt/qingxie.png',
  n = {},
  l = t(
    '<h1 id="倾斜摄影介绍" tabindex="-1"><a class="header-anchor" href="#倾斜摄影介绍" aria-hidden="true">#</a> 倾斜摄影介绍</h1><p>倾斜摄影技术是国际测绘领域近些年发展起来的一项高新技术，它颠覆了以往 <code>正射影像</code> 只能从垂直角度拍摄的局限。</p><h2 id="倾斜摄影和传统影像有什么区别" tabindex="-1"><a class="header-anchor" href="#倾斜摄影和传统影像有什么区别" aria-hidden="true">#</a> 倾斜摄影和传统影像有什么区别</h2><p>从数据采集的方式来看，传统影像是通过飞机上搭载的航摄仪对地面连续拍摄相片，而后经过一系列的处理得到的影像数据，获取的成果只有地物俯视角度信息，也就是视角垂直于地面。</p><img src="' +
      c +
      '"><p>而倾斜摄影通过无人机在统一飞行平台上 <code>搭载多台传感器</code>，从 <code>一个垂直</code>、<code>四个倾斜</code> 等五个不同的角度对地物进行拍摄采集，在通过几何校正、平差、多视影像匹配等一系列的处理得到的具有地物全方位信息的数据，将用户引入了符合人眼视觉的真实直观世界。</p><img src="' +
      r +
      '"><p>简单来说，影像上地物是一个平面的，倾斜摄影上地物是具有真实高度的。</p><h2 id="倾斜摄影技术特点" tabindex="-1"><a class="header-anchor" href="#倾斜摄影技术特点" aria-hidden="true">#</a> 倾斜摄影技术特点</h2><ul><li>反映地物周边真实情况</li></ul><p>相对于正射影像，倾斜影像能让用户从多个角度观察地图，更加真实的反映地物的实际情况，极大的弥补基于正射影像应用的不足。</p><ul><li>倾斜影像可实现单张影像量测</li></ul><p>通过配套软件的应用，可直接基于成果影像进行包括高度、长度、面积、角度、坡度等的量测，扩展了倾斜摄影技术在行业中的应用。</p><ul><li>建筑物侧面纹理可采集</li></ul><p>针对各种三维数字城市应用，利用航空摄影大规模成图的特点，加上从倾斜影像批量提取及贴纹理的方式，能够有效的降低城市三维建模成本。</p><ul><li>数据量小易于网络发布</li></ul><p>相较于三维 GIS 技术应用的庞大的三维数据，应用倾斜摄影技术获取的影像的数据量要小的多，其影像的数据格式可采用成熟的技术快速进行网络发布，实现共享应用。</p><h2 id="倾斜摄影的技术本质" tabindex="-1"><a class="header-anchor" href="#倾斜摄影的技术本质" aria-hidden="true">#</a> 倾斜摄影的技术本质</h2><p>倾斜摄影测量的数据本质是 <code>Mesh</code> 模型。</p><p>什么是 <code>Mesh</code> 模型? <code>Mesh</code> 模型就是网格面模型，他是点云通过一些算法，比如区域增长法，八叉树算法和波前算法等构成。而点云是在同一空间参考系下用来表示目标空间分布和目标表面特性的海量点集合。行业软件基于几何校正、联合平差等处理流程，可计算出基于影像的超高密度点云。</p><img src="' +
      s +
      '"><p>再通过点云构建 TIN（不规则三角网）模型</p><img src="' +
      d +
      '"><p>最后经过纹理映射构建真实三维模型</p><img src="' +
      o +
      '"><h2 id="倾斜摄影的-破洞-现象" tabindex="-1"><a class="header-anchor" href="#倾斜摄影的-破洞-现象" aria-hidden="true">#</a> 倾斜摄影的“破洞”现象</h2><p>“破洞” 是由于水面的高反射现象使得相机在获取水面信息的时候被“致盲”了，使得那片区域的信息不准确。</p>',
    27
  ),
  p = [l];
function h(g, _) {
  return i(), a('div', null, p);
}
const u = e(n, [
  ['render', h],
  ['__file', 'tilt.html.vue']
]);
export { u as default };
