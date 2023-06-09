import { _ as e, o, c as d, d as s } from './app.559f79f4.js';
const a = {},
  c = s(
    '<h1 id="s3m" tabindex="-1"><a class="header-anchor" href="#s3m" aria-hidden="true">#</a> S3M</h1><p>s3m 数据格式并不是统一的 OGC 标准的数据格式，而是由国内 GIS 软件产商超图推出的一种数据格式。</p><p>超图推出该种数据格式是希望成为 OGC 标准，但是无奈在于 I3S、3D Tiles 的竞争中落败。但由于超图在国内市场的庞大份额，S3M 已经成为国内 GIS 行业的一种标准。</p><h2 id="s3m-与-osgb" tabindex="-1"><a class="header-anchor" href="#s3m-与-osgb" aria-hidden="true">#</a> S3M 与 OSGB</h2><p>在超图官网中提到 S3M 的前身是 OSGB，为了对 OSGB 进行扩展，先设计了一个扩展名为 <code>.scp</code> 的扩展文件，其中存储数据的地理参考信息，类似今天倾斜摄影数据中的 <code>metadata.xml</code> 文件。</p><p>另外一个核心扩展是为了使得三维瓦片数据支持单体化查询，其实施方案时对每个 <code>.s3mb</code> 文件中的顶点存储一个 ID，根据这个 ID 就可以知道模型中每个三角面片所属的地理对象。</p><p>为了应付 BIM 数据，还特意使得 S3M 格式能够支持实例化，使得引擎能够快速渲染包含较多重复对象的场景，如室外的树木、BIM 中的门、窗等。</p><p>其余的扩展更多是为了瓦片中数据的组织能够对应 OpenGL API，以支持快速填充显卡来提升渲染效率。</p><p>根据超图在 Github 上提供的 SDK ，可以对 S3MB 文件进行读写。根据 SDK 里头文件的定义，可以看到 S3MB 和 OSG 类似，都是对象化的组织结构，共包含</p><ul><li>RenderOperationNode</li><li>RenderOperationGroup</li><li>RenderOperationPagedLOD</li><li>RenderOperationGeode</li></ul><p>与 OSG 中的 Node、Group、PagedLOD、Geode 完全对应</p><h2 id="s3m-与-3d-tiles" tabindex="-1"><a class="header-anchor" href="#s3m-与-3d-tiles" aria-hidden="true">#</a> S3M 与 3D Tiles</h2><p>前面提到 S3M 对 OSGB 的一个核心扩展就是使得瓦片数据能够做单体化查询，为每个顶点存储一个 ID，这种做法其实与 3D Tiles 的实现方法是完全一致。</p><p>另外，如果利用 iDesktop 将一份倾斜摄影模型从 OSGB 转换成 S3M 可以发现，文件夹中除了 <code>.scp</code> 文件和 <code>.s3mb</code> 文件之外，还会有一个 <code>.json</code> 文件</p><p>这个 <code>.json</code> 文件中包含了每个瓦片的树形结构，也就是瓦片数据的 LOD 层次结构，另外，还有每个 <code>.s3mb</code> 文件的文件路径、pixel size、包围盒和 LOD(金字塔) 层级。</p><p>这个 <code>.json</code> 文件与 3D Tiles 中的 <code>tilest.json</code> 文件差不多，借鉴了其结构。</p><h2 id="s3m-的看法" tabindex="-1"><a class="header-anchor" href="#s3m-的看法" aria-hidden="true">#</a> S3M 的看法</h2><p>S3M 格式的标准是 2019 年出来的，但是其实并不是一个全新的数据格式。从各方面来讲 3D Tiles 都是一种更先进的数据格式。只是当 GIS 从桌面端发展到 Web 段，迫切需要一种新的格式，就直接拿出来用了。</p><p>另外为了能够与 Cesium 的调度机制相适应，又另外生成相应的 <code>.json</code> 文件。有点像 &quot;缝合怪&quot;，为了保留 OSGB 对象化的特点、又外挂一个 <code>.json</code> 文件来适应 Cesium 的调度机制。虽然这样可以达到 OSGB 动态调度的目的，也可以实现 Cesium 的跨层调度，但 S3M 中存储包含一定冗余信息，也就是个节点之间的层级关系。这种层级关系在 S3M 文件和 json 文件中同时存储。</p>',
    19
  ),
  i = [c];
function p(r, t) {
  return o(), d('div', null, i);
}
const l = e(a, [
  ['render', p],
  ['__file', 's3m.html.vue']
]);
export { l as default };
