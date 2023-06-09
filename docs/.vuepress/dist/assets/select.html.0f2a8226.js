import { _ as t, o as d, c as r, d as e } from './app.559f79f4.js';
const a = {},
  h = e(
    '<h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1><p>在 CSS 中，选择器用来指定网页上我们想要样式化的 HTML 元素。</p><p>CSS 选择器是 CSS 规则的一部分。他是元素和其他部分组合起来告诉浏览器哪个 HTML 元素，应该被应用于什么样的 CSS 属性值的方式。</p><p>选择器所选择的元素，叫做 <code>选择器的对象</code></p><h2 id="选择器的种类" tabindex="-1"><a class="header-anchor" href="#选择器的种类" aria-hidden="true">#</a> 选择器的种类</h2><p>选择合适的选择器，是一门必修课。当然也有万能的用法，合适的情况用合适的用法，见仁见智。</p><h3 id="基础选择器" tabindex="-1"><a class="header-anchor" href="#基础选择器" aria-hidden="true">#</a> 基础选择器</h3><table><thead><tr><th>选择器</th><th>别名</th><th>权重</th></tr></thead><tbody><tr><td>* {}</td><td>通配选择器</td><td>1</td></tr><tr><td>span {}</td><td>元素选择器</td><td>1</td></tr><tr><td>.span {}</td><td>类型选择器</td><td>10</td></tr><tr><td>#span {}</td><td>ID 选择器</td><td>100</td></tr></tbody></table><h3 id="层次选择器" tabindex="-1"><a class="header-anchor" href="#层次选择器" aria-hidden="true">#</a> 层次选择器</h3><table><thead><tr><th>选择器</th><th>别名</th></tr></thead><tbody><tr><td>div p {}</td><td>后代选择器</td></tr><tr><td>div &gt; p {}</td><td>子代选择器</td></tr><tr><td>div + div {}</td><td>相邻选择器</td></tr><tr><td>div ~ div {}</td><td>通用同胞选择器</td></tr></tbody></table><h3 id="集合选择器" tabindex="-1"><a class="header-anchor" href="#集合选择器" aria-hidden="true">#</a> 集合选择器</h3><table><thead><tr><th>选择器</th><th>别名</th><th>说明</th></tr></thead><tbody><tr><td>div,p</td><td>交集选择器</td><td>同时指定多个元素</td></tr><tr><td>div.class</td><td>并集选择器</td><td>指定满足规则的元素</td></tr></tbody></table><h3 id="结构选择器" tabindex="-1"><a class="header-anchor" href="#结构选择器" aria-hidden="true">#</a> 结构选择器</h3><table><thead><tr><th>选择器</th><th>说明</th></tr></thead><tbody><tr><td>:root</td><td>文档的根元素</td></tr><tr><td>:empty</td><td>无子元素的元素</td></tr><tr><td>:nth-child(n)</td><td>元素中指定顺序索引的元素</td></tr><tr><td>:nth-last-child(n)</td><td>元素中指定逆序索引的元素</td></tr><tr><td>:first-child</td><td>元素中为首的元素</td></tr><tr><td>:last-child</td><td>元素中为末尾的元素</td></tr><tr><td>:only-child</td><td>父元素仅有该元素的元素</td></tr><tr><td>:nth-of-type(n)</td><td>标签中指定顺序索引的标签</td></tr><tr><td>:nth-last-of-type(n)</td><td>标签中指定逆序索引的标签</td></tr><tr><td>:first-of-type</td><td>标签中为首的标签</td></tr><tr><td>:last-of-type</td><td>标签中为尾的标签</td></tr><tr><td>:only-of-type</td><td>父元素仅有该标签的标签</td></tr></tbody></table>',
    14
  ),
  i = [h];
function n(o, c) {
  return d(), r('div', null, i);
}
const l = t(a, [
  ['render', n],
  ['__file', 'select.html.vue']
]);
export { l as default };
