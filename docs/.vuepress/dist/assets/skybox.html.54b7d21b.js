import { _ as s, o as a, c as p, d as t } from './app.559f79f4.js';
const n = '/learn-webgis/image/potree/skybox/default.png',
  o = '/learn-webgis/image/potree/skybox/setBox.png',
  e = '/learn-webgis/image/potree/skybox/skyboxval.png',
  c = '/learn-webgis/image/potree/skybox/custom-skybox.png',
  k = '/learn-webgis/image/potree/skybox/viewerjs.png',
  u = {},
  l = t(
    '<h2 id="自定义天空盒" tabindex="-1"><a class="header-anchor" href="#自定义天空盒" aria-hidden="true">#</a> 自定义天空盒</h2><p>要想场景好看，必定绕不过 <code>Skybox(天空盒)</code>，此处不解释天空盒的概念。</p><p><code>Potree</code> 提供了一个默认的天空盒</p><img src="' +
      n +
      '"><p>需要使用代码主动调用，或者页面中进行操作，以下两种方式都可以调出 <code>Potree</code> 的默认天空盒。</p><img src="' +
      o +
      '"><p>在项目应用过程中，默认天空盒难以应对多变的需求，所以我们要通过以下步骤替换默认的天空盒，来添加上自定义的天空盒</p><h3 id="准备天空盒图片" tabindex="-1"><a class="header-anchor" href="#准备天空盒图片" aria-hidden="true">#</a> 准备天空盒图片</h3><p>首先要准备一个如下的文件夹，且具备 <code>nx</code>，<code>ny</code>，<code>nz</code>，<code>px</code>，<code>py</code>，<code>pz</code> 等图片</p><blockquote><p>图片名称是定死的，如果缺少或者名称不对会报错</p></blockquote><img src="' +
      e +
      `"><h3 id="加载天空盒" tabindex="-1"><a class="header-anchor" href="#加载天空盒" aria-hidden="true">#</a> 加载天空盒</h3><p>在代码中添加以下代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 替换场景</span>
viewer<span class="token punctuation">.</span><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token string">&#39;skybox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 加载天空盒</span>
<span class="token keyword">let</span> Skybox <span class="token operator">=</span> Potree<span class="token punctuation">.</span>Utils<span class="token punctuation">.</span><span class="token function">loadSkybox</span><span class="token punctuation">(</span><span class="token string">&#39;../skybox/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 天空盒的文件夹路径</span>
viewer<span class="token punctuation">.</span>skybox <span class="token operator">=</span> Skybox<span class="token punctuation">;</span>
</code></pre></div><img src="` +
      c +
      `"><p>这时刷新页面就看到已经替换成功了。</p><p>但是事情并没有这么简单。</p><p>如果场景替换在前，而加载天空盒在后，则没有什么问题。</p><p>但如果是加载天空盒在前，而替换场景在后，也就是如下代码顺序</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 加载天空盒</span>
<span class="token keyword">let</span> Skybox <span class="token operator">=</span> Potree<span class="token punctuation">.</span>Utils<span class="token punctuation">.</span><span class="token function">loadSkybox</span><span class="token punctuation">(</span><span class="token string">&#39;../skybox/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 天空盒的文件夹路径</span>
viewer<span class="token punctuation">.</span>skybox <span class="token operator">=</span> Skybox<span class="token punctuation">;</span>

<span class="token comment">// 替换场景</span>
viewer<span class="token punctuation">.</span><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token string">&#39;skybox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>则发现自定义天空盒失效了，还是 <code>Potree</code> 的默认天空盒</p><img src="` +
      n +
      '"><h3 id="解决加载顺序导致自定义失效问题" tabindex="-1"><a class="header-anchor" href="#解决加载顺序导致自定义失效问题" aria-hidden="true">#</a> 解决加载顺序导致自定义失效问题</h3><p>这个问题，本质是源码问题</p><p>我们快速定位至 <code>src/viewer/viewer.js</code></p><img src="' +
      k +
      `"><p>搜索 <code>setBackground</code> 函数，则会看到以下代码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token parameter">bg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>background <span class="token operator">===</span> bg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>bg <span class="token operator">===</span> <span class="token string">&#39;skybox&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>skybox <span class="token operator">=</span> Utils<span class="token punctuation">.</span><span class="token function">loadSkybox</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>Potree<span class="token punctuation">.</span>resourcePath <span class="token operator">+</span> <span class="token string">&#39;/textures/skybox2/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>href
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>background <span class="token operator">=</span> bg<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;background_changed&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">viewer</span><span class="token operator">:</span> <span class="token keyword">this</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一旦设置为 <code>skybox</code> 则就将天空盒场景替换为默认的，所以导致我们先前的设置失效。</p><p>将代码改动至如下</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">setBackground</span><span class="token punctuation">(</span><span class="token parameter">bg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>background <span class="token operator">===</span> bg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>bg <span class="token operator">===</span> <span class="token string">&#39;skybox&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>skybox<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>skybox <span class="token operator">=</span> Utils<span class="token punctuation">.</span><span class="token function">loadSkybox</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>Potree<span class="token punctuation">.</span>resourcePath <span class="token operator">+</span> <span class="token string">&#39;/textures/skybox2/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>href
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>background <span class="token operator">=</span> bg<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;background_changed&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">viewer</span><span class="token operator">:</span> <span class="token keyword">this</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>此时，场景替换也就不会将我们先前加载的天空盒给替换了</p>`,
    32
  ),
  r = [l];
function i(d, g) {
  return a(), p('div', null, r);
}
const b = s(u, [
  ['render', i],
  ['__file', 'skybox.html.vue']
]);
export { b as default };
