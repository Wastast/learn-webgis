import { _ as t, o as d, c as e, d as a } from './app.559f79f4.js';
const r = {},
  o = a(
    '<h1 id="卫星影像" tabindex="-1"><a class="header-anchor" href="#卫星影像" aria-hidden="true">#</a> 卫星影像</h1><p>卫星影像使遥感卫星在太空中，探测地球地表物体对电磁波的反射及其发射的电磁波，从而提取该物体信息，完成远距离识物体。将这些电磁波转换、识别得到可视图像，就是卫星影像，简称卫图(卫星地图)。</p><blockquote><p>遥感卫星在空中给地面拍照。</p></blockquote><p>简单来说，卫星影像就是卫星在空中对地面拍摄地一张或一组照片，并且带有经纬度信息。地面上地物体看起来什么样，拍照出地结果就是什么样。</p><h2 id="卫星影像数据格式" tabindex="-1"><a class="header-anchor" href="#卫星影像数据格式" aria-hidden="true">#</a> 卫星影像数据格式</h2><p>卫星影像的文件格式使 GEOTiff，Tiff 是一个未经压缩的图像格式，GEO 是指带有经纬度信息。</p><p>用 PS、ACD 等软件可以查看或编辑卫图，跟处理普通的图像一样，但之后的结果会丢失内在的经纬度信息。</p><p>用 ArcGIS、GlobalMapper 等 GIS 软件能更好地使用（查看、定位、编辑、调色、抽取、测量、分析等）并且不会丢失经纬度信息。</p><h2 id="卫星地图地分辨率" tabindex="-1"><a class="header-anchor" href="#卫星地图地分辨率" aria-hidden="true">#</a> 卫星地图地分辨率</h2><table><thead><tr><th>遥感卫星</th><th>影像分辨率</th><th>比例尺</th></tr></thead><tbody><tr><td>worldview3、worldview2、geoeye、worldview1、pleiades</td><td>0.5 米</td><td>1:2000</td></tr><tr><td>quickbird、锁眼卫星</td><td>0.6 米</td><td>1:2500</td></tr><tr><td>ikonos、高分二号</td><td>1.0 米</td><td>1:5000</td></tr><tr><td>spot6、锁眼卫星</td><td>1.5 米</td><td>1:10000</td></tr><tr><td>spot5、alos、资源三号、高分一号、锁眼卫星</td><td>2.5 米</td><td>1:25000</td></tr></tbody></table>',
    10
  ),
  h = [o];
function i(c, l) {
  return d(), e('div', null, h);
}
const n = t(r, [
  ['render', i],
  ['__file', 'satellite.html.vue']
]);
export { n as default };
