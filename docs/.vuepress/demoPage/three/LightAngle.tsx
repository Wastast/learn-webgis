import { defineComponent, onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Prism from 'prismjs';
import useDatgui from '../../hooks/useDatgui';

export default defineComponent({
  setup(props, ctx) {
    const boxEl = ref<HTMLDivElement>(null);
    const codeEl = ref(null);
    let camera = null;
    let scene = null;
    let mesh = null;
    const { getGui, removeFolder } = useDatgui(boxEl);

    let guicache = null;
    let light = null;
    let helper = null;
    const clear = () => {
      if (guicache) {
        removeFolder(guicache);
        guicache = null;
      }
      if (light) {
        scene.remove(light);
        light = null;
      }
      if (helper) {
        scene.remove(helper);
        helper = null;
      }
    };
    const AxisObj = {
      point: () => {
        clear();
        const code = `// 点光源：两个参数分别表示光源颜色和光照强度
// 参数1: 表示光源颜色
// 参数2: 1.0,表示光照强度，可以根据需要调整
const pointLight = new THREE.PointLight(0xffffff, 1.0);
// 点光源位置
pointLight.position.set(150, 150, 150);
scene.add(pointLight); // 点光源添加到场景中
const sphereSize = 10;
// 添加点光源辅助查看器 参数一: 点光源对象 参数二: 查看器大小
const pointLightHelper = new THREE.PointLightHelper(
  pointLight,
  sphereSize
);
scene.add(pointLightHelper);`;
        let cssCode = Prism.highlight(code, Prism.languages.javascript);
        codeEl.value.innerHTML = cssCode;
        // 点光源：两个参数分别表示光源颜色和光照强度
        // 参数1：0xffffff是纯白光,表示光源颜色
        // 参数2：1.0,表示光照强度，可以根据需要调整
        light = new THREE.PointLight(0xffffff, 1.0);
        //点光源位置
        light.position.set(150, 150, 150); // 点光源放在x轴上

        scene.add(light); // 点光源添加到场景中

        const gui = getGui();
        var f = gui.addFolder('点光源');
        f.add(light.position, 'x', -300, 300, 1);
        f.add(light.position, 'y', -300, 300, 1);
        f.add(light.position, 'z', -300, 300, 1);
        f.open();
        guicache = f;
        const sphereSize = 10;
        helper = new THREE.PointLightHelper(light, sphereSize);
        scene.add(helper);
      },
      spot: () => {
        clear();

        const code = `// 聚光灯光源
// 参数1: 表示光源颜色
const SpotLight = new THREE.SpotLight(0xffffff);
// 点光源位置
SpotLight.position.set(100, 300, 100);
scene.add(SpotLight); // 聚光灯添加到场景中
const sphereSize = 10;
// 添加聚光灯辅助查看器 参数一: 聚光灯对象
const SpotLightHelper = new THREE.SpotLightHelper(SpotLight);
scene.add(SpotLightHelper);`;
        let cssCode = Prism.highlight(code, Prism.languages.javascript);
        codeEl.value.innerHTML = cssCode;

        light = new THREE.SpotLight(0xffffff);
        light.position.set(100, 300, 100);
        scene.add(light);

        const gui = getGui();
        var f = gui.addFolder('聚光灯');
        f.add(light.position, 'x', -300, 300, 1);
        f.add(light.position, 'y', -300, 300, 1);
        f.add(light.position, 'z', -300, 300, 1);
        f.open();
        guicache = f;

        helper = new THREE.SpotLightHelper(light);
        scene.add(helper);
      },
      ambient: () => {
        clear();

        const code = `// 环境光光源具备两个参数 参数1: 表示光源颜色 参数2: 表演光的强度
const AmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
// 因为环境光是全局共享光源,所以没有位置,没有辅助对象,只需要添加至场景即可
scene.add(AmbientLight);`;
        let cssCode = Prism.highlight(code, Prism.languages.javascript);
        codeEl.value.innerHTML = cssCode;

        light = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(light);

        const gui = getGui();
        var f = gui.addFolder('环境光');
        f.add(light, 'intensity', 0, 1, 0.1);
        f.open();
        guicache = f;
      },
      directional: () => {
        clear();

        const code = `// 平行光具备两个参数 参数1: 表示光源颜色 参数2: 表演光的强度
const DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
// 平行光有些特殊 不只需要设置光源的位置还需要设置光源的朝向,一般来讲直接指向某个物体
DirectionalLight.position.set(80, 100, 50);
DirectionalLight.target = mesh;
scene.add(DirectionalLight);
const DirectionalLightHelper = new THREE.DirectionalLightHelper(light, 5);
scene.add(DirectionalLightHelper);
`;
        let cssCode = Prism.highlight(code, Prism.languages.javascript);
        codeEl.value.innerHTML = cssCode;

        light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(80, 100, 50);
        light.target = mesh;
        scene.add(light);

        const gui = getGui();
        var f = gui.addFolder('平行光');
        f.add(light.position, 'x', -300, 300, 1);
        f.add(light.position, 'y', -300, 300, 1);
        f.add(light.position, 'z', -300, 300, 1);
        f.open();
        guicache = f;

        helper = new THREE.DirectionalLightHelper(light, 5);
        scene.add(helper);
      }
    };

    onMounted(() => {
      if (!boxEl.value) {
        return;
      }

      // 创建3D场景对象Scene
      scene = new THREE.Scene();
      //创建一个长方体几何对象Geometry
      const geometry = new THREE.BoxGeometry(100, 100, 100);
      //创建一个材质对象Material
      const material = new THREE.MeshLambertMaterial({
        color: 0x0000ff // 0xff0000设置材质颜色为红色
      });

      // AxesHelper：辅助观察的坐标系
      const axesHelper = new THREE.AxesHelper(100);
      scene.add(axesHelper);

      // 两个参数分别为几何体geometry、材质material
      mesh = new THREE.Mesh(geometry, material); // 网格模型对象Mesh
      // 设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0, 0, 0);
      scene.add(mesh);

      // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
      const width = boxEl.value.clientWidth; // 宽度
      const height = boxEl.value.clientHeight; // 高度
      // 实例化一个透视投影相机对象
      // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
      // const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
      camera = new THREE.PerspectiveCamera(90, width / height, 1, 3000);

      // 相机在Three.js三维坐标系中的位置
      // 根据需要设置相机位置具体值
      camera.position.set(100, 100, 100);
      // 指向mesh对应的位置
      camera.lookAt(mesh.position);

      // 创建渲染器对象
      const renderer = new THREE.WebGLRenderer();

      // 设置three.js渲染区域的尺寸(像素px)
      renderer.setSize(width, height);

      boxEl.value.appendChild(renderer.domElement);

      const controller = new OrbitControls(camera, renderer.domElement);
      // 启用阻尼惯性
      controller.enableDamping = true;
      // 每一帧都会执行 类似于 window.requestAnimationFrame 动画帧
      renderer.setAnimationLoop(() => {
        controller.update();
        renderer.render(scene, camera); // 执行渲染操作
      });

      const gui = getGui();
      var testObj2 = {
        type: '点光源',
        点光源: 'point',
        聚光灯: 'spot',
        环境光: 'ambient',
        平行光: 'directional'
      };
      gui
        .add(testObj2, 'type', ['点光源', '环境光', '平行光', '聚光灯'])
        .onChange((e) => {
          AxisObj[testObj2[e]]?.();
        });
      AxisObj[testObj2[testObj2.type]]?.();
    });

    return () => (
      <>
        <div style='width:100%;'>
          <div class='language-javascript' data-ext='js'>
            <pre class='language-javascript'>
              <code ref={codeEl}></code>
            </pre>
          </div>
        </div>
        <div style={`height:500px;position: relative;`} ref={boxEl}></div>
      </>
    );
  }
});
