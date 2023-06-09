import {
  _ as t,
  r as p,
  o,
  c as e,
  a as n,
  b as s,
  e as c,
  d as l
} from './app.559f79f4.js';
const u = {},
  k = n(
    'h1',
    { id: 'kml-文件解析', tabindex: '-1' },
    [
      n(
        'a',
        {
          class: 'header-anchor',
          href: '#kml-文件解析',
          'aria-hidden': 'true'
        },
        '#'
      ),
      s(' KML 文件解析')
    ],
    -1
  ),
  i = n(
    'h2',
    { id: 'kml-概述', tabindex: '-1' },
    [
      n(
        'a',
        { class: 'header-anchor', href: '#kml-概述', 'aria-hidden': 'true' },
        '#'
      ),
      s(' KML 概述')
    ],
    -1
  ),
  r = n(
    'p',
    null,
    [
      s('KML 全称 '),
      n('code', null, 'Keyhole Markup Language'),
      s(
        '，是基于 XML 语法标准的一种标记语言(基于 XML 语法)，采用标记结构，含有嵌套的元素和属性，并定义了一些 TAG 用来规定地理数据的显示方式，描述和存储地理信息数据（点、线、面、图片等）。'
      )
    ],
    -1
  ),
  d = {
    href: 'https://www.ogc.org/standard/kml/',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  m = l(
    `<p>KML 主要用于地理数据的可视化，详细的用途如下：</p><ul><li>指定地点的图标和注记</li><li>为每一个地理特征创建不同的视角位置</li><li>在地球上叠放图像</li><li>指定地理特征显示的样式</li><li>编写地理特征的 HTML 的描述，包括超链接和内嵌图像</li><li>使用文件夹对地理特征进行群组</li><li>KML 文件的动态获取及修改</li><li>显示三维地物</li></ul><blockquote><p>XML：全称 eXtensible Markup Language, 可扩展标记语言</p></blockquote><h2 id="kml-代码解析" tabindex="-1"><a class="header-anchor" href="#kml-代码解析" aria-hidden="true">#</a> KML 代码解析</h2><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kml</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://earth.google.com/kml/2.1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Placemark</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Simple placemark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>
      Attached to the ground. Intelligently places itself at the height of the underlying terrain.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Point</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>coordinates</span><span class="token punctuation">&gt;</span></span>-122.0822035425683,37.42228990140251,0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>coordinates</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Point</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Placemark</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kml</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>以上是一个比较常见的 KML 代码，它包括以下几个部分</p><ul><li>XML 头：<code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code> 因为 KML 是基于 XML 语言的，所以会携带该头部</li><li>KML 空间：<code>&lt;kml xmlns=&quot;http://earth.google.com/kml/2.1&quot;&gt;...&lt;/kml&gt;</code> kml 主体，包含了需要显示的地理，<code>xmlns</code> 代表了当前 kml 的版本</li><li>特征 tag：<code>Placemark</code>，<code>description</code>，<code>Point</code> 之类都属于 kml 的自定义 tag，用这些 tag 可以详细的描述地理信息，以及借助某些工具显示地理数据</li></ul><h2 id="kml-和-kmz-文件" tabindex="-1"><a class="header-anchor" href="#kml-和-kmz-文件" aria-hidden="true">#</a> KML 和 KMZ 文件</h2><p>KMZ 文件是压缩过的 KML 文件。也是 Google 提出来以及应用的一种格式，一个 KMZ 文件，由一个主 KML 文件和 0 至多个支持文件组成，并使用 ZIP 压缩格式打包压成一个文件(称之为归档)。</p><p>KMZ 一般应用于单一个 KML 文件携带的地理数据太多，涉及图片，ICON 之类，就可以采用 KMZ 进行合并归档。</p><blockquote><p>Google Earth 和 Google Maps 能够直接读取 KML 和 KMZ 文件</p></blockquote><h2 id="js-在线解析-kml-和-kmz-文件" tabindex="-1"><a class="header-anchor" href="#js-在线解析-kml-和-kmz-文件" aria-hidden="true">#</a> js 在线解析 KML 和 KMZ 文件</h2><h3 id="kml-文件" tabindex="-1"><a class="header-anchor" href="#kml-文件" aria-hidden="true">#</a> KML 文件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> toGeoJSON <span class="token keyword">from</span> <span class="token string">&#39;@mapbox/togeojson&#39;</span><span class="token punctuation">;</span>
<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;cors&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将文本解析成 xml 格式</span>
      <span class="token keyword">const</span> xml <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseFromString</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">,</span> <span class="token string">&#39;text/xml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 利用 @mapbox/togeojson 库 解析 xml 文件变成 geojson 格式</span>
      <span class="token keyword">const</span> geojson <span class="token operator">=</span> toGeoJSON<span class="token punctuation">.</span><span class="token function">kml</span><span class="token punctuation">(</span>xml<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将二进制数据解析成文本数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="kmz-文件" tabindex="-1"><a class="header-anchor" href="#kmz-文件" aria-hidden="true">#</a> KMZ 文件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> JSZip <span class="token keyword">from</span> <span class="token string">&#39;jszip&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> toGeoJSON <span class="token keyword">from</span> <span class="token string">&#39;@mapbox/togeojson&#39;</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;cors&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> new_zip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSZip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new_zip<span class="token punctuation">.</span><span class="token function">loadAsync</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">zip</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      zip
        <span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&#39;wpmz/template.kml&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 在 KMZ 中的文件名称</span>
        <span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 将其转换为 text 文本格式</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将文本解析成 xml 格式</span>
          <span class="token keyword">const</span> xml <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseFromString</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token string">&#39;text/xml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 利用 @mapbox/togeojson 库 解析 xml 文件变成 geojson 格式</span>
          <span class="token keyword">const</span> geojson <span class="token operator">=</span> toGeoJSON<span class="token punctuation">.</span><span class="token function">kml</span><span class="token punctuation">(</span>xml<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,
    16
  );
function g(h, f) {
  const a = p('ExternalLinkIcon');
  return (
    o(),
    e('div', null, [
      k,
      i,
      r,
      n('p', null, [
        s(
          'KML 在 2008 年 4 月 14 日被 OGC(开放地理信息协会) 宣布为开放地理信息编码标准，而 GooGle 同时也宣布不再控制 KML 标准，而移交给 OGC 去维护发展，被采纳的 KML 版本为 2.2 '
        ),
        n('a', d, [s('OGC KMl'), c(a)]),
        s('。')
      ]),
      m
    ])
  );
}
const M = t(u, [
  ['render', g],
  ['__file', 'kmlorkmz.html.vue']
]);
export { M as default };
