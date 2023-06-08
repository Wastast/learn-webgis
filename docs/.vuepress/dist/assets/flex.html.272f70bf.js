import { _ as e, o as a, c as s, d as n } from './app.559f79f4.js';
const l = '/learn-webgis/image/css/props/flex/flex-box.png',
  c = '/learn-webgis/image/css/props/flex/item-order.png',
  t = '/learn-webgis/image/css/props/flex/flex-grow.png',
  i = '/learn-webgis/image/css/props/flex/flex-shrink.jpg',
  o = {},
  r = n(
    `<h1 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h1><p>Flex 是 Flexible Box 的缩写，意为 &quot;弹性布局&quot;，用来为盒装模型提供最大的灵活性。 任何一个容器都可以指定 Flex 布局</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 块级容器 */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 行内块容器 */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>采用 Flex 布局的元素，称为 Flex 容器 (flex container)，简称 &quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称 &quot;项目&quot;</p><img src="` +
      l +
      `"><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴开始的位置(与容器的边界的交叉点)叫做 <code>main start</code> ，结束的位置叫 <code>main end</code>；交叉轴的开始位置叫 <code>cross start</code>，结束的位置叫 <code>cross end</code>。</p><p>项目(容器成员) 默认沿主轴从左到右进行排列。单个项目在主轴所占空间叫 <code>main size</code>，占据的交叉轴空间叫 <code>cross size</code>。</p><h2 id="容器的属性" tabindex="-1"><a class="header-anchor" href="#容器的属性" aria-hidden="true">#</a> 容器的属性</h2><h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
</code></pre></div><p>该属性决定主轴的方向（项目的排列方向）</p><ul><li>row(默认值)：主轴为水平方向，起点在左端，项目排列从左到右</li><li>row-reverse：主轴为水平方向，起点在右端，项目排列从右到左(row 的 翻转)</li><li>column：主轴为垂直方向，起点在上方，项目排列从上到下</li><li>column-reverse：主轴为垂直方向，起点在下方，项目排列从下到上</li></ul><h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap | nowrap | wrap-reverse<span class="token punctuation">;</span>
</code></pre></div><p>该属性决定项目如果在一条轴线上排不下，该如何换行</p><ul><li>nowrap(默认)：不换行，如果项目个数超出预期一行显示个数，会压缩项目的宽度</li><li>wrap：换行，第二行在第一行的下方（在主轴上，自上而下换行，在交叉轴上自左向右换行</li><li>wrap-reverse：换行，与 wrap 相反</li></ul><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">flex-flow</span><span class="token punctuation">:</span> row nowrap<span class="token punctuation">;</span>
</code></pre></div><p><code>flex-flow</code> 属性是 <code>flex-direction</code> 和 <code>flex-wrap</code> 两个属性的简写形式;</p><h3 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> justify-content</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around |
  space-evenly<span class="token punctuation">;</span>
</code></pre></div><p>该属性定义了项目在主轴(row)上的对齐方式。根据主轴的起点不同会有不同的效果</p><ul><li>flex-start(默认值)：主轴起点对齐</li><li>flex-end：主轴尾部对齐</li><li>center：居中</li><li>space-between：两端对齐，项目之间的间隔都相等(最左与最右这两元素触碰边界)</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框之间的间隔大</li><li>space-evenly：每个项目在不换行的前提下，间隔都均匀相等，与边框也一样</li></ul><h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
</code></pre></div><p>该属性定义项目在交叉轴上如何对齐。根据交叉轴的起点不同会有不同效果</p><ul><li>flex-start：交叉轴起点对齐</li><li>flex-end：交叉轴尾部对齐</li><li>center：交叉轴居中对齐</li><li>baseline：项目的第一行的基线对齐</li><li>stretch(默认)： 如果项目未设置高度会设为 auto，将会占满整个容器的高度</li></ul><h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around |
  stretch<span class="token punctuation">;</span>
</code></pre></div><p>该属性定义了多跟轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</p><ul><li>flex-start：与交叉轴的起点对齐</li><li>flex-end：与交叉轴的终点对齐</li><li>center：与交叉轴的中点对齐</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大</li><li>stretch(默认值)：轴线沾满整个交叉轴</li></ul><h2 id="项目-成员-的属性" tabindex="-1"><a class="header-anchor" href="#项目-成员-的属性" aria-hidden="true">#</a> 项目(成员)的属性</h2><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3><p>定义项目在轴线中的排列顺序。数值越小，排列越靠前，相同则按照 HTML 加载顺序</p><img src="` +
      c +
      '"><h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3><p>定义项目的放大比例，默认为 0(如果存在剩余空间，也不放大) 如果所有项目(成员)的 flex-grow 属性都为 1，则他们将等分剩余空间。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则为 2 的占据剩余空间将比其他项目多一倍</p><img src="' +
      t +
      '"><h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3><p>该属性定义了项目的缩小比例，默认 1(如果空间不足，该项目将缩小)。 如果所有项目的 <code>flex-shrink</code>属性都为 1， 当空间不足时，都将等比例缩小。如果一个项目 <code>flex-shrink</code> 属性为 0，其他项目为 1，则空间不足时，前者不缩小。</p><img src="' +
      i +
      `"><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3><div class="language-css" data-ext="css"><pre class="language-css"><code>flex-basis：auto
</code></pre></div><p>该属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有杜宇空间。默认值为 <code>auto</code>，即项目的本来大小。</p><h3 id="flex-1" tabindex="-1"><a class="header-anchor" href="#flex-1" aria-hidden="true">#</a> flex</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt; flex-grow &gt; &lt; flex-shrink &gt;? || &lt; flex-basis &gt; ]<span class="token punctuation">;</span>
</code></pre></div><p>该属性是 <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code> 的简写, 默认值为 0 1 auto。后两个属性可选 简写的属性优先推荐，浏览器会根据该属性更好的计算相关值</p><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3><div class="language-css" data-ext="css"><pre class="language-css"><code>align-self： auto | flex-start | flex-end | center | baseline | stretch
</code></pre></div><p>该属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 默认为 <code>auto</code> ，表示继承父元素的 <code>align-items</code> 属性，如果没有父元素，则等同于 <code>stretch</code></p>`,
    51
  ),
  p = [r];
function d(u, h) {
  return a(), s('div', null, p);
}
const f = e(o, [
  ['render', d],
  ['__file', 'flex.html.vue']
]);
export { f as default };
