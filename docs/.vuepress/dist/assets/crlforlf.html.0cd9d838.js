import { _ as e, o as a, c as o, d as c } from './app.559f79f4.js';
const n = {},
  t = c(
    `<h1 id="git-换行符-crlf-和-lf" tabindex="-1"><a class="header-anchor" href="#git-换行符-crlf-和-lf" aria-hidden="true">#</a> git 换行符 CRLF 和 LF</h1><p>换行符有两种 <code>CRLF</code> 和 <code>LF</code></p><ul><li><code>CRLF</code>：是回车换行的意思，即 <code>\\r\\n</code>，是 windows 系统环境下的换行方式</li><li><code>LF</code>：是换行的意思，即 <code>\\n</code>，是 Linux 系统环境下的换行方式。</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>Unix/Linux</code> 使用的是 <code>0x0A(LF)</code>，早期的 <code>Mac OS</code> 使用的是 <code>0x0D(CR)</code>，后来的 <code>OS X</code> 在更换内核后与 <code>Unix</code> 保持一致了。</p><p><code>DOS/Windows</code> 一直使用 <code>0x0D0A(CRLF)</code> 作为换行符。</p></div><p>由于不同平台之间的换行符不一致问题是开发过程中比较严重的问题，所以我们需要统一。</p><p>一般来讲，都是统一成 <code>LF</code>。</p><p>以下给出两种将 <code>Git</code> 换行符统一的方案。</p><h2 id="git-全局配置" tabindex="-1"><a class="header-anchor" href="#git-全局配置" aria-hidden="true">#</a> Git 全局配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交时转换为LF，检出时转换为CRLF</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf <span class="token boolean">true</span>

<span class="token comment"># 提交时转换为LF，检出时不转换</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf input

<span class="token comment"># 提交检出均不转换</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf <span class="token boolean">false</span>
</code></pre></div><h2 id="git-项目级文件配置" tabindex="-1"><a class="header-anchor" href="#git-项目级文件配置" aria-hidden="true">#</a> Git 项目级文件配置</h2><p>在项目中创建文件 <code>.gitattributes</code>，写入以下内容</p><div class="language-text" data-ext="text"><pre class="language-text"><code>*.js text eol=lf
*.ts text eol=lf
*.vue text eol=lf
*.tsx text eol=lf
*.d.ts text eol=lf
</code></pre></div><p>将需要变换的文件格式写上即可</p><p>虽然具备两种方案。但还是推荐两种方案结合使用，避免产生不必要的问题。</p>`,
    14
  ),
  s = [t];
function l(d, i) {
  return a(), o('div', null, s);
}
const p = e(n, [
  ['render', l],
  ['__file', 'crlforlf.html.vue']
]);
export { p as default };
