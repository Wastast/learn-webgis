import { defineComponent, ref, watch, onMounted } from 'vue';
import styl from './index.module.scss';
import IconFont from '../../../components/IconFont';
import { useStorage } from '@vueuse/core';

export default defineComponent({
  setup() {
    let htmlEl;
    let darkStorage;
    const ThemeCode = ref('');

    onMounted(() => {
      htmlEl = window?.document.querySelector('html');
      darkStorage = useStorage('vuepress-color-scheme', 'light');
      ThemeCode.value = darkStorage.value;
      watch(
        () => ThemeCode.value,
        () => {
          const isDarkMode = ThemeCode.value === 'drak';
          if (isDarkMode) {
          }
          darkStorage.value = ThemeCode.value;
        },
        {
          immediate: true
        }
      );
    });
    return () => (
      <div
        class={styl.toggletheme}
        onClick={() => {
          const isBool = htmlEl?.classList.toggle('dark');
          ThemeCode.value = isBool ? 'drak' : 'light';
        }}
        title={ThemeCode.value === 'drak' ? '夜晚' : '白天'}
      >
        <IconFont
          type={ThemeCode.value === 'drak' ? 'sun' : 'moon'}
          size={20}
        ></IconFont>
      </div>
    );
  }
});
