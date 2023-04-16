import { defineComponent, onMounted, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { string } from 'vue-types';
import Prism from 'prismjs';
import { RadioGroup } from 'ant-design-vue';

const SetupScene = defineComponent({
  setup(props, ctx) {
    const boxEl = ref<HTMLDivElement>(null);
    onMounted(() => {
      if (!boxEl.value) {
        return;
      }
      // 创建3D场景对象Scene
      const scene = new THREE.Scene();
      //创建一个长方体几何对象Geometry
      const geometry = new THREE.BoxGeometry(100, 100, 100);
      //创建一个材质对象Material
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000 //0xff0000设置材质颜色为红色
      });
      // 两个参数分别为几何体geometry、材质material
      const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0, 10, 0);
      scene.add(mesh);

      // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
      const width = boxEl.value.clientWidth; //宽度
      const height = boxEl.value.clientHeight; //高度
      // 实例化一个透视投影相机对象
      // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

      // 相机在Three.js三维坐标系中的位置
      // 根据需要设置相机位置具体值
      camera.position.set(200, 200, 200);
      // 指向mesh对应的位置
      camera.lookAt(mesh.position);

      // 创建渲染器对象
      const renderer = new THREE.WebGLRenderer();

      //设置three.js渲染区域的尺寸(像素px)
      renderer.setSize(width, height);

      boxEl.value.appendChild(renderer.domElement);
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera); //执行渲染操作
      });
    });
    return () => <div style={`height:500px;`} ref={boxEl}></div>;
  }
});

const AddControls = defineComponent({
  setup(props, ctx) {
    const boxEl = ref<HTMLDivElement>(null);
    onMounted(() => {
      if (!boxEl.value) {
        return;
      }
      // 创建3D场景对象Scene
      const scene = new THREE.Scene();
      //创建一个长方体几何对象Geometry
      const geometry = new THREE.BoxGeometry(100, 100, 100);
      //创建一个材质对象Material
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000 //0xff0000设置材质颜色为红色
      });
      // 两个参数分别为几何体geometry、材质material
      const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0, 10, 0);
      scene.add(mesh);

      // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
      const width = boxEl.value.clientWidth; //宽度
      const height = boxEl.value.clientHeight; //高度
      // 实例化一个透视投影相机对象
      // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

      // 相机在Three.js三维坐标系中的位置
      // 根据需要设置相机位置具体值
      camera.position.set(200, 200, 200);
      // 指向mesh对应的位置
      camera.lookAt(mesh.position);

      // 创建渲染器对象
      const renderer = new THREE.WebGLRenderer();

      //设置three.js渲染区域的尺寸(像素px)
      renderer.setSize(width, height);

      boxEl.value.appendChild(renderer.domElement);

      const controller = new OrbitControls(camera, renderer.domElement);
      // 启用阻尼惯性
      controller.enableDamping = true;
      // 每一帧都会执行 类似于 window.requestAnimationFrame 动画帧
      renderer.setAnimationLoop(() => {
        controller.update();
        renderer.render(scene, camera); //执行渲染操作
      });
    });
    return () => <div style={`height:500px;`} ref={boxEl}></div>;
  }
});

const Axis = defineComponent({
  setup(props, ctx) {
    const boxEl = ref<HTMLDivElement>(null);
    const codeEl = ref(null);
    const val = ref('y');
    let camera = null;
    const options = [
      { label: 'z轴向上', value: 'z' },
      { label: 'y轴向上', value: 'y' },
      { label: 'x轴向上', value: 'x' }
    ];
    const AxisObj = {
      z: () => {
        const code = `camera.up.set(0, 0, 1);
camera.updateProjectionMatrix();`;
        let cssCode = Prism.highlight(code, Prism.languages.javascript);
        codeEl.value.innerHTML = cssCode;
        camera.up.set(0, 0, 1);
        camera.updateProjectionMatrix();
      },
      y: () => {
        const code = `camera.up.set(0, 1, 0);
camera.updateProjectionMatrix();`;
        let cssCode = Prism.highlight(code, Prism.languages.javascript);
        codeEl.value.innerHTML = cssCode;
        camera.up.set(0, 1, 0);
        camera.updateProjectionMatrix();
      },
      x: () => {
        const code = `camera.up.set(1, 0, 0);
camera.updateProjectionMatrix();`;
        let cssCode = Prism.highlight(code, Prism.languages.javascript);
        codeEl.value.innerHTML = cssCode;
        camera.up.set(1, 0, 0);
        camera.updateProjectionMatrix();
      }
    };
    watch(val, () => {
      AxisObj[val.value]?.();
    });
    onMounted(() => {
      if (!boxEl.value) {
        return;
      }
      // 创建3D场景对象Scene
      const scene = new THREE.Scene();
      //创建一个长方体几何对象Geometry
      const geometry = new THREE.BoxGeometry(100, 60, 40);
      //创建一个材质对象Material
      const material = new THREE.MeshBasicMaterial({
        color: 0xff0000, //0xff0000设置材质颜色为红色
        transparent: true, //开启透明
        opacity: 0.5 //设置透明度
      });

      // AxesHelper：辅助观察的坐标系
      const axesHelper = new THREE.AxesHelper(100);
      scene.add(axesHelper);

      // 两个参数分别为几何体geometry、材质material
      const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0, 0, 0);
      scene.add(mesh);

      // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
      const width = boxEl.value.clientWidth; //宽度
      const height = boxEl.value.clientHeight; //高度
      // 实例化一个透视投影相机对象
      // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
      // const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
      camera = new THREE.PerspectiveCamera(40, width / height, 1, 3000);

      // 相机在Three.js三维坐标系中的位置
      // 根据需要设置相机位置具体值
      camera.position.set(200, 200, 200);
      // 指向mesh对应的位置
      camera.lookAt(mesh.position);

      // 创建渲染器对象
      const renderer = new THREE.WebGLRenderer();

      //设置three.js渲染区域的尺寸(像素px)
      renderer.setSize(width, height);

      boxEl.value.appendChild(renderer.domElement);

      const controller = new OrbitControls(camera, renderer.domElement);
      // 启用阻尼惯性
      controller.enableDamping = true;
      // 每一帧都会执行 类似于 window.requestAnimationFrame 动画帧
      renderer.setAnimationLoop(() => {
        controller.update();
        renderer.render(scene, camera); //执行渲染操作
      });

      AxisObj[val.value]?.();
    });
    return () => (
      <>
        <RadioGroup
          value={val}
          onChange={(e) => {
            val.value = e.target.value;
          }}
          options={options}
        ></RadioGroup>
        <div style='width:100%;'>
          <div class='language-javascript' data-ext='js'>
            <pre class='language-javascript'>
              <code ref={codeEl}></code>
            </pre>
          </div>
        </div>
        <div style={`height:500px;`} ref={boxEl}></div>
      </>
    );
  }
});

export type SceneType = 'normal' | 'addcontrols' | 'axis';

export default defineComponent({
  props: {
    type: string<SceneType>().def('normal')
  },
  setup(props, ctx) {
    const ElObj = {
      normal: <SetupScene></SetupScene>,
      addcontrols: <AddControls></AddControls>,
      axis: <Axis></Axis>
    };
    return () => <>{ElObj[props.type]}</>;
  }
});
