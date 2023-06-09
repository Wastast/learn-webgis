import { _ as e, o as a, c as i, d as r } from './app.559f79f4.js';
const h = '/learn-webgis/image/cesium/basic/pingmu.png',
  s = {},
  c = r(
    '<h1 id="ceisum-常用坐标" tabindex="-1"><a class="header-anchor" href="#ceisum-常用坐标" aria-hidden="true">#</a> Ceisum 常用坐标</h1><p>首先我们要了解在 Cesium 中存在一个默认的坐标系叫做世界坐标系(笛卡尔空间直角坐标系)。是以地球中心为原点(本初子午线)，建立直角坐标系，每个轴(x,y,z) 对应的都是地球半径 6378.137 千米</p><p>首先我们目前常用的坐标系。</p><h2 id="常用坐标系" tabindex="-1"><a class="header-anchor" href="#常用坐标系" aria-hidden="true">#</a> 常用坐标系</h2><h3 id="平面坐标系-屏幕坐标系" tabindex="-1"><a class="header-anchor" href="#平面坐标系-屏幕坐标系" aria-hidden="true">#</a> 平面坐标系(屏幕坐标系)</h3><p>在 Web 中的平面坐标系又称屏幕坐标系，主要是采用了 Canvas 的坐标系。屏幕左上角为原点(0,0)，向右为 X 轴，向下为 Y 轴。</p><img src="' +
      h +
      '"><h3 id="地理坐标系-经纬度" tabindex="-1"><a class="header-anchor" href="#地理坐标系-经纬度" aria-hidden="true">#</a> 地理坐标系(经纬度)</h3><p>Cesium 默认处理的地理坐标系为 WGS84，如果有其他地理系坐标，则需要转换为 WGS84 。</p><blockquote><p>在表示经纬度的时候，有度数制和弧度制两种，在开发过程中，经常要进行相互转换。Cesium 中使用 Cartographic 表示弧度制的 WGS84 地理坐标系。</p></blockquote><h3 id="笛卡尔空间直角坐标系-世界坐标系" tabindex="-1"><a class="header-anchor" href="#笛卡尔空间直角坐标系-世界坐标系" aria-hidden="true">#</a> 笛卡尔空间直角坐标系(世界坐标系)</h3><p>在计算机进行绘图的时候，由于不方便直接使用经纬度绘图，一般会将坐标系转换为笛卡尔坐标系（坐标系原点为椭球中心），Cesium 中使用 Cartesian3 表示。</p><h2 id="坐标转换" tabindex="-1"><a class="header-anchor" href="#坐标转换" aria-hidden="true">#</a> 坐标转换</h2>',
    13
  ),
  d = [c];
function t(n, o) {
  return a(), i('div', null, d);
}
const p = e(s, [
  ['render', t],
  ['__file', 'coordinate.html.vue']
]);
export { p as default };
