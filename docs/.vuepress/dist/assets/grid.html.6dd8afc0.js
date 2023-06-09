import {
  _ as a,
  r as t,
  o as p,
  c as e,
  e as o,
  d as n
} from './app.559f79f4.js';
const c = '/learn-webgis/image/css/props/grid/row-cls.png',
  l = '/learn-webgis/image/css/props/grid/grid-line.png',
  i = '/learn-webgis/image/css/props/grid/repeat.png',
  r = '/learn-webgis/image/css/props/grid/repeat-group.png',
  u = '/learn-webgis/image/css/props/grid/autofill.png',
  d = '/learn-webgis/image/css/props/grid/fr.png',
  g = '/learn-webgis/image/css/props/grid/minmax.png',
  k = '/learn-webgis/image/css/props/grid/auto.png',
  m = '/learn-webgis/image/css/props/grid/grid-area.png',
  h = '/learn-webgis/image/css/props/grid/grid-area-.png',
  f = '/learn-webgis/image/css/props/grid/grid-auto-flow-row.png',
  x = '/learn-webgis/image/css/props/grid/grid-auto-flow-column.png',
  y = '/learn-webgis/image/css/props/grid/grid-auto-flow-dense.png',
  w = '/learn-webgis/image/css/props/grid/grid-auto-flow-dense-1.png',
  b = '/learn-webgis/image/css/props/grid/grid-auto-flow-dense-2.png',
  _ = '/learn-webgis/image/css/props/grid/content-start.png',
  v = '/learn-webgis/image/css/props/grid/content-end.png',
  q = '/learn-webgis/image/css/props/grid/content-center.png',
  j = '/learn-webgis/image/css/props/grid/content-stretch.png',
  G = '/learn-webgis/image/css/props/grid/space-around.png',
  F = '/learn-webgis/image/css/props/grid/space-between.png',
  C = '/learn-webgis/image/css/props/grid/space-evenly.png',
  B = '/learn-webgis/image/css/props/grid/grid-auto-columns.png',
  N = '/learn-webgis/image/css/props/grid/grid-auto-rows.png',
  P = '/learn-webgis/image/css/props/grid/grid-column-start.png',
  V = '/learn-webgis/image/css/props/grid/grid-column-start1.png',
  z = '/learn-webgis/image/css/props/grid/grid-column.png',
  E = {},
  S = n(
    `<h1 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h1><p>将网页或者区域划分成一个个网格，可以任意组合不同的网格。</p><h2 id="flex-布局-和-grid-布局的区别" tabindex="-1"><a class="header-anchor" href="#flex-布局-和-grid-布局的区别" aria-hidden="true">#</a> Flex 布局 和 Grid 布局的区别</h2><p>Grid 布局和 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们之间有着重大的区别。 Flex 布局是轴线性质的，只能指定 &quot;项目&quot; 针对轴线上的位置。可以看成是 一维布局。Grid 布局则是将容器划分成 行 和 列，产生 单元格 ，然后指定项目所在的单元格，可以看作是 二维布局。所以 Flex 布局能实现的，Grid 也可以，而 Grid 能实现的 Flex 却不行，Grid 布局 远比 Flex 强大(除却兼容性)。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><h3 id="容器和项目" tabindex="-1"><a class="header-anchor" href="#容器和项目" aria-hidden="true">#</a> 容器和项目</h3><p>采用网格布局的区域(使用了 display: grid )，成为容器(container)。容器内部采用网格定位的子元素，称为项目(item)。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.grid</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>在上面的代码中，<code>class</code> 为 <code>grid</code> 的 <code>&lt;div&gt;</code> 元素就是容器。而容器里面的顶层子元素 div &gt; div 就是项目。 <code>&lt;p&gt;</code> 标签则是项目中的元素，而不是网格中的项目。Grid 布局中的排列仅对项目生效。</p></blockquote><h3 id="行-列-单元格" tabindex="-1"><a class="header-anchor" href="#行-列-单元格" aria-hidden="true">#</a> 行，列，单元格</h3><p>容器(container)中水平区域称为行(row)，垂直区域称为列(column)，行和列的交叉区域称之为单元格(cell)</p><blockquote><p>1：列 2：行 3：单元格</p></blockquote><img src="` +
      c +
      '"><h3 id="网格线" tabindex="-1"><a class="header-anchor" href="#网格线" aria-hidden="true">#</a> 网格线</h3><p>划分网格的线，称为 &quot;网格线(grid line)&quot;。水平网格线划分出行，垂直网格线划分出列。</p><img src="' +
      l +
      `"><h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2><h3 id="display-grid" tabindex="-1"><a class="header-anchor" href="#display-grid" aria-hidden="true">#</a> display: grid</h3><p>将一个元素开启网格布局。 默认情况下，容器元素都是块级元素，但也可以设置成行内块元素</p><blockquote><p>设为网格布局以后，容器子元素的 float、display: inline-block、vertical-align 都会失效</p></blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span> // 块级容器
  <span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span> // 行内块容器
<span class="token punctuation">}</span>
</code></pre></div>`,
    21
  ),
  A = n(
    `<h3 id="grid-template-columns-grid-template-rows" tabindex="-1"><a class="header-anchor" href="#grid-template-columns-grid-template-rows" aria-hidden="true">#</a> grid-template-columns，grid-template-rows</h3><p>指定了该元素为网格布局后，就需要划分行也列了。</p><ul><li>grid-template-columns：定义了每一列的列宽</li><li>gird-template-rows：定义了每一行的行高</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid2</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 50px 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码指定了 一个 3(grid-template-columns.length) * 3(grid-template-rows.length) 的网格。</p><p>它的行高是 50px(grid-template-rows)，列宽是 50px (grid-template-columns)。所以每一块的区域宽度不超过 50px，高度不超过 50px。</p><blockquote><p>单位不仅可以使用 px 之类的绝对单位，也可以使用 %，em 之类的相对单位</p></blockquote><h4 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat()</h4><p>当我们的行高或者列宽，都是同一个值的时候，重复写是很浪费时间的，可以使用 <code>repeat(number, value)</code> 来简化操作。将以上代码改写后</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid2</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      i +
      `"><p>value 可以不仅仅是一个 而是一组值</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid2</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 100px 40px 60px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      r +
      `"><h4 id="auto-fill-关键字" tabindex="-1"><a class="header-anchor" href="#auto-fill-关键字" aria-hidden="true">#</a> auto-fill 关键字</h4><p>大部分做自适应的时候，都不清楚当前的容器宽度是多少，是根据情况而定的。我们需要当前一行(一列) 容纳尽可能多(不超出边界)的单元格时，可以使用 <code>auto-fill</code> 来替代 <code>repeat(number, value)</code> 的 <code>number</code> 个数</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid4</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      u +
      `"><p>原本是一行 3 三个，当我们设置了容器宽为 220px 时， 220 / 50 = 4.4。一行就可以摆放 4 个，但是多余的 20px 不够容纳 50px 的 单元格，所以被换行到下一行。</p><blockquote><p>在 flex 布局中，则是会默认显示一行，需要单独设置 flex-wrap: wrap 才具备换行的功能。在 grid 布局中，也是默认的几行几列，需要使用 auto-fill 才能进行动态填补</p></blockquote><h4 id="fr-关键字" tabindex="-1"><a class="header-anchor" href="#fr-关键字" aria-hidden="true">#</a> fr 关键字</h4><p>有时候，每个单元格显示的个数是一定的，但是容器大小是会随机变化的。这时候写死列宽 50px 就不对了。需要按比例动态变化。类似于 50% 。</p><p>fr 关键字解决了这个问题，它类似于 <code>flex</code> 布局中的 <code>flex-grow</code></p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      d +
      `"><p>使用 fr 关键字，将一行分为了几等分，1 + 2 = 3。上述代码分为了 3 等分。第一列为 1/3 等分，第二列为 2/3 等分</p><blockquote><p>fr 就相当于 flex 中的 flex-grow，当一个有绝对值时，剩下的一样会根据 fr 的累加值进行均分</p></blockquote><h4 id="minmax" tabindex="-1"><a class="header-anchor" href="#minmax" aria-hidden="true">#</a> minmax()</h4><p><code>minmax(min, max)</code> 函数产生一个长度范围。它接受两个参数，分别为最小值和最大值。网格动态分布时，尺寸不会小于最小值，不会大于最大值</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid6</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr <span class="token function">minmax</span><span class="token punctuation">(</span>20px<span class="token punctuation">,</span> 40px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      g +
      `"><h4 id="auto-关键字" tabindex="-1"><a class="header-anchor" href="#auto-关键字" aria-hidden="true">#</a> auto 关键字</h4><p>表示由浏览器自己决定长度。 当 列宽其他都固定宽度时，仅有一个需要动态显示的，就可以给这个单元格设置为 <code>auto</code>。当前面两列列宽为 50px，第三列为 auto 这时就会将剩余的宽度都分配给第三列</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid6</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 50px 50px auto<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      k +
      `"><h3 id="grid-gap-grid-row-gap-grid-column-gap" tabindex="-1"><a class="header-anchor" href="#grid-gap-grid-row-gap-grid-column-gap" aria-hidden="true">#</a> grid-gap，grid-row-gap，grid-column-gap</h3><p>当我们知道如何设置列宽和行高时，还需要知道如何设置单元格(Cell) 的间距( 行间距，列间距)。 使用 <code>grid-row-gap</code> 设置行间距，<code>grid-column-gap</code> 设置列间距</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid8</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>grid-gap</code> 是 <code>grid-row-gap</code> 和 <code>grid-column-gap</code> 的缩写属性。</p><p><code>grid-gap</code>: <code>&lt;grid-row-gap&gt;</code> <code>&lt;grid-column-gap&gt;</code></p><blockquote><p>根据最新标准规定，上面三个属性名的 grid- 前缀可以删除。简写为 row-gap，column-gap，gap。 gap 参数可以在 Flex 布局中使用</p></blockquote><h3 id="grid-template-areas-grid-area" tabindex="-1"><a class="header-anchor" href="#grid-template-areas-grid-area" aria-hidden="true">#</a> grid-template-areas，grid-area</h3><p>网格布局允许指定区域(area)，一个区域由单个或多个单元格组成。<code>grid-template-areas</code> 属性用于定义区域。 而 <code>grid-area</code> 用于定义项目名称</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid9</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a a d&#39;</span>
    <span class="token string">&#39;b b b&#39;</span>
    <span class="token string">&#39;c c c&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid9 .item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid9 .item-2</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid9 .item-3</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid9 .item-4</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>将网格划分为 a, b, c 三个区，由于 grid-template-columns 和 grid-template-rows 设置了行高和列宽，所以 grid-template-areas 中的每一个名称都会采用其设置的宽高</p><img src="` +
      m +
      `"><p>以上就是代码所实现的效果，1, 2, 3 通过 <code>grid-area</code> 进行定义名称，在根据 <code>grid-template-areas</code> 进行排列，如果容器中还有多余的项目，还是会根据规则正常排列下去 在使用 <code>grid-template-areas</code> 进行区域排列时，有些地方不想要这个区域时，就可以用 <code>.</code> 进行占位</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid9</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&#39;a a .&#39;</span>
    <span class="token string">&#39;b b b&#39;</span>
    <span class="token string">&#39;c c c&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid9 .item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid9 .item-2</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid9 .item-3</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      h +
      '"><h3 id="grid-auto-flow" tabindex="-1"><a class="header-anchor" href="#grid-auto-flow" aria-hidden="true">#</a> grid-auto-flow</h3><p>划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的防止顺序是 &quot;先行后列&quot; ，先填满第一行，在开始放入第二行，也就是 <code>grid-auto-flow: row </code></p><img src="' +
      f +
      '"><p>默认都是 &quot;先行后列&quot; 也就是 row 。也可以将它设为 column ，变成 &quot;先列后行&quot;。grid-auto-flow: column;</p><img src="' +
      x +
      '"><p><code>dense</code> 紧密。<code>grid-auto-flow</code> 专属可以使用。主要用于，某些项目指定位置以后，剩下的项目怎么放置。</p><img src="' +
      y +
      '"><p>如果当第一个元素和第二个元素宽度基本独占一行时，第三个会跟在第二个后面进行排列，这样就会空出一个位置，这时候可以使用 dense 进行紧密的排列</p><img src="' +
      w +
      '"><p>在瀑布流布局时，非常好用。<code>grid-auto-flow: column dense;</code></p><img src="' +
      b +
      `"><h3 id="justify-items-align-items-place-items" tabindex="-1"><a class="header-anchor" href="#justify-items-align-items-place-items" aria-hidden="true">#</a> justify-items，align-items，place-items</h3><p><code>justify-items</code> 设置单元格内容的水平位置(左中右)，align-items 设置单元格内容的垂直位置(上中下)。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid</span> <span class="token punctuation">{</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这两者写法完全相同，都可以取下面这些值</p><ul><li>start：对齐单元格的起始边缘(row：左，column：上)</li><li>end：对齐单元格的结束边缘(row：右，column：下)</li><li>center：对齐单元格的中间(row：中，column：中)</li><li>stretch：拉伸。沾满单元格的整个宽度(默认值)</li></ul><p><code>place-items</code> 是上述两者的合并简写形式 <code>place-items: &lt;align-items&gt; &lt;justify-items&gt;</code></p><ul><li>例子：place-items: start end</li><li>如果只有一个属性值时，则默认第二个值与第一个值相等。</li></ul><h3 id="justify-content-align-content-place-content" tabindex="-1"><a class="header-anchor" href="#justify-content-align-content-place-content" aria-hidden="true">#</a> justify-content，align-content，place-content</h3><p><code>justify-content</code> 是整个内容区域在容器中的水平位置(左中右)，align-content 属性是整个内容区域的垂直位置(上中下)</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between
    | space-evenly<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between |
    space-evenly<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>start：对其容器的起始边框</li></ul><img src="` +
      _ +
      '"><ul><li>end：对齐容器的结束边框</li></ul><img src="' +
      v +
      '"><ul><li>center：容器内部居中</li></ul><img src="' +
      q +
      '"><ul><li>stretch：项目大小没有指定时，拉伸占据整个网格容器</li></ul><img src="' +
      j +
      '"><ul><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器的边框大一倍</li></ul><img src="' +
      G +
      '"><ul><li>space-between：项目与项目的间隔相等，项目与容器边框之间没有间隔</li></ul><img src="' +
      F +
      '"><ul><li>space-evenly：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。</li></ul><img src="' +
      C +
      '"><p><code>place-content</code> 属性是 <code>justify-content</code> 和 <code>align-content</code> 属性的合并简写形式。</p><p><code>place-content: &lt;align-content&gt; &lt;justify-content&gt;</code></p><blockquote><p>如果只有一个属性值时，则默认第二个值与第一个值相等</p></blockquote><h3 id="grid-auto-columns-grid-auto-rows" tabindex="-1"><a class="header-anchor" href="#grid-auto-columns-grid-auto-rows" aria-hidden="true">#</a> grid-auto-columns，grid-auto-rows</h3><p>有时候，一些项目的指定位置，在现有网格的外部。比如网格是 3x3 的只有 3 列，但是某一个项目指定在第五行。如果不去指定这些超出行数或者列数的项目宽高，则会自动采用 grid-template-columns 和 grid-template-rows 的设置。</p><img src="' +
      B +
      `"><p>通过 <code>grid-auto-columns</code> 和 <code>grid-auto-rows</code> 改写超出的项目宽高</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid11</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">grid-auto-columns</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      N +
      `"><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><h3 id="grid-column-start-grid-column-end-grid-column-grid-row-start-grid-row-end-grid-row" tabindex="-1"><a class="header-anchor" href="#grid-column-start-grid-column-end-grid-column-grid-row-start-grid-row-end-grid-row" aria-hidden="true">#</a> grid-column-start，grid-column-end，grid-column，grid-row-start，grid-row-end，grid-row</h3><p>在上面的基本概念中讲述了网格线的概念。而这四个属性都与网格线相关，可以指定项目从 n =&gt; n 条网格线</p><ul><li>grid-column-start：左边框所在的垂直网格线</li><li>grid-column-end：右边框所在的垂直网格线</li><li>grid-row-start：上边框所在的水平网格线</li><li>grid-row-end：下边框所在的水平网格线</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid12</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.grid12 .item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      P +
      `"><p>上面这个效果，我指定了宽度起始位置在 第二条线(列)，终止位置在第四条线(列)。然后后续的排列会按照 <code>grid-auto-flow</code> 进行排列。 除了使用 <code>number</code> 表示第几条线之外，还可以使用网格线名称来指定网格线</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> column-1<span class="token punctuation">;</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> column-2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>span</code>关键字：表示跨越，即左右边框(上下边框)之间跨越多少个网格</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      V +
      `"><p>该关键字虽然方便跨网格的时候使用。但缺陷在于指定不了起始网格线，默认为第一条。 如果在使用这四个属性的过程中，产生了项目的重叠，则使用 z-index 属性指定项目的重叠顺序</p><p><code>grid-column</code> 是 <code>grid-column-start</code> 和 <code>grid-column-end</code> 的合并简写形式， <code>grid-row</code> 也是 <code>grid-row-start</code> 和 <code>grid-row-end</code> 的简写</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> &lt;start-line&gt; / &lt;end-line&gt;<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> &lt;start-line&gt; / &lt;end-line&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>将上面的第一个例子的代码进行改写</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid12 .item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2 / 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><img src="` +
      z +
      `"><p>在之前的说明中 span 关键字使用后 不能指定起始线条，而使用简写形式就可以改善这个问题。将上述代码再次改写</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid12 .item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 2 / span 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area" aria-hidden="true">#</a> grid-area</h3><p><code>grid-area</code> 属性指定项目放在哪一个区域。需要配合 <code>grid-template-areas</code> 使用。具体可以查看上面的 <code>grid-template-areas</code> 属性</p><h3 id="justify-self-align-self-place-self" tabindex="-1"><a class="header-anchor" href="#justify-self-align-self-place-self" aria-hidden="true">#</a> justify-self，align-self，place-self</h3><p><code>justify-self</code> 属性设置单元格内容的水平位置(左中右)，与 <code>justify-items</code> 属性的用法完全一致，但只作用于单个项目 <code>align-self</code> 属性设置单元格内容的水平位置，跟 <code>align-items</code> 属性的用法完全一致，但只作用于单个项目</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">justify-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token property">align-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
</code></pre></div><ul><li>start：对齐单元格的起始边缘</li><li>end：对齐单元格的结束边缘</li><li>center：单元格内部居中</li><li>stretch：拉伸，占满单元格的整个宽度(默认值)</li></ul><p><code>place-self</code> 是 <code>align-self</code> 和 <code>justify-self</code> 属性的合并简写形式</p><p><code>place-self: &lt;align-self&gt; &lt;justify-self&gt;</code></p><blockquote><p>如果只有一个属性值时，则默认第二个值与第一个值相等。</p></blockquote>`,
    121
  );
function D(H, I) {
  const s = t('CssPropGrid');
  return p(), e('div', null, [S, o(s, { type: 'display' }), A]);
}
const K = a(E, [
  ['render', D],
  ['__file', 'grid.html.vue']
]);
export { K as default };
