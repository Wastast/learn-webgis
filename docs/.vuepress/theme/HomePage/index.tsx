import { defineComponent, computed, ref } from 'vue';
import { usePageFrontmatter, useSiteLocaleData } from '@vuepress/client';
// import Navbar from '@theme/Navbar.vue';
import Navbar from '../components/NavBar';
import styl from './index.module.scss';
import {
  useThemeData,
  useThemeLocaleData
} from '@vuepress/plugin-theme-data/client';
import { usePageData, withBase } from '@vuepress/client';

export default defineComponent({
  name: 'HomePage',
  setup(props, ctx) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const SiteLocaleData = useSiteLocaleData();
    const precls = computed(() => {
      return SiteLocaleData.value.base.slice(0, -1);
    });

    return () => (
      <div class={styl['custom-home']}>
        <Navbar></Navbar>
        <div class={styl['home-wrapper']}>
          <div class={styl.banner}>
            <div class={styl['banner-conent']}>
              <div class={styl.hero}>
                <h1>{frontmatter.value.heroText}</h1>
                <p class={styl.description}>{frontmatter.value.tagline}</p>
              </div>
              <div class={styl.features}>
                {(frontmatter.value.features as any[]).map((e) => {
                  return (
                    <div class={styl.feature}>
                      <a href={precls.value + e.link}>
                        <img
                          class={styl['feature-img']}
                          src={withBase(e.imgUrl)}
                          alt=''
                        />
                        <h2>{e.title}</h2>
                        <p>{e.details}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <div class={styl['main-wrapper']}>
          <div></div>
        </div> */}
      </div>
    );
  }
});
