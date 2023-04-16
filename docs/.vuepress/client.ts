import { defineClientConfig } from '@vuepress/client';
import { setupComponents } from './demoPage/index';
import Layout from './theme/Layout';
import HomePage from './theme/HomePage';
import 'ant-design-vue/dist/antd.css';
import './styles/reset.scss';

export default defineClientConfig({
  layouts: {
    HomePage,
    Layout: Layout
  },
  enhance({ app, router, siteData }) {
    setupComponents(app);
    app.mixin({
      mounted() {
        const htmlEl = window?.document.querySelector('html');
        const scheme = window.localStorage.getItem('vuepress-color-scheme');
        setTimeout(() => {
          if (scheme === 'drak') {
            htmlEl?.classList.toggle('dark');
          }
        }, 0);
      }
    });
  },
  setup() {},
  rootComponents: []
});
