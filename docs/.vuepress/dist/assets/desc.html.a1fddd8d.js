import { _ as e, o as c, c as o, d } from './app.559f79f4.js';
const s = {},
  t = d(
    '<h1 id="three-js" tabindex="-1"><a class="header-anchor" href="#three-js" aria-hidden="true">#</a> THREE.JS</h1><p><code>THREE.js</code> 是一个可以在浏览器运行的 <code>WebGL</code> 三维引擎库。</p><p>它与普通的 <code>WebGL</code> 并无区别，只是在原有的基础上，进行了对象类的封装，使用户在使用时不必再去使用基础的 <code>WebGL</code> 代码，而是可以直接使用它的上层对象类。</p><p>它与 <code>Cesium</code> 的区别在于，<code>Ceisum</code> 也使以 <code>WebGL</code> 为基础的，不过它具备地理信息(GIS)相关的知识，而 <code>THREE.JS</code> 则不具备，使用的坐标都是相对坐标，如果需要采用地理信息坐标，则需要自己进行转换。</p><p><code>THREE.js</code> 更像是介于 <code>Cesium</code> 和 <code>WebGL</code> 两者之间的一个存在，需要根据使用者的行业以及需求，去自行使用以及封装，由用户决定是一个地理信息引擎还是 3D 效果引擎。</p>',
    5
  ),
  a = [t];
function r(n, _) {
  return c(), o('div', null, a);
}
const h = e(s, [
  ['render', r],
  ['__file', 'desc.html.vue']
]);
export { h as default };
