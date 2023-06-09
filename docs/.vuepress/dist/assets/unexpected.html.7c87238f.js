import { _ as n, o as a, c as e, d as s } from './app.559f79f4.js';
const t = {},
  o = s(
    `<h1 id="npm-unexpected-token" tabindex="-1"><a class="header-anchor" href="#npm-unexpected-token" aria-hidden="true">#</a> npm unexpected token .</h1><p>使用 <code>npm install</code> 安装任意包模块的时候报错 <code>Unexpected token .</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> ERR<span class="token operator">!</span> Unexpected token <span class="token string">&#39;.&#39;</span>
<span class="token function">npm</span> ERR<span class="token operator">!</span> A complete log of this run can be found in:
<span class="token function">npm</span> ERR<span class="token operator">!</span>     C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token operator">&lt;</span>user<span class="token operator">&gt;</span><span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Local<span class="token punctuation">\\</span>npm-cache<span class="token punctuation">\\</span>_logs<span class="token punctuation">\\</span><span class="token number">2022</span>-02-02T15_25_07_320Z-debug-0.log
</code></pre></div><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2><h3 id="降级版本" tabindex="-1"><a class="header-anchor" href="#降级版本" aria-hidden="true">#</a> 降级版本</h3><p>将 <code>node</code> 版本降级为 <code>node &lt;= 16.13.2</code> 。此时就可以正常使用。</p><h3 id="更新-nvm-版本" tabindex="-1"><a class="header-anchor" href="#更新-nvm-版本" aria-hidden="true">#</a> 更新 nvm 版本</h3><p>将 nvm 版本更新至 <code>1.1.8 &gt;= nvm</code>。</p>`,
    8
  ),
  c = [o];
function p(d, r) {
  return a(), e('div', null, c);
}
const i = n(t, [
  ['render', p],
  ['__file', 'unexpected.html.vue']
]);
export { i as default };
