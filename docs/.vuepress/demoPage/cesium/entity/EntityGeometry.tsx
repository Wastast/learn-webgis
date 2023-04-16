import { defineComponent, ref, onMounted, watch } from 'vue';
import Prism from 'prismjs';

export default defineComponent({
  setup(props, ctx) {
    const codeEl = ref(null);
    onMounted(() => {
      setTimeout(() => {
        const cesiumAccessToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYTdmZGExYi03NDg3LTRlYjMtOTNlNS1lN2Y2YjRhY2RmZmUiLCJpZCI6OTkwOTQsImlhdCI6MTY1NjI5NzY3Nn0.iJxZxodXPrQ28iXEw1_mLsCIummsV87-OLPChOoZgdo';

        Cesium.Ion.defaultAccessToken = cesiumAccessToken;
        const viewer = new Cesium.Viewer('cesiumContainer');

        const blueBox = viewer.entities.add({
          name: 'Blue box',
          position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
          box: {
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            material: Cesium.Color.BLUE
          }
        });

        const redBox = viewer.entities.add({
          name: 'Red box with black outline',
          position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
          box: {
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK
          }
        });

        const outlineOnly = viewer.entities.add({
          name: 'Yellow box outline',
          position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 300000.0),
          box: {
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            fill: false,
            outline: true,
            outlineColor: Cesium.Color.YELLOW
          }
        });

        viewer.zoomTo(viewer.entities);
      }, 1000 * 1);
      //       let outputCssStr = `.triangle {
      //   width: 0;
      //   height: 0;
      //   border-style: solid;
      //   border-width: 0px;
      //   border-color: red;
      // }`;
      //       let cssCode = Prism.highlight(outputCssStr, Prism.languages.css);
      //       codeEl.value.innerHTML = cssCode;
    });
    watch(
      () => [],
      () => {
        console.log(3333);
      }
    );
    return () => (
      <>
        <div
          id='cesiumContainer'
          style={{
            width: '100%',
            height: '500px',
            background: 'red'
          }}
        ></div>
        <div style='width:100%;'>
          <h3>JS</h3>
          <div class='language-javascript' data-ext='js'>
            <pre class='language-javascript'>
              <code ref={codeEl}></code>
            </pre>
          </div>
        </div>
      </>
    );
  }
});
