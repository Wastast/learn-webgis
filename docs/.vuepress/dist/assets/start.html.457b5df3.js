import {
  _ as n,
  r as c,
  o,
  c as t,
  a as e,
  b as s,
  e as i,
  d as r
} from './app.559f79f4.js';
const p = '/learn-webgis/image/cesium/setup/cesiumgithub.jpg',
  d = '/learn-webgis/image/cesium/setup/cesium-server.jpg',
  l = '/learn-webgis/image/cesium/setup/ce-sandcastle.jpg',
  m = '/learn-webgis/image/cesium/setup/yarn-build.jpg',
  u = '/learn-webgis/image/cesium/setup/ce-glbal.jpg',
  h = {},
  _ = e(
    'h1',
    { id: '快速上手', tabindex: '-1' },
    [
      e(
        'a',
        { class: 'header-anchor', href: '#快速上手', 'aria-hidden': 'true' },
        '#'
      ),
      s(' 快速上手')
    ],
    -1
  ),
  g = e('p', null, '本章介绍如何调试 Cesium 源码以及查看本地示例和文档', -1),
  k = e(
    'h2',
    { id: '下载以及安装-cesium-源码', tabindex: '-1' },
    [
      e(
        'a',
        {
          class: 'header-anchor',
          href: '#下载以及安装-cesium-源码',
          'aria-hidden': 'true'
        },
        '#'
      ),
      s(' 下载以及安装 Cesium 源码')
    ],
    -1
  ),
  b = {
    href: 'https://github.com/CesiumGS/cesium',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  C = r(
    '<img src="' +
      p +
      '"><blockquote><p>此文章对应的版本是 1.95。版本之间除应用功能会有些区别，具体启动方法没有区别，可放心下载别的版本</p></blockquote><p>通过 <code>yarn</code> <code>npm install</code> <code>pnpm install</code> 等相关包管理工具的命令，下载相关模块包</p><h2 id="启动源码库查看示例以及文档" tabindex="-1"><a class="header-anchor" href="#启动源码库查看示例以及文档" aria-hidden="true">#</a> 启动源码库查看示例以及文档</h2><p>先执行一次 <code>yarn release</code> 构建命令，构建出开发环境需要用到的库以及文档。</p><p>再次执行 <code>yarn build</code>，最后执行 <code>yarn start</code> 就可以看到开发环境已经成功运行。</p><p>打开页面，输入链接 <code>http://localhost:8080/</code> 即可查看运行页面。</p><img src="' +
      d +
      '"><p>点击 <code>Sandcastle</code> 即可查看到，Cesium 相关的所有 Demo 示例</p><img src="' +
      l +
      '"><p><code>yarn build</code> 具体是干嘛的，这时候解释下，主要是为了在 Demo 示例中开启下面的 <code>Development</code> 那一栏</p><img src="' +
      m +
      `"><p>这时候会有个问题，Cesium 的地球出不来，因为有个权限我们漏了加，需要给所有的 Demo 示例统一添加。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cesiumAccessToken <span class="token operator">=</span>
  <span class="token string">&#39;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTdmZGExYi03NDg3LTRlYjMtOTNlNS1lN2Y2YjRhY2RmZmUiLCJpZCI6OTkwOTQsImlhdCI6MTY1NjI5NzY3Nn0.iJxZxodXPrQ28iXEw1_mLsCIummsV87-OLPChOoZgdo&#39;</span><span class="token punctuation">;</span>

Cesium<span class="token punctuation">.</span>Ion<span class="token punctuation">.</span>defaultAccessToken <span class="token operator">=</span> cesiumAccessToken<span class="token punctuation">;</span>
</code></pre></div><img src="` +
      u +
      '"><p>至此，我们的开发环境快速搭建已经完成</p>',
    16
  );
function I(f, x) {
  const a = c('ExternalLinkIcon');
  return (
    o(),
    t('div', null, [
      _,
      g,
      k,
      e('p', null, [
        e('a', b, [s('Cesium Github'), i(a)]),
        s(' 登录 Github 下载或克隆库')
      ]),
      C
    ])
  );
}
const j = n(h, [
  ['render', I],
  ['__file', 'start.html.vue']
]);
export { j as default };
