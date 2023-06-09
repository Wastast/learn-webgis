import {
  _ as u,
  r as e,
  o as i,
  c as r,
  e as s,
  w as t,
  a as n,
  b as a,
  d as o
} from './app.559f79f4.js';
const d = '/learn-webgis/image/tools/datgui/init.jpg',
  k = '/learn-webgis/image/tools/datgui/gui.number.gif',
  g = '/learn-webgis/image/tools/datgui/gui.color.gif',
  h = '/learn-webgis/image/tools/datgui/gui.select.gif',
  m = {},
  b = n(
    'h1',
    { id: 'dat-gui', tabindex: '-1' },
    [
      n(
        'a',
        { class: 'header-anchor', href: '#dat-gui', 'aria-hidden': 'true' },
        '#'
      ),
      a(' dat.Gui')
    ],
    -1
  ),
  f = n(
    'p',
    null,
    'dat.Gui 是一个 Gui 组件，一般常用于在三维场景中，通过简短的函数，就可以实现参数变换的功能，无需手动书写组件。',
    -1
  ),
  y = n(
    'h2',
    { id: '下载及安装', tabindex: '-1' },
    [
      n(
        'a',
        { class: 'header-anchor', href: '#下载及安装', 'aria-hidden': 'true' },
        '#'
      ),
      a(' 下载及安装')
    ],
    -1
  ),
  _ = n('p', null, [a('通过包管理工具安装 '), n('code', null, 'dat.gui')], -1),
  v = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'npm'),
          a(` i dat.gui
`)
        ])
      ])
    ],
    -1
  ),
  x = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'yarn'),
          a(),
          n('span', { class: 'token function' }, 'add'),
          a(` dat.gui
`)
        ])
      ])
    ],
    -1
  ),
  j = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'pnpm'),
          a(` i dat.gui
`)
        ])
      ])
    ],
    -1
  ),
  w = o(
    `<p>或通过 cdn 等方式下载相关文件</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><p>以下通过几个示例来快速上手以及了解 <code>dat.gui</code> 的使用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> dat <span class="token keyword">from</span> <span class="token string">&#39;dat.gui&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> gui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dat<span class="token punctuation">.</span>GUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><img src="` +
      d +
      '">',
    6
  ),
  G = {
    href: 'https://github.com/dataarts/dat.gui',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  C = o(
    `<h3 id="参数以及函数" tabindex="-1"><a class="header-anchor" href="#参数以及函数" aria-hidden="true">#</a> 参数以及函数</h3><h3 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型" aria-hidden="true">#</a> 数字类型</h3><p>以下展示了数字类型的三个用法</p><ul><li>如果具备最小值和最大值以及增量参数，则会产生滑块，可以拖动选择数值</li><li>如果数据类型是字符，则不可以操作</li><li>如果单纯是数字，则可以通过上下拖动或者按键的方式，进行增量为 1 的操作</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> testObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> gui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dat<span class="token punctuation">.</span>GUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f <span class="token operator">=</span> gui<span class="token punctuation">.</span><span class="token function">addFolder</span><span class="token punctuation">(</span><span class="token string">&#39;入门&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>testObj<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>testObj<span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>testObj<span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><img src="` +
      k +
      `"><h3 id="颜色控件" tabindex="-1"><a class="header-anchor" href="#颜色控件" aria-hidden="true">#</a> 颜色控件</h3><p>自带颜色选择器，可支持 <code>十六进制</code>，<code>rgb</code>，<code>rgba</code>,<code>hsv</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> testObj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color0</span><span class="token operator">:</span> <span class="token string">&#39;#ffae23&#39;</span><span class="token punctuation">,</span> <span class="token comment">// CSS string</span>
  <span class="token literal-property property">color1</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// RGB array</span>
  <span class="token literal-property property">color2</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// RGB with alpha</span>
  <span class="token literal-property property">color3</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span> <span class="token literal-property property">s</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token number">0.3</span> <span class="token punctuation">}</span> <span class="token comment">// Hue, saturation, value</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> gui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dat<span class="token punctuation">.</span>GUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f1 <span class="token operator">=</span> gui<span class="token punctuation">.</span><span class="token function">addFolder</span><span class="token punctuation">(</span><span class="token string">&#39;Colors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f1<span class="token punctuation">.</span><span class="token function">addColor</span><span class="token punctuation">(</span>testObj1<span class="token punctuation">,</span> <span class="token string">&#39;color0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;CSS颜色值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f1<span class="token punctuation">.</span><span class="token function">addColor</span><span class="token punctuation">(</span>testObj1<span class="token punctuation">,</span> <span class="token string">&#39;color1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;RGB颜色值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f1<span class="token punctuation">.</span><span class="token function">addColor</span><span class="token punctuation">(</span>testObj1<span class="token punctuation">,</span> <span class="token string">&#39;color2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;RGBA颜色值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f1<span class="token punctuation">.</span><span class="token function">addColor</span><span class="token punctuation">(</span>testObj1<span class="token punctuation">,</span> <span class="token string">&#39;color3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&#39;HUB颜色值&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f1<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><img src="` +
      g +
      `"><h3 id="下拉框控件" tabindex="-1"><a class="header-anchor" href="#下拉框控件" aria-hidden="true">#</a> 下拉框控件</h3><p>下拉控件既可以是数字类型，也可以是字符类型，都通过 <code>gui.add()</code> 方法进行配置，但与数字类型的配置有所区别</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> testObj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">50</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> gui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">dat<span class="token punctuation">.</span>GUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f2 <span class="token operator">=</span> gui<span class="token punctuation">.</span><span class="token function">addFolder</span><span class="token punctuation">(</span><span class="token string">&#39;下拉框类型&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>testObj2<span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;三&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>testObj2<span class="token punctuation">,</span> <span class="token string">&#39;speed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">slow</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">中速</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">fast</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f2<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><img src="` +
      h +
      '"><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="gui-closeontop-boolean" tabindex="-1"><a class="header-anchor" href="#gui-closeontop-boolean" aria-hidden="true">#</a> gui.closeOnTop： Boolean</h3><p>处理 <code>gui</code> 打开/关闭按钮的位置</p><h3 id="gui-preset-string" tabindex="-1"><a class="header-anchor" href="#gui-preset-string" aria-hidden="true">#</a> gui.preset：String</h3><p>一组保存值的标识符</p><h3 id="gui-width-number" tabindex="-1"><a class="header-anchor" href="#gui-width-number" aria-hidden="true">#</a> gui.width：Number</h3><p><code>gui</code> 元素的宽度</p><h3 id="gui-name-string" tabindex="-1"><a class="header-anchor" href="#gui-name-string" aria-hidden="true">#</a> gui.name：String</h3><p><code>gui</code> 的名称</p><h3 id="gui-closed-boolean" tabindex="-1"><a class="header-anchor" href="#gui-closed-boolean" aria-hidden="true">#</a> gui.closed：Boolean</h3><p>当前 <code>gui</code> 的折叠状态的切换</p><h3 id="gui-load-object" tabindex="-1"><a class="header-anchor" href="#gui-load-object" aria-hidden="true">#</a> gui.load：Object</h3><p>当前 <code>gui</code> 的状态</p><h3 id="gui-uselocalstorage-boolean" tabindex="-1"><a class="header-anchor" href="#gui-uselocalstorage-boolean" aria-hidden="true">#</a> gui.useLocalStorage：Boolean</h3><p>是否使用 <code>LocalStorage</code> 作为记录当前 <code>gui</code> 状态的方式</p><h3 id="gui-add-object-property-min-max-step-⇒-controller" tabindex="-1"><a class="header-anchor" href="#gui-add-object-property-min-max-step-⇒-controller" aria-hidden="true">#</a> gui.add(object, property, [min], [max], [step]) ⇒ Controller</h3><blockquote><p>这个一共具备几种使用方式</p></blockquote><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>object</td><td><code>Object</code></td><td>被操作的对象</td></tr><tr><td>property</td><td><code>String</code></td><td>对象中的属性</td></tr><tr><td>min</td><td><code>Number</code></td><td>最小值</td></tr><tr><td>max</td><td><code>Number</code></td><td>最大值</td></tr><tr><td>step</td><td><code>Number</code></td><td>每次改变的增量</td></tr></tbody></table><h3 id="gui-remove-controller" tabindex="-1"><a class="header-anchor" href="#gui-remove-controller" aria-hidden="true">#</a> gui.remove(Controller)</h3><p>从 <code>gui</code> 中删除指定的属性条</p><h3 id="gui-destroy" tabindex="-1"><a class="header-anchor" href="#gui-destroy" aria-hidden="true">#</a> gui.destroy()</h3><p>删除根 GUI 并取消绑定所有事件侦听器，要删除子的 <code>gui</code>，使用 <code>gui.removeFolder(folder)</code></p><h3 id="gui-addfolder-name-⇒-dat-gui-gui" tabindex="-1"><a class="header-anchor" href="#gui-addfolder-name-⇒-dat-gui-gui" aria-hidden="true">#</a> gui.addFolder(name) ⇒ dat.gui.GUI</h3><p>创建一个新的子 FolderGUI</p><h3 id="gui-removefolder-foldergui" tabindex="-1"><a class="header-anchor" href="#gui-removefolder-foldergui" aria-hidden="true">#</a> gui.removeFolder(FolderGUI)</h3><p>移除一个指定的 FolderGUI</p><h3 id="gui-open" tabindex="-1"><a class="header-anchor" href="#gui-open" aria-hidden="true">#</a> gui.open()</h3><p>打开图形界面</p><h3 id="gui-close" tabindex="-1"><a class="header-anchor" href="#gui-close" aria-hidden="true">#</a> gui.close()</h3><p>关闭图形界面</p>',
    44
  );
function O(q, I) {
  const p = e('CodeGroupItem'),
    c = e('CodeGroup'),
    l = e('ExternalLinkIcon');
  return (
    i(),
    r('div', null, [
      b,
      f,
      y,
      _,
      s(c, null, {
        default: t(() => [
          s(p, { title: 'NPM', active: '' }, { default: t(() => [v]), _: 1 }),
          s(p, { title: 'YARN' }, { default: t(() => [x]), _: 1 }),
          s(p, { title: 'PNPM' }, { default: t(() => [j]), _: 1 })
        ]),
        _: 1
      }),
      w,
      n('p', null, [
        a('以上就是初始化后的样子，一个简单的管控按钮，接着我们了解下 '),
        n('a', G, [a('dat.gui'), s(l)]),
        a(' 的参数，然后我们再书写几个应用场景。')
      ]),
      C
    ])
  );
}
const N = u(m, [
  ['render', O],
  ['__file', 'datgui.html.vue']
]);
export { N as default };
