import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { searchPlugin } from '@vuepress/plugin-search';
import { localTheme } from './theme/index';
import {
  Navbar,
  CssSideBar,
  TollSideBar,
  WebGisSideBar,
  PotreeSideBar,
  CesiumSideBar,
  QgisSideBar,
  ArcgisSideBar,
  BrowserSidebar,
  WebglSidebar
} from './menu';

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/learn-webgis/',
  title: '归乡博客',
  description: '个人学习记录,CSS,HTML,JS,WegGL,随笔,GIS',
  head: [
    [
      'script',
      {
        type: 'text/javascript',
        src: 'https://cloud-map.oss-cn-hangzhou.aliyuncs.com/cesium/v1.95/Cesium.js'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cloud-map.oss-cn-hangzhou.aliyuncs.com/cesium/v1.95/Widgets/widgets.css'
      }
    ]
  ],
  open: false,
  port: 4326,
  plugins: [
    searchPlugin({
      hotKeys: ['s', '/'],
      maxSuggestions: 5, // 搜索最大结果
      isSearchable: (page) => page.path !== '/' // 判断页面是否应该包含在搜索条件中
    })
  ],
  bundler: viteBundler({
    viteOptions: {
      base: './',
      plugins: [
        vueJsx({
          transformOn: true
        })
      ]
    }
  }),
  markdown: {
    code: {
      lineNumbers: false
    }
  },

  theme: localTheme({
    logo: '/icon/logo.jpg',
    colorModeSwitch: false,
    notFound: ['页面不存在'],
    backToHome: '回到主页',
    themePlugins: {
      nprogress: true,
      backToTop: false
    },
    navbar: Navbar,
    sidebar: {
      '/css/': CssSideBar,
      '/tools/': TollSideBar,
      '/webgis/': WebGisSideBar,
      '/potree/': PotreeSideBar,
      '/cesium/': CesiumSideBar,
      '/qgis/': QgisSideBar,
      '/arcgis/': ArcgisSideBar,
      '/browser/': BrowserSidebar,
      '/webgl/': WebglSidebar
      // '/three/': ThreeSideBar
    }
  })
});
