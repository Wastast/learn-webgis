import { _ as d, o as e, c as t, d as o } from './app.559f79f4.js';
const c = {},
  n = o(
    '<h2 id="url-字符转义的几种方式" tabindex="-1"><a class="header-anchor" href="#url-字符转义的几种方式" aria-hidden="true">#</a> URL 字符转义的几种方式</h2><p>前端向后端发起 get 请求时，可能会携带一些特殊字符或者中文参数等，但由于标准 URL 规范，是不允许出现中文以及特殊字符的，可能会导致后端截取参数失败，所以需要提前对 URL 里的特殊字符或者中文字符进行转义，以下分享几种转义字符以及解析字符的几种方式。</p><h2 id="常用特殊字符" tabindex="-1"><a class="header-anchor" href="#常用特殊字符" aria-hidden="true">#</a> 常用特殊字符</h2><p>在了解转义以及解析方式时，我们先了解下在 URL 中常用的几种特殊字符以及特殊字符转义后对应的值。</p><table><thead><tr><th>符号</th><th>解释</th><th>转义</th></tr></thead><tbody><tr><td>#</td><td>用来标志特定的文档位置</td><td>%23</td></tr><tr><td>%</td><td>对特殊字符进行编码</td><td>%25</td></tr><tr><td>&amp;</td><td>分隔不同的变量值对</td><td>%26</td></tr><tr><td>+</td><td>在变量值中表示空格</td><td>%2B</td></tr><tr><td>/</td><td>表示目录路径</td><td>%2F</td></tr><tr><td>\\</td><td>表示目录路径</td><td>%5C</td></tr><tr><td>=</td><td>用来连接键和值</td><td>%3D</td></tr><tr><td>?</td><td>表示查询字符串的开始</td><td>%3F</td></tr><tr><td>空格</td><td>空格</td><td>%20</td></tr><tr><td>.</td><td>句号</td><td>%2E</td></tr><tr><td>:</td><td>冒号</td><td>%3A</td></tr></tbody></table><h2 id="encodeuri-和-decodeuri" tabindex="-1"><a class="header-anchor" href="#encodeuri-和-decodeuri" aria-hidden="true">#</a> encodeURI() 和 decodeURI()</h2><p><code>encodeURI()</code> 函数 通过将特定字符的每个实例替换为一个、两个、三个或四个转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列) 由两个 &quot;代理&quot; 字符组成。</p><p><code>encodeURI()</code> 不会编码以下特殊字符：<code>! @ # $&amp; \\* ( ) = : / ; ? + &#39;</code>，所以在使用过程中要注意这些特殊字符的存在。</p><p><code>decodeURI()</code> 用于解析 <code>encodeURI()</code> 产生的转义字符，将其解析至原来的格式，需要注意的是只能解码 <code>encodeURI()</code> 支持的几种编码字符，如果存在不支持的字符，则不会解码。</p><h2 id="encodeuricomponent-和-decodeuricomponent" tabindex="-1"><a class="header-anchor" href="#encodeuricomponent-和-decodeuricomponent" aria-hidden="true">#</a> encodeURIComponent() 和 decodeURIComponent()</h2><p><code>encodeURIComponent()</code> 与 <code>encodeURI()</code> 一样都是将特定字符进行编码，不同的是，该方法支持的字符比 <code>encodeURI()</code> 更多，如: <code>? + \\</code>等。</p><p><code>encodeURIComponent()</code> 不会编码以下字符：<code>A-Z a-z 0-9 - _ . ! ~ * &#39; ( )</code>。</p><p><code>decodeURIComponent()</code> 与 <code>decodeURI()</code> 一样，不支持解码 <code>encodeURIComponent()</code> 函数所不能编码的字符。</p><blockquote><p>因为支持对 <code>\\</code> 的转义，所以在使用 <code>encodeURIComponent()</code> 函数时建议不直接转码一整个 URL，而是转码 URL 中的查询字符串(请求参数)。</p></blockquote><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li><p><code>encodeURI()</code> 一般常用于编码整个 URI，因为整个 URI 中的合法字符都不会被编码转换。</p></li><li><p><code>encodeURIComponent()</code> 方法适用于编码单个键值对(请求参数)，它可以将参数中的中文、特殊字符更多的进行转义，而不影响整个 URL。</p></li><li><p><code>enCodeURI()</code> 和 <code>encodeURIComponent()</code> 对中文以及字符的编码方式一样，只是支持的字符多少的区别。默认编码字符集为 UTF-8。</p></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>escape</code> 和 <code>unescape</code> 在 MDN 的说明中已不在推荐使用该特性，所以不在说明。</p></div>',
    17
  ),
  r = [n];
function a(i, p) {
  return e(), t('div', null, r);
}
const s = d(c, [
  ['render', a],
  ['__file', 'conversion.html.vue']
]);
export { s as default };
