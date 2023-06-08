import { _ as e, o as a, c as r, d as n } from './app.559f79f4.js';
const i = '/learn-webgis/image/webgl/webgl_opengl.png',
  l = {},
  b = n(
    '<h1 id="webgl-介绍" tabindex="-1"><a class="header-anchor" href="#webgl-介绍" aria-hidden="true">#</a> WebGL 介绍</h1><p>WebGL (全写 Web Graphics Library) 是一种 3D 图形 API，源于 OpenGL，是英特尔、Nokia 和 Mozilla 共同开发的一种开放标准。这种绘图技术标准允许把 JavasScript 和 OpenGL 结合在一起，通过 OpenGL 和 JavaScript 的绑定，可以为 HTML5 Canvas 元素提供高性能的硬件 3D 图形渲染能力，这样 Web 开发人员就可以借助系统显卡来在刘安祺里更流畅地展示 3D 场景和模型</p><h2 id="webgl-的起源" tabindex="-1"><a class="header-anchor" href="#webgl-的起源" aria-hidden="true">#</a> WebGL 的起源</h2><p>WebGL 的历史可以追溯到 2009 年，当时 Khronos Group 开发了 OpenGL ES 2.0，这是一种轻量级的 3D 图形 API，旨在为嵌入式设备提供更低的性能要求和更紧凑的内存占用。2011 年，Mozilla 开发了 WebGL，一种完全兼容 OpenGL ES 2.0 的 JavaScript API，可以在浏览器中运行。随后，WebGL 逐渐成为浏览器 3D 图形渲染的首选。2013 年，WebGL 1.0 完成标准化，2014 年，WebGL 2.0 发布，2017 年，WebGL 2.0 完成标准化。</p><h2 id="webgl-的支持度" tabindex="-1"><a class="header-anchor" href="#webgl-的支持度" aria-hidden="true">#</a> WebGL 的支持度</h2><ul><li>2012 年：Google 开始支持 WebGL</li><li>2013 年：Firefox 开始支持 WebGL</li><li>2014 年：Apple 开始支持 WebGL</li><li>2015 年：Microsoft 开始支持 WebGL</li><li>2016 年：Android 开始支持 WebGL</li></ul><p>目前而言，WebGL 已经是一种趋势，对应着 Web3.0 时代的到来</p><h2 id="opengl、webgl、glsl-三者的关系" tabindex="-1"><a class="header-anchor" href="#opengl、webgl、glsl-三者的关系" aria-hidden="true">#</a> OpenGL、WebGL、GLSL 三者的关系</h2><img src="' +
      i +
      '"><h3 id="opengl" tabindex="-1"><a class="header-anchor" href="#opengl" aria-hidden="true">#</a> OpenGL</h3><p>OpenGL 是 API、规范。GPU(显卡)硬件厂商需要满足统一 OpenGL 规范。而 OpenGL ES (Open Graphics Library for Embedded Systems) 是 OpenGL 的子集，专门针对手机等嵌入式设备而设计。</p><blockquote><p>GPU 驱动器(显卡驱动) =&gt; 依照标准使用 OpenGL =&gt; 指挥 GPU 做事</p></blockquote><h3 id="webgl" tabindex="-1"><a class="header-anchor" href="#webgl" aria-hidden="true">#</a> WebGL</h3><p>WebGL 是在 OpenGL ES 基础上建立的，在浏览器跑起来的图形学标准，并提供了 3D 图形的操作 API（让 JS 操作的接口），它使用 HTML5 Canvas 并允许利用文档对象模型接口。</p><blockquote><p>WebGL 1.0 基于 OpenGL ES 2.0。WebGL 2.0 基于 OpenGL ES 3.0，确保了 WebGL 1.0 的扩展，并引入新的 API</p></blockquote><h3 id="glsl" tabindex="-1"><a class="header-anchor" href="#glsl" aria-hidden="true">#</a> GLSL</h3><p>GLSL 是用来在 OpenGL 中着色编程的语言，是开发人员写的短小的自定义程序，是在图形卡的 GPU 上执行的，代替了固定的渲染管线的一部分，使渲染管线中不同层次具有可编程性。 GLSL 的着色器代码分成了两个部分：VertexShader (顶点着色器) 和 Fragment (片段着色器)，有时还会有 Geometry Shader (几何着色器)</p>',
    17
  ),
  d = [b];
function h(o, p) {
  return a(), r('div', null, d);
}
const t = e(l, [
  ['render', h],
  ['__file', 'index.html.vue']
]);
export { t as default };
