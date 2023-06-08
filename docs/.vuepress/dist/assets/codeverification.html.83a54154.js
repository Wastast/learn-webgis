import {
  _ as r,
  r as l,
  o as i,
  c as u,
  e as a,
  w as t,
  a as n,
  b as s,
  d as o
} from './app.559f79f4.js';
const k = {},
  d = o(
    '<h1 id="使用-husky-lint-staged-commitlint-commitizen-代码提交校验" tabindex="-1"><a class="header-anchor" href="#使用-husky-lint-staged-commitlint-commitizen-代码提交校验" aria-hidden="true">#</a> 使用 husky + lint-staged + commitlint + commitizen 代码提交校验</h1><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2><ul><li>husky：操作 git 钩子的工具</li><li>lint-staged：本地暂存代码检查工具</li><li>commitlint：commit 信息校验工具</li><li>commitzen：辅助 commit 信息，通过选择以及描述，来简短的实现一个规范的提交信息</li></ul><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2><h3 id="_1-安装-husky" tabindex="-1"><a class="header-anchor" href="#_1-安装-husky" aria-hidden="true">#</a> 1.安装 husky</h3><p>在终端执行以下安装命令</p>',
    6
  ),
  g = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'npm'),
          s(' i husky '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  m = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'yarn'),
          s(),
          n('span', { class: 'token function' }, 'add'),
          s(' husky '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  h = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'pnpm'),
          s(' i husky '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  y = o(
    `<p>在终端执行 <code>npm i husky -D</code>，并在 <code>package.json</code> 中添加命令</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">,</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>执行 <code>npm run prepare</code> 会进行 <strong>husky</strong> 的初始化，在项目的根目录中创建 <strong>.husky</strong> 的文件夹</p><h3 id="_2-安装-lint-staged-并添加好配置" tabindex="-1"><a class="header-anchor" href="#_2-安装-lint-staged-并添加好配置" aria-hidden="true">#</a> 2.安装 lint-staged 并添加好配置</h3>`,
    4
  ),
  _ = {
    href: 'https://github.com/okonet/lint-staged',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  b = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'npm'),
          s(' i lint-staged '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  f = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'yarn'),
          s(),
          n('span', { class: 'token function' }, 'add'),
          s(' lint-staged '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  v = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'pnpm'),
          s(' i lint-staged '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  q = o(
    `<p>执行以下命令创建 <code>pre-commit</code> 的提交钩子</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npx lint-staged&quot;</span>
</code></pre></div><p>执行该命令会在 <strong>.husky</strong> 文件夹中创建 <code>pre-commit</code> 文件 并添加 <code>npx lint-staged</code> 指令</p><blockquote><p>如果执行命令失败，则分开执行，先执行 <code>npx husky add .husky/pre-commit</code>，再将 <code>npx lint-staged</code> 写入到 <code>./husky/pre-commit</code> 中</p></blockquote><p>在项目的根目录中创建 <code>.lintstagedrc.json</code> 并添加以下配置</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;*.{js,jsx,ts,tsx}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier --write .&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint  --fix&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;*.md&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">注意</p><p>需要安装 eslint 和 prettier，如果未安装则校验的时候会报错</p></div><h3 id="_3-安装提交信息校验依赖-commitlint" tabindex="-1"><a class="header-anchor" href="#_3-安装提交信息校验依赖-commitlint" aria-hidden="true">#</a> 3.安装提交信息校验依赖 commitlint</h3>`,
    8
  ),
  x = {
    href: 'https://github.com/conventional-changelog/commitlint',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  z = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'npm'),
          s(' i commitlint '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
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
          n('span', { class: 'token function' }, 'yarn'),
          s(),
          n('span', { class: 'token function' }, 'add'),
          s(' commitlint '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  N = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'pnpm'),
          s(' i commitlint '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  D = o(
    `<p>执行以下命令创建 <code>commit-msg</code> 校验文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</span>
</code></pre></div><p>执行上述执行可以在 <strong>.husky</strong> 文件夹中看到一个 <code>commit-msg</code> 文件</p><blockquote><p>如果执行命令失败，则分开执行 先 <code>npx husky add .husky/commit-msg</code> 再将 <code>npx --no-install commitlint --edit $1</code> 写入到 ./husky/commit-msg 中</p></blockquote><h3 id="_4-安装辅助提交依赖-以及自定义提交信息-commitzen-commitlint-config-cz-cz-customizable" tabindex="-1"><a class="header-anchor" href="#_4-安装辅助提交依赖-以及自定义提交信息-commitzen-commitlint-config-cz-cz-customizable" aria-hidden="true">#</a> 4.安装辅助提交依赖，以及自定义提交信息 commitzen + commitlint-config-cz + cz-customizable</h3>`,
    5
  ),
  P = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'npm'),
          s(' i commitizen commitlint-config-cz cz-customizable '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  C = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'yarn'),
          s(),
          n('span', { class: 'token function' }, 'add'),
          s(' commitizen commitlint-config-cz cz-customizable '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  M = n(
    'div',
    { class: 'language-bash', 'data-ext': 'sh' },
    [
      n('pre', { class: 'language-bash' }, [
        n('code', null, [
          n('span', { class: 'token function' }, 'pnpm'),
          s(' i commitizen commitlint-config-cz cz-customizable '),
          n('span', { class: 'token parameter variable' }, '-D'),
          s(`
`)
        ])
      ])
    ],
    -1
  ),
  w = o(
    `<p>在 <code>package.json</code> 中添加命令</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">,</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git add . &amp;&amp; git-cz&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>新建 <code>.commitlintrc</code> 文件，并添加内容</p><blockquote><p>可以是 .json .yaml .yml .js .cjs .ts 看项目情况以及构建工具类别、版本而定</p></blockquote><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;cz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,
    5
  ),
  B = n('code', null, '.cz.config.js', -1),
  A = {
    href: 'https://github.com/leoforfree/cz-customizable',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  G = o(
    `<blockquote><p>可以是 .js .cjs 看项目情况以及构建工具类别、版本而定</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;✨新增&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;新增:    新的内容&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;👍修改&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;修改:    将原有内容进行调整&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;🐛修复&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;修复:    修复一个Bug&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;📝文档&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;文档:    变更的只有文档&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;💄格式&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;格式:    空格, 分号等格式修复&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;♻️重构&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;重构:    代码重构，注意和特性、修复区分开&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;⚡️性能&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;性能:    提升性能&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;✅测试&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;测试:    添加一个测试&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;🔧工具&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;工具:    开发工具变动(构建、脚手架工具等)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;⏪回滚&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;回滚:    代码回退&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;请选择提交类型:&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&#39;当前提交文件更改的范围:&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 需要 allowCustomScopes: true</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;请简要描述提交:\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;请输入详细描述(可选):\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">&#39;非兼容性说明 (可选):\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&#39;关联关闭的issue,例如：#31, #34(可选):\\n&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&#39;确认以上信息提交?(y/n)&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skipQuestion</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;footer&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 跳过问题</span>
  <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;特性&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;修复&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subjectLimit</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>在 <code>package.json</code> 中添加的 config 命令</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-customizable&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cz-customizable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.cz.config.js&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>至此我们就把一套代码提交的校验流程做好了，可能会根据某些构建工具的版本会有些变化及出入，视情况个人进行调整。</p><p>代码提交时，只需要执行 <code>npm run commit</code> 即可自动提交文件到暂存区域以及文件的验证</p>`,
    7
  );
function I(R, S) {
  const p = l('CodeGroupItem'),
    e = l('CodeGroup'),
    c = l('ExternalLinkIcon');
  return (
    i(),
    u('div', null, [
      d,
      a(e, null, {
        default: t(() => [
          a(p, { title: 'NPM', active: '' }, { default: t(() => [g]), _: 1 }),
          a(p, { title: 'YARN' }, { default: t(() => [m]), _: 1 }),
          a(p, { title: 'PNPM' }, { default: t(() => [h]), _: 1 })
        ]),
        _: 1
      }),
      y,
      n('p', null, [
        s('执行以下命令安装 '),
        n('a', _, [s('lint-staged'), a(c)])
      ]),
      a(e, null, {
        default: t(() => [
          a(p, { title: 'NPM', active: '' }, { default: t(() => [b]), _: 1 }),
          a(p, { title: 'YARN' }, { default: t(() => [f]), _: 1 }),
          a(p, { title: 'PNPM' }, { default: t(() => [v]), _: 1 })
        ]),
        _: 1
      }),
      q,
      n('p', null, [
        s('执行以下命令安装 '),
        n('a', x, [s('commitlint'), a(c)])
      ]),
      a(e, null, {
        default: t(() => [
          a(p, { title: 'NPM', active: '' }, { default: t(() => [z]), _: 1 }),
          a(p, { title: 'YARN' }, { default: t(() => [j]), _: 1 }),
          a(p, { title: 'PNPM' }, { default: t(() => [N]), _: 1 })
        ]),
        _: 1
      }),
      D,
      a(e, null, {
        default: t(() => [
          a(p, { title: 'NPM', active: '' }, { default: t(() => [P]), _: 1 }),
          a(p, { title: 'YARN' }, { default: t(() => [C]), _: 1 }),
          a(p, { title: 'PNPM' }, { default: t(() => [M]), _: 1 })
        ]),
        _: 1
      }),
      w,
      n('p', null, [s('增加 '), B, s('。 '), n('a', A, [s('查看配置'), a(c)])]),
      G
    ])
  );
}
const Y = r(k, [
  ['render', I],
  ['__file', 'codeverification.html.vue']
]);
export { Y as default };
