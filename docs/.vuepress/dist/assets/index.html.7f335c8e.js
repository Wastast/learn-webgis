import {
  _ as o,
  r as a,
  o as r,
  c as s,
  a as e,
  b as n,
  e as c
} from './app.559f79f4.js';
const i = {},
  _ = e(
    'h1',
    { id: 'qgis', tabindex: '-1' },
    [
      e(
        'a',
        { class: 'header-anchor', href: '#qgis', 'aria-hidden': 'true' },
        '#'
      ),
      n(' QGIS')
    ],
    -1
  ),
  d = e(
    'p',
    null,
    'QGIS (原称 Quantum GIS) 是一个桌面 GIS 软件。它提供数据的显示、编辑和分析能力。',
    -1
  ),
  l = e(
    'p',
    null,
    'QGIS 是基于 GPL 发布的自由软件，可以被修改以执行其他更加专业的任务。另外用 Python 写成的插件扩展了 QGIS 的功能。',
    -1
  ),
  h = e(
    'h2',
    { id: '如何安装', tabindex: '-1' },
    [
      e(
        'a',
        { class: 'header-anchor', href: '#如何安装', 'aria-hidden': 'true' },
        '#'
      ),
      n(' 如何安装')
    ],
    -1
  ),
  u = {
    href: 'https://qgis.org/en/site/',
    target: '_blank',
    rel: 'noopener noreferrer'
  };
function f(p, x) {
  const t = a('ExternalLinkIcon');
  return (
    r(),
    s('div', null, [
      _,
      d,
      l,
      h,
      e('p', null, [
        n('点击 '),
        e('a', u, [n('QGIS'), c(t)]),
        n(' 进入官网后下载即可。')
      ])
    ])
  );
}
const I = o(i, [
  ['render', f],
  ['__file', 'index.html.vue']
]);
export { I as default };
