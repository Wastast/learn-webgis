import { _ as l, o as s, c as n, a as e, b as t } from './app.559f79f4.js';
const o = {},
  r = e(
    'h1',
    { id: 'wps', tabindex: '-1' },
    [
      e(
        'a',
        { class: 'header-anchor', href: '#wps', 'aria-hidden': 'true' },
        '#'
      ),
      t(' WPS')
    ],
    -1
  ),
  c = e(
    'p',
    null,
    'WPS 是指 OGC 的网络处理服务 （Web Processing Server），一种用于在 Web 上提供和执行地理空间处理的国际规范。它为网络地理信息处理服务提供了标准化的输入和输出。GeoServer 可通过安装插件支持该服务 WPS 可用于',
    -1
  ),
  a = e(
    'ul',
    null,
    [
      e('li', null, '使用即插即用的机制降低数据处理流程的复杂性'),
      e('li', null, '连接不同的处理操作'),
      e('li', null, '开发可以被其他用户重用的处理过程'),
      e('li', null, '处理流程和模型集中与服务提供者、方便维护'),
      e('li', null, '利用中央服务器集群的高运算性能'),
      e('li', null, '方便对复杂模型的公共使用')
    ],
    -1
  ),
  i = [r, c, a];
function _(d, u) {
  return s(), n('div', null, i);
}
const p = l(o, [
  ['render', _],
  ['__file', 'wps.html.vue']
]);
export { p as default };
