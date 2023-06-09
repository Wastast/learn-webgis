import {
  _ as o,
  r as a,
  o as c,
  c as l,
  a as n,
  b as s,
  e,
  d as r
} from './app.559f79f4.js';
const u = '/learn-webgis/image/three/start/l-r-handler.jpg',
  k = {},
  i = n(
    'h1',
    { id: '坐标系', tabindex: '-1' },
    [
      n(
        'a',
        { class: 'header-anchor', href: '#坐标系', 'aria-hidden': 'true' },
        '#'
      ),
      s(' 坐标系')
    ],
    -1
  ),
  d = n(
    'p',
    null,
    [
      s('本节中，我们来认识下在 '),
      n('code', null, 'three.js'),
      s(' 中的坐标系。')
    ],
    -1
  ),
  m = n(
    'p',
    null,
    [
      n('code', null, 'three.js'),
      s(
        ' 中使用的是右手坐标系，默认的是 y 轴向上是正方向，x 轴向右是正方向，z 轴朝自己是正方向'
      )
    ],
    -1
  ),
  h = n('img', { src: u }, null, -1),
  _ = n('code', null, 'three.js', -1),
  x = {
    href: 'https://threejs.org/docs/index.html?q=Ax#api/zh/helpers/AxesHelper',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  y = r(
    `<p>发现坐标轴的颜色有 <code>红色(R)</code>、<code>绿色(G)</code>、<code>蓝色(B)</code> 分别对应坐标系的 <code>x(红)</code>、<code>y(绿)</code>、<code>z(蓝)</code></p><h2 id="创建四边形" tabindex="-1"><a class="header-anchor" href="#创建四边形" aria-hidden="true">#</a> 创建四边形</h2><p>我们创建一个四边形，添加至场景中，方便认知坐标轴的变化</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个长方体几何对象Geometry</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个材质对象Material</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xff0000</span><span class="token punctuation">,</span> <span class="token comment">//0xff0000设置材质颜色为红色</span>
  <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启透明</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token comment">//设置透明度</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 两个参数分别为几何体geometry、材质material</span>
<span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//网格模型对象Mesh</span>
<span class="token comment">//设置网格模型在三维空间中的位置坐标，默认是坐标原点</span>
mesh<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="创建坐标轴" tabindex="-1"><a class="header-anchor" href="#创建坐标轴" aria-hidden="true">#</a> 创建坐标轴</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// AxesHelper：辅助观察的坐标系 参数为坐标轴单边的长度</span>
<span class="token keyword">const</span> axesHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxesHelper</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>axesHelper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>将以上的代码进行相应的更改和添加后，就能得到以下的场景。</p><p>y 轴向上不一定满足全部场景，某些场景需要更换坐标轴位置</p>`,
    9
  );
function f(g, b) {
  const t = a('ExternalLinkIcon'),
    p = a('setup-scene');
  return (
    c(),
    l('div', null, [
      i,
      d,
      m,
      h,
      n('p', null, [
        s('在 '),
        _,
        s(' 中我们可以通过内置的对象 '),
        n('a', x, [s('THREE.AxesHelper'), e(t)]),
        s(' 来查看其坐标轴的状态。')
      ]),
      y,
      e(p, { type: 'axis' })
    ])
  );
}
const E = o(k, [
  ['render', f],
  ['__file', 'axis.html.vue']
]);
export { E as default };
