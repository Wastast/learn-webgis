import {
  _ as s,
  r as a,
  o as c,
  c as n,
  a as e,
  b as o,
  e as r,
  d
} from './app.559f79f4.js';
const i = '/learn-webgis/image/three/start/start-banben.jpg',
  l = '/learn-webgis/image/three/start/start-catalog.jpg',
  h = {},
  _ = e(
    'h1',
    { id: '起步', tabindex: '-1' },
    [
      e(
        'a',
        { class: 'header-anchor', href: '#起步', 'aria-hidden': 'true' },
        '#'
      ),
      o(' 起步')
    ],
    -1
  ),
  p = e('p', null, '本章介绍，如何下载版本以及本地查看文档和示例', -1),
  u = e(
    'h2',
    { id: '版本选择', tabindex: '-1' },
    [
      e(
        'a',
        { class: 'header-anchor', href: '#版本选择', 'aria-hidden': 'true' },
        '#'
      ),
      o(' 版本选择')
    ],
    -1
  ),
  m = e(
    'p',
    null,
    [
      e('code', null, 'THREE.JS'),
      o(
        ' 正在飞速的发展过程中，大致上每个月都会发布一个新的版本，主要就是增加新的功能，代码优化，废弃和更名 API。'
      )
    ],
    -1
  ),
  f = e(
    'p',
    null,
    '不建议每次更新都采用新版本，这样容易会造成原有的代码产生 BUG 。在使用的过程中，发现新更新的版本有必须要使用的功能时，在进行更新，否则就使用当前时间段的最新版本即可。',
    -1
  ),
  g = {
    href: 'https://github.com/mrdoob/three.js/releases',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  b = {
    href: 'https://threejs.org/docs/#manual/zh/introduction/Creating-a-scene',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  x = d(
    '<h2 id="下载及启动" tabindex="-1"><a class="header-anchor" href="#下载及启动" aria-hidden="true">#</a> 下载及启动</h2><p>将当前版本一直往下拉会看到一个 <code>Assets</code> 标签，下载第一个 <code>Source.zip</code> 即可。</p><img src="' +
      i +
      '"><p>下载完成，解压后就可以看到如下的文件目录。</p><img src="' +
      l +
      '"><p>我们主要关注的就是 <code>docs</code> <code>examples</code> <code>src</code>，前两者是我们学习的过程中频繁使用和接触的。<code>src</code> 文件是进行源码修改和调试时使用的。</p><p>通过 <code>vscode</code> 的 <code>live-server</code> 直接启动即可查看。或者将其放置到后台服务器中，输入对应的地址也可以查看。</p>',
    7
  );
function E(j, k) {
  const t = a('ExternalLinkIcon');
  return (
    c(),
    n('div', null, [
      _,
      p,
      u,
      m,
      f,
      e('p', null, [e('a', g, [o('点击查看 THREE.js 历史版本'), r(t)])]),
      e('p', null, [e('a', b, [o('点击查看 THREE.js 官网'), r(t)])]),
      x
    ])
  );
}
const B = s(h, [
  ['render', E],
  ['__file', 'setup.html.vue']
]);
export { B as default };
