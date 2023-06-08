import { _ as e, o as a, c as r, d as t } from './app.559f79f4.js';
const o = '/learn-webgis/image/webgis/images/ortho/zhedang.webp',
  i = '/learn-webgis/image/webgis/images/ortho/tdom1.webp',
  s = {},
  c = t(
    '<h1 id="正射影像" tabindex="-1"><a class="header-anchor" href="#正射影像" aria-hidden="true">#</a> 正射影像</h1><p>正射影像是具有<code>正射投影</code>性质的遥感影像。</p><p>原始遥感影像因成像时受传感器内部的状态变化（光学系统畸变，扫描系统非线性等）、外部状态（姿态变化）及地表状况（地球曲率、地形起伏）的影响，均有程度不同的畸变和失真。</p><p>对遥感影像的几何处理，不仅提取了空间信息，也可以按正确的几何关系对影像灰度进行重新采样，形成新的正射影像。</p><h2 id="正射影像的缺点" tabindex="-1"><a class="header-anchor" href="#正射影像的缺点" aria-hidden="true">#</a> 正射影像的缺点</h2><p>正射影像在航拍过程中会存在影像上的建筑物会出现倾斜或建筑物之间的遮挡情况。</p><p>主要原因是，航拍影像采用的是中心投影的方式，对于高程建筑物会产生倾斜的建筑影像遮挡，同时会产生高楼与高楼，建筑与地面之间出现的遮挡现象。</p><img src="' +
      o +
      '"><p>如上图所示，可以很明显的看到遮挡现象，这种倾斜的建筑影像就会遮挡建筑底下的地表形状。</p><h3 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h3><p>在解决这个问题之前，首先要了解什么是真正射影像</p><p>数字真正射影像(TDOM) 是利用数字表面模型（DSM），采用数字微分纠正技术，改正原始影像的几何变形，对整个测区进行影像重采样后，使影像视角被纠正为垂直视角而形成的影像图。</p><p>真正射影像具有通过 DSM 来纠正；建筑完全垂直，图片上的任何一物体都是垂直向下的效果；无遮挡现象等特点。</p><img src="' +
      i +
      '">',
    14
  ),
  h = [c];
function d(n, p) {
  return a(), r('div', null, h);
}
const m = e(s, [
  ['render', d],
  ['__file', 'ortho.html.vue']
]);
export { m as default };
