import { _ as s, o as e, c as a, d as n } from './app.559f79f4.js';
const i = '/learn-webgis/image/tools/git/sshkey/gitusername.png',
  t = '/learn-webgis/image/tools/git/sshkey/gitemail.png',
  r = '/learn-webgis/image/tools/git/sshkey/havessh.png',
  h = '/learn-webgis/image/tools/git/sshkey/nothave.png',
  o = '/learn-webgis/image/tools/git/sshkey/sucess.png',
  c = '/learn-webgis/image/tools/git/sshkey/getsshkey.png',
  d = '/learn-webgis/image/tools/git/sshkey/gitee.gif',
  p = '/learn-webgis/image/tools/git/sshkey/github.gif',
  g = {},
  l = n(
    '<h1 id="配置-ssh-key" tabindex="-1"><a class="header-anchor" href="#配置-ssh-key" aria-hidden="true">#</a> 配置 SSH key</h1><h2 id="配置全局-git-用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置全局-git-用户名和邮箱" aria-hidden="true">#</a> 配置全局 git 用户名和邮箱</h2><p>在配置 ssh Key 之前首先需要配置 全局的 git 用户名和邮箱。</p><ul><li>git config --global user.name [name]：该命令可以查看或设置全局的 git 用户名</li></ul><img src="' +
      i +
      '"><ul><li>git config --global user.email [email]：改名可以可以查看或设置全局的 git 邮箱</li></ul><img src="' +
      t +
      `"><h2 id="生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#生成-ssh-key" aria-hidden="true">#</a> 生成 ssh key</h2><h3 id="检查-ssh-keys-是否存在" tabindex="-1"><a class="header-anchor" href="#检查-ssh-keys-是否存在" aria-hidden="true">#</a> 检查 ssh keys 是否存在</h3><p>输入下面命令，如果存在 <code>id_rsa.pub</code> 或 <code>id_dsa.pub</code> 这两个文件，则直接进入步骤三即可，否则进入步骤二生成 SSH Key</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> ~/.ssh
</code></pre></div><p>不具备</p><img src="` +
      r +
      '"><p>具备</p><img src="' +
      h +
      `"><h3 id="生成新的-ssh-key" tabindex="-1"><a class="header-anchor" href="#生成新的-ssh-key" aria-hidden="true">#</a> 生成新的 ssh key</h3><p>在命令行上输入</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;你的邮箱&quot;</span>
</code></pre></div><p>输入指令后会弹出三个问题，都按回车 <code>Enter</code> 即可</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/c/Users/GuiXiang/.ssh/id_rsa<span class="token punctuation">)</span>:

Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:

Enter same passphrase again:
</code></pre></div><p>成功后如下图所示</p><img src="` +
      o +
      `"><h3 id="获取-ssh-key" tabindex="-1"><a class="header-anchor" href="#获取-ssh-key" aria-hidden="true">#</a> 获取 ssh key</h3><p>输入以下命令可以获取 <code>id_rsa.pub</code> 文件中的内容</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre></div><img src="` +
      c +
      '"><h2 id="在-gitee-码云-和-github-上的应用" tabindex="-1"><a class="header-anchor" href="#在-gitee-码云-和-github-上的应用" aria-hidden="true">#</a> 在 Gitee(码云) 和 Github 上的应用</h2><h3 id="gitee" tabindex="-1"><a class="header-anchor" href="#gitee" aria-hidden="true">#</a> Gitee</h3><img src="' +
      d +
      '"><h3 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h3><img src="' +
      p +
      '">',
    31
  ),
  u = [l];
function k(b, m) {
  return e(), a('div', null, u);
}
const y = s(g, [
  ['render', k],
  ['__file', 'sshkey.html.vue']
]);
export { y as default };
