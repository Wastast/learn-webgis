import {
  _ as a,
  r as t,
  o as p,
  c as e,
  e as o,
  d as n
} from './app.559f79f4.js';
const c = '/learn-webgis/image/three/start/render.png',
  u = '/learn-webgis/image/three/start/camera.png',
  l = {},
  k = n(
    '<h1 id="_3d-场景" tabindex="-1"><a class="header-anchor" href="#_3d-场景" aria-hidden="true">#</a> 3D 场景</h1><p>入门 <code>three.js</code> 的第一步，先认识 <code>场景(Scene)、相机(Camera)、渲染器(Renderer)</code>三个基本概念。这三者的关系如下图。</p><img src="' +
      c +
      `"><h2 id="场景-scene" tabindex="-1"><a class="header-anchor" href="#场景-scene" aria-hidden="true">#</a> 场景(Scene)</h2><p>场景是用来模拟生活中的真实三维场景，我们通过代码生成的 <code>物体</code> 都需要将其添加到场景中才会生效，每个物体都有自身的坐标以及偏移量和角度。</p><p>可以通过 <code>scene.add</code> 方法将物体添加至场景。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建3D场景对象Scene</span>
<span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个长方体几何对象Geometry</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个材质对象Material</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xff0000</span> <span class="token comment">//0xff0000设置材质颜色为红色</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 两个参数分别为几何体geometry、材质material</span>
<span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//网格模型对象Mesh</span>
<span class="token comment">//设置网格模型在三维空间中的位置坐标，默认是坐标原点</span>
mesh<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="相机-camera" tabindex="-1"><a class="header-anchor" href="#相机-camera" aria-hidden="true">#</a> 相机(Camera)</h2><p>当我们场景有物体时，这时就需要相机来给我们场景拍照，输出成照片，用户才能看到场景的样子。</p><p>相机有两个最基本的参数 <code>camera.position</code> 和 <code>camera.lookAt</code>。</p><p>前者表示相机所处的位置，后者表示相机拍摄的位置。</p><img src="` +
      u +
      `"><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)</span>
<span class="token keyword">const</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span> <span class="token comment">//宽度</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span> <span class="token comment">//高度</span>
<span class="token comment">// 实例化一个透视投影相机对象</span>
<span class="token comment">// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面</span>
<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> width <span class="token operator">/</span> height<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 相机在Three.js三维坐标系中的位置</span>
<span class="token comment">// 根据需要设置相机位置具体值</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 指向mesh对应的位置</span>
camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>mesh<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="渲染器-renderer" tabindex="-1"><a class="header-anchor" href="#渲染器-renderer" aria-hidden="true">#</a> 渲染器(Renderer)</h2><p>在生活中如果有了物体和相机，像获得一张照片，就需要一个拍照的过程。那么对于 <code>three.js</code> 而言，完成这个拍照的过程是通过渲染器来实现的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span> <span class="token comment">//宽度</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span> <span class="token comment">//高度</span>
<span class="token comment">// 创建渲染器对象</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置three.js渲染区域的尺寸(像素px)</span>
renderer<span class="token punctuation">.</span><span class="token function">setAnimationLoop</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//执行渲染操作</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>将上面的代码合并后执行，就可以看到在场景中有一个红色的立方体了</p>`,
    18
  ),
  i = n(
    `<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 创建3D场景对象Scene</span>
<span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个长方体几何对象Geometry</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个材质对象Material</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0xff0000</span> <span class="token comment">//0xff0000设置材质颜色为红色</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 两个参数分别为几何体geometry、材质material</span>
<span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//网格模型对象Mesh</span>
<span class="token comment">//设置网格模型在三维空间中的位置坐标，默认是坐标原点</span>
mesh<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)</span>
<span class="token keyword">const</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span> <span class="token comment">//宽度</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">;</span> <span class="token comment">//高度</span>
<span class="token comment">// 实例化一个透视投影相机对象</span>
<span class="token comment">// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面</span>
<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> width <span class="token operator">/</span> height<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 相机在Three.js三维坐标系中的位置</span>
<span class="token comment">// 根据需要设置相机位置具体值</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 指向mesh对应的位置</span>
camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>mesh<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建渲染器对象</span>
<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置three.js渲染区域的尺寸(像素px)</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//执行渲染操作</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,
    1
  );
function r(m, d) {
  const s = t('setup-scene');
  return p(), e('div', null, [k, o(s), i]);
}
const w = a(l, [
  ['render', r],
  ['__file', 'start.html.vue']
]);
export { w as default };
