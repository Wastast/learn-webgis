import {
  _ as o,
  r as e,
  o as c,
  c as u,
  a as n,
  b as s,
  e as t,
  d as p
} from './app.559f79f4.js';
const l = '/learn-webgis/image/potree/desc/file-desc.png',
  k = '/learn-webgis/image/potree/desc/PotreeDesktop-file.png',
  i = '/learn-webgis/image/potree/desc/PotreeDesktop.bat.png',
  r = '/learn-webgis/image/potree/desc/PotreeDesktop-drop.png',
  g = '/learn-webgis/image/potree/desc/PotreeDesktop-end.png',
  d = '/learn-webgis/image/potree/desc/transform.png',
  q = {},
  m = n(
    'h1',
    { id: 'potree', tabindex: '-1' },
    [
      n(
        'a',
        { class: 'header-anchor', href: '#potree', 'aria-hidden': 'true' },
        '#'
      ),
      s(' Potree')
    ],
    -1
  ),
  h = n(
    'p',
    null,
    'Potree 是一种基于 WebGL 的点云数据可视化解决方案，是一套开源的系统，基于 Three.js，对点云数据进行了多尺度的管理，在数据传输和可视化上都做了优化。',
    -1
  ),
  v = n(
    'p',
    null,
    '目标是开发一个能够流式传输和渲染数十亿点得点云数据集查看器，而不需要先传输整个数据集或安装第三方软件。',
    -1
  ),
  _ = n('p', null, [s('下面介绍如何正常使用 '), n('code', null, 'Potree')], -1),
  b = n(
    'h2',
    { id: '_1-下载-potree', tabindex: '-1' },
    [
      n(
        'a',
        {
          class: 'header-anchor',
          href: '#_1-下载-potree',
          'aria-hidden': 'true'
        },
        '#'
      ),
      s(' 1. 下载 Potree')
    ],
    -1
  ),
  y = {
    href: 'https://github.com/potree/potree',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  f = n('code', null, 'Github', -1),
  w = n('code', null, 'Potree', -1),
  j = p(
    '<p>下载完成后，会看到如下的一个文件目录结构</p><img src="' +
      l +
      '"><p>通过 <code>npm</code> 或者 <code>yarn</code> 等包管理工具安装模块包。安装完毕后执行 <code>yarn start</code> 命令。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>默认端口为 <code>1234</code>, <code>http://localhost:1234</code></p></div><h2 id="_2-下载-potreedesktop" tabindex="-1"><a class="header-anchor" href="#_2-下载-potreedesktop" aria-hidden="true">#</a> 2. 下载 PotreeDesktop</h2><blockquote><p>目前这个 C 端处理器 仅支持 window 。如果不是该系统则不适用此教程</p></blockquote>',
    6
  ),
  P = {
    href: 'https://github.com/potree/PotreeDesktop',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  x = n('code', null, 'Github', -1),
  D = n('code', null, 'PotreeDesktop', -1),
  E = p(
    '<p>下载后看到如下文件目录结构</p><img src="' +
      k +
      '"><p>双击 <code>PotreeDesktop.bat</code> 会运行一个程序, 成功后得到如下窗口</p><img src="' +
      i +
      '"><p>这是一个 <code>Potree</code> 桌面端的一个应用，可以用以处理点云数据以及展现数据，采用 <code>Electron</code> 为核心进行构建。</p><h2 id="_3-potreedesktop-处理点云数据-potree-展示" tabindex="-1"><a class="header-anchor" href="#_3-potreedesktop-处理点云数据-potree-展示" aria-hidden="true">#</a> 3. PotreeDesktop 处理点云数据, Potree 展示</h2><p>首先需要拥有一个点云数据，可以是 <code>.las</code> 也可以是 <code>.laz</code> 数据格式。</p><p>在此我提供了一份 简单的数据</p><p>链接：https://pan.baidu.com/s/1MYLKq0lgI5EZZ8MA9-ZnTg 提取码：qdvu</p><p>将下载完成的数据文件拖拽至刚才打开的 <code>PotreeDesktop</code> 桌面端程序</p><img src="' +
      r +
      '"><img src="' +
      g +
      '"><p>将处理完毕的数据复制到 <code>Potree</code> 源码中的 <code>pointclouds</code> 目录中</p><img src="' +
      d +
      `"><p>接着在 <code>examples</code> 中创建 <code>test.html</code> 并输入以下代码</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>author<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, user-scalable=no<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Potree Viewer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../build/potree/potree.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/jquery-ui/jquery-ui.min.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/openlayers3/ol.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/spectrum/spectrum.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/jstree/themes/mixed/style.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/jquery/jquery-3.1.1.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/spectrum/spectrum.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/jquery-ui/jquery-ui.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/other/BinaryHeap.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/tween/tween.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/d3/d3.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/proj4/proj4.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/openlayers3/ol.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/i18next/i18next.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/jstree/jstree.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../build/potree/potree.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/plasio/js/laslaz.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../libs/other/stats.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>potree_container<span class="token punctuation">&quot;</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 0px</span><span class="token punctuation">&quot;</span></span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>potree_render_area<span class="token punctuation">&quot;</span></span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
          background-image: url(<span class="token punctuation">&#39;</span>../build/potree/resources/images/background.jpg<span class="token punctuation">&#39;</span>);
        <span class="token punctuation">&quot;</span></span></span>
      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>potree_sidebar_container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;../libs/three.js/build/three.module.js&#39;</span><span class="token punctuation">;</span>

      window<span class="token punctuation">.</span>viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Potree<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;potree_render_area&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      viewer<span class="token punctuation">.</span><span class="token function">setEDLEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      viewer<span class="token punctuation">.</span><span class="token function">setFOV</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      viewer<span class="token punctuation">.</span><span class="token function">setPointBudget</span><span class="token punctuation">(</span><span class="token number">5_000_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      viewer<span class="token punctuation">.</span><span class="token function">loadSettingsFromURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      viewer<span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Point cloud courtesy of PG&amp;E and &lt;a href=&quot;https://opentopography.org/&quot;&gt;Open Topography&lt;/a&gt;.</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      viewer<span class="token punctuation">.</span><span class="token function">loadGUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        viewer<span class="token punctuation">.</span><span class="token function">setLanguage</span><span class="token punctuation">(</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewer<span class="token punctuation">.</span><span class="token function">toggleSidebar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      Potree<span class="token punctuation">.</span><span class="token function">loadPointCloud</span><span class="token punctuation">(</span>
        <span class="token string">&#39;../pointclouds/house_converted/cloud.js&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;CA13&#39;</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">addPointCloud</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>pointcloud<span class="token punctuation">)</span><span class="token punctuation">;</span>
          e<span class="token punctuation">.</span>pointcloud<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> material <span class="token operator">=</span> e<span class="token punctuation">.</span>pointcloud<span class="token punctuation">.</span>material<span class="token punctuation">;</span>
          material<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
          viewer<span class="token punctuation">.</span><span class="token function">fitToScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,
    16
  );
function T(L, V) {
  const a = e('ExternalLinkIcon');
  return (
    c(),
    u('div', null, [
      m,
      h,
      v,
      _,
      b,
      n('p', null, [
        n('a', y, [s('Potree'), t(a)]),
        s(' 进入 '),
        f,
        s(' 官方库下载或克隆 '),
        w
      ]),
      j,
      n('p', null, [
        n('a', P, [s('PotreeDesktop'), t(a)]),
        s(' 进入 '),
        x,
        s(' 官方库下载或克隆 '),
        D
      ]),
      E
    ])
  );
}
const C = o(q, [
  ['render', T],
  ['__file', 'index.html.vue']
]);
export { C as default };
