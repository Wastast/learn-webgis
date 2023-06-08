import { _ as e, o as t, c as a, d as i } from './app.559f79f4.js';
const c = {},
  l = i(
    '<h1 id="wmts" tabindex="-1"><a class="header-anchor" href="#wmts" aria-hidden="true">#</a> WMTS</h1><p>WMTS 指 OGC 的 Web 地图瓦片服务（Web Map Tile Service），是 OGC 提出的缓存技术标准。WMTS 标准定义了一些操作，这些操作允许用户访问瓦片地图，是 OGC 首个支持 RESTful 访问的服务标准。</p><p>WMTS 提供了一种采用预定义图块方法发布数字地图服务的标准化解决方案。WMTS 弥补了 WMS 不能提供分块地图的不足，在服务器端把地图切割为一定不同级别大小的瓦片（瓦片矩阵集合），对客户端预先提供这些预定义的瓦片，将更多的数据处理操作，如叠加和切割等放在客户端，降低服务器端的载荷。</p><p>WMTS 牺牲了提供定制地图的灵活性，以通过提供静态数据（基础地图）来增强伸缩性，这些静态数据的范围框和比例尺被限定在各个图块内。这些固定的图块集使得对 WMTS 服务的实现可以使用一个仅简单返回已有文件的 Web 服务器即可，同时使得可以利用一些标准的诸如分布式缓存的网络机制实现伸缩性</p><p>WMTS 接口支持三类操作</p><ul><li>ServiceMetadata：一个服务元数据资源（面向过程架构风格下对 GetCapabilities 操作的响应，服务器方必须实现）。ServiceMetadata 资源描述指定服务器实现的能力和包含的信息。在面向过程的架构风格中该操作也支持客户端与服务器间的标准版本协商。</li><li>图块资源：面向过程架构风格下 GetTile 操作的响应（服务器方必须实现）。图块资源表示一个图层的地图表达结果的的一小块（一小块数据）</li><li>要素信息（FeatureInfo）资源：对面向过程架构风格下 GetFeatureInfo 操作的响应（服务器方可选择实现）。该资源提供了图块地图中某一特定像素位置处，地物要素的信息，与 WMS 中 GetFetureInfo 操作的行为相似，以文本形式通过提供比如专题属性名称及其取值的方式返回相关信息。</li></ul><blockquote><p>RESTFUL 是一种网络应用程序的设计风格和开发方式，基于 HTTP，可以使用 XML 格式定义或 JSON 格式定义。RESTFUL 适用于移动互联网厂商作为业务接口的场景，实现第三方 OTT 调用移动网络资源的功能，动作类型为新增、变更、删除所调用资源。</p></blockquote>',
    7
  ),
  o = [l];
function r(s, n) {
  return t(), a('div', null, o);
}
const T = e(c, [
  ['render', r],
  ['__file', 'wmts.html.vue']
]);
export { T as default };
