import {
  _ as p,
  r as s,
  o as c,
  c as r,
  a as n,
  b as a,
  e as t,
  d as l
} from './app.559f79f4.js';
const i = {},
  u = n(
    'h1',
    { id: '轨道控制器', tabindex: '-1' },
    [
      n(
        'a',
        { class: 'header-anchor', href: '#轨道控制器', 'aria-hidden': 'true' },
        '#'
      ),
      a(' 轨道控制器')
    ],
    -1
  ),
  d = n(
    'p',
    null,
    '上一节我们搭建了一个简单的场景，顺带在场景中添加了一个立方体。',
    -1
  ),
  k = {
    href: 'https://threejs.org/docs/index.html?q=Contr#examples/zh/controls/OrbitControls',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  h = l(
    `<h2 id="初始化控制器" tabindex="-1"><a class="header-anchor" href="#初始化控制器" aria-hidden="true">#</a> 初始化控制器</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/examples/jsm/controls/OrbitControls&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 相机控件的第一个参数必须是相机类，代表相机控件需要改变哪个相机的视角</span>
<span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span>camera<span class="token punctuation">,</span> renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 启用阻尼惯性</span>
controller<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="交互方式" tabindex="-1"><a class="header-anchor" href="#交互方式" aria-hidden="true">#</a> 交互方式</h2><ul><li>缩放：滚动—鼠标中键</li><li>旋转：拖动—鼠标左键</li><li>平移：拖动—鼠标右键</li></ul><h2 id="添加渲染器" tabindex="-1"><a class="header-anchor" href="#添加渲染器" aria-hidden="true">#</a> 添加渲染器</h2><p>如同场景搭建一样，控制器每一次执行操作也都需要进行一次更新，所以需要将控制器的更新放入渲染器的渲染帧函数里面</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>renderer<span class="token punctuation">.</span><span class="token function">setAnimationLoop</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  controller<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>添加了控制器后，就可以操作图形，任意变换视角进行查看</p><blockquote><p>图形的位置其实一直都没有变，千万别以为是图形发生了位移，变得只是相机视角</p></blockquote>`,
    10
  );
function _(m, b) {
  const e = s('ExternalLinkIcon'),
    o = s('setup-scene');
  return (
    c(),
    r('div', null, [
      u,
      d,
      n('p', null, [
        a('这节我们来添加一个 '),
        n('a', k, [a('轨道控制器'), t(e)]),
        a(
          '，听名词挺难懂的，其实就是一个操作相机视角的控制器，可以使我们从多个视角观察立方体'
        )
      ]),
      h,
      t(o, { type: 'addcontrols' })
    ])
  );
}
const x = p(i, [
  ['render', _],
  ['__file', 'orbitControls.html.vue']
]);
export { x as default };
