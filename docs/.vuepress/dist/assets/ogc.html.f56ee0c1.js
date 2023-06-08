import {
  _ as s,
  r as c,
  o as a,
  c as r,
  a as e,
  b as t,
  e as o,
  w as n,
  d as _
} from './app.559f79f4.js';
const i = {},
  u = e(
    'h1',
    { id: 'ogc', tabindex: '-1' },
    [
      e(
        'a',
        { class: 'header-anchor', href: '#ogc', 'aria-hidden': 'true' },
        '#'
      ),
      t(' OGC')
    ],
    -1
  ),
  h = {
    href: 'http://www.opengeospatial.org',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  g = _(
    '<p>除了正式发布的标准，OGC 的工作成果还包括一些其他类型的文档，比如讨论稿、抽象规范、最佳实践文档、OGC 参考模型、白皮书等。在 OGC 的标准制定的流程中，从<code>讨论稿</code>开始，再统一意见后形成 <code>抽象规范</code>，进一步具体化到 <code>标准</code>，在这个过程中同时也可能形成 <code>最佳实践文档</code> 供印证，而 <code>OGC 参考模型</code> 则是描述 <code>抽象规范</code>、<code>标准</code>、<code>最佳实践文档</code> 之间的关系。</p><h2 id="ogc-标准" tabindex="-1"><a class="header-anchor" href="#ogc-标准" aria-hidden="true">#</a> OGC 标准</h2>',
    2
  ),
  p = e(
    'thead',
    null,
    [
      e('tr', null, [
        e('th', null, '标准全称'),
        e('th', null, '简称'),
        e('th', null, '说明')
      ])
    ],
    -1
  ),
  m = e('td', null, 'Web Map Service', -1),
  b = e('td', null, '地图 Web 服务', -1),
  f = e('td', null, 'Web Map Tile Service', -1),
  W = e('td', null, '切片地图 Web 服务', -1),
  C = e(
    'tr',
    null,
    [
      e('td', null, 'Web Processing Service'),
      e('td', null, 'WPS'),
      e('td', null, '地理处理 Web 服务')
    ],
    -1
  ),
  k = e(
    'tr',
    null,
    [
      e('td', null, 'Web Coverage Service'),
      e('td', null, 'WCS'),
      e('td', null, '栅格 Web 服务')
    ],
    -1
  ),
  x = e('td', null, 'Keyhole Markup Language', -1),
  S = e('td', null, '栅格 Web 服务', -1);
function v(G, O) {
  const d = c('ExternalLinkIcon'),
    l = c('RouterLink');
  return (
    a(),
    r('div', null, [
      u,
      e('p', null, [
        e('a', h, [t('OGC'), o(d)]),
        t(
          ' 全称 Open Geospatial Consortium(开放地理空间信息联盟)，是一个非盈利、国际化、自愿协商的标准化组织，它主要的目的就是制定与地理信息数据、服务相关的标准。'
        )
      ]),
      g,
      e('table', null, [
        p,
        e('tbody', null, [
          e('tr', null, [
            m,
            e('td', null, [
              o(
                l,
                { to: '/gis/ogc/wms.html' },
                { default: n(() => [t('WMS')]), _: 1 }
              )
            ]),
            b
          ]),
          e('tr', null, [
            f,
            e('td', null, [
              o(
                l,
                { to: '/gis/ogc/wmts.html' },
                { default: n(() => [t('WMTS')]), _: 1 }
              )
            ]),
            W
          ]),
          C,
          k,
          e('tr', null, [
            x,
            e('td', null, [
              o(
                l,
                { to: '/gis/ogc/kmlorkmz.html' },
                { default: n(() => [t('KML')]), _: 1 }
              )
            ]),
            S
          ])
        ])
      ])
    ])
  );
}
const L = s(i, [
  ['render', v],
  ['__file', 'ogc.html.vue']
]);
export { L as default };
