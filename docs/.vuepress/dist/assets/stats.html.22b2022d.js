import {
  _ as n,
  r as a,
  o as t,
  c as e,
  e as o,
  d as p
} from './app.559f79f4.js';
const c = {},
  u = p(
    `<h1 id="用-stats-查看渲染帧率" tabindex="-1"><a class="header-anchor" href="#用-stats-查看渲染帧率" aria-hidden="true">#</a> 用 stats 查看渲染帧率</h1><p><code>three.js</code> 每执行 WebGL 渲染器 <code>.render</code> 方法一次，就在 canvas 画布上得到一帧图像，不停地周期性执行 <code>.render()</code> 方法就可以更新 canvas 画布内容，一般场景约复杂往往渲染性能越低，也就是每秒钟执行 <code>.render()</code> 的次数越低。</p><p>通过 <code>stats</code> 库可以查看到 <code>three.js</code> 当前的渲染性能，计算当前的渲染帧率(FPS)</p><blockquote><p>渲染帧率(FPS): 简单说就是每秒钟完成的渲染次数，一般每秒钟渲染 60 次 为最佳状态，也就是 FPS = 60</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Stats <span class="token keyword">from</span> <span class="token string">&#39;three/examples/jsm/libs/stats.module.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> stats <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>stats<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span><span class="token function">setAnimationLoop</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  stats<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,
    5
  );
function l(r, d) {
  const s = a('render-stats');
  return t(), e('div', null, [u, o(s)]);
}
const k = n(c, [
  ['render', l],
  ['__file', 'stats.html.vue']
]);
export { k as default };
