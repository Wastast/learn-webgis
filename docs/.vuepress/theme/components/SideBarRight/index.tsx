import { defineComponent, computed, onMounted, ref } from 'vue';
import styl from './index.module.scss';
import { usePageData } from '@vuepress/client';

export default defineComponent({
  setup() {
    const pageData = usePageData();
    const hashVal = ref('');
    function deepList(list) {
      let arr = [];
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        arr.push(element);
        if (element.children.length > 0) {
          arr.push(...deepList(element.children));
        }
      }
      return arr;
    }
    const sideBarList = computed(() => {
      const list = deepList(pageData.value.headers);
      return list;
    });

    onMounted(() => {
      hashVal.value = window.location.hash;
      window.addEventListener('hashchange', () => {
        hashVal.value = window.location.hash;
      });
    });
    return () => (
      <div class={styl.sidebarright}>
        {sideBarList.value.map((e) => (
          <div
            class={[
              styl['sidebar-item'],
              styl[`level-${e.level}`],
              hashVal.value === e.link ? styl.active : ''
            ]}
            title={e.title}
          >
            <a href={e.link}>{e.title}</a>
          </div>
        ))}
      </div>
    );
  }
});
