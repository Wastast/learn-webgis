import { defineComponent, onMounted, ref } from 'vue';
import styl from './index.module.scss';
import { useThrottledRefHistory } from '@vueuse/core';
import IconFont from '../../../components/IconFont';

const getScrollTop = () =>
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export default defineComponent({
  setup() {
    const scrollVal = ref(0);
    onMounted(() => {
      scrollVal.value = getScrollTop();
      window.addEventListener('scroll', () => {
        scrollVal.value = getScrollTop();
      });
    });
    return () => (
      <div
        class={styl.backtotop}
        onClick={() => {
          scrollToTop();
        }}
        style={{
          opacity: scrollVal.value > 500 ? 1 : 0
        }}
        title={'回到开始'}
      >
        <IconFont type='arrow-up' size={20}></IconFont>
      </div>
    );
  }
});
