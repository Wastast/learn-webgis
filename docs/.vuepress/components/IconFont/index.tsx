import { defineComponent, computed } from 'vue';
import { number, string } from 'vue-types';
import './icon/iconfont.css';

export default defineComponent({
  props: {
    type: string(),
    size: number().def(16),
    color: string()
  },
  setup(props) {
    const styl = computed(() => {
      return {
        fontSize: props.size + 'px',
        color: props.color
      };
    });
    return () => (
      <div class={['iconfont', `icon-${props.type}`]} style={styl.value}></div>
    );
  }
});
