import { defineComponent, ref, computed, reactive } from 'vue';
import { number, string } from 'vue-types';
import { RadioGroup, Radio } from 'ant-design-vue';

const bgColor = [
  '#ef342a',
  '#f68f26',
  '#4ba946',
  '#0376c2',
  '#c077af',
  '#f8d29d',
  '#b5a87f',
  '#d0e4a9',
  '#4dc7ec'
];

export type GridProp = 'display';

const Box = defineComponent({
  props: {
    idx: number()
  },
  setup(props) {
    return () => (
      <div
        style={{
          width: '50px',
          height: '50px',
          background: bgColor[props.idx],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '26px'
        }}
      >
        {props.idx + 1}
      </div>
    );
  }
});

// 参数文本
const Display = defineComponent({
  setup() {
    const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const gridType = ref('grid');
    const styl = computed(() => {
      return {
        margin: '10px',
        display: gridType.value,
        gridTemplateColumns: '50px 50px 50px',
        gridTemplateRows: '50px 50px 50px',
        gap: '2px'
      };
    });
    return () => (
      <>
        <div style={{ display: 'flex', gap: '10px' }}>
          display:
          <RadioGroup
            onChange={(e) => {
              gridType.value = e.target.value;
            }}
            value={gridType.value}
            name='radioGroup'
          >
            <Radio value='grid'>grid</Radio>
            <Radio value='inline-grid'>inline-grid</Radio>
          </RadioGroup>
        </div>
        <div>
          我是块级元素
          <div style={styl.value}>
            {arr.value.map((e, index) => (
              <Box idx={index}></Box>
            ))}
          </div>
          我是块级元素
        </div>
      </>
    );
  }
});

export default defineComponent({
  props: {
    type: string<GridProp>()
  },
  setup(props) {
    const ElDict = reactive({
      display: <Display></Display>
    });
    const RenderEl = computed(() => {
      return ElDict[props.type] || <div></div>;
    });
    return () => RenderEl.value;
  }
});
