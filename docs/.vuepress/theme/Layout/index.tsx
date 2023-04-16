import { defineComponent, onMounted } from 'vue';
import styl from './index.module.scss';
import BackToTop from '../components/BackToTop';
import ToggleTheme from '../components/ToggleTheme';
import Navbar from '../components/NavBar';
import SideBarRight from '../components/SideBarRight';
import Page from '@theme/Page.vue';
import SideBar from '@theme/Sidebar.vue';

export default defineComponent({
  setup() {
    onMounted(() => {});
    return () => (
      <div class={styl['custom-container']}>
        <Navbar></Navbar>
        <Page></Page>
        <SideBar></SideBar>
        {/* <Navbar></Navbar>*/}
        {/* <ParentLayout></ParentLayout> */}
        <SideBarRight></SideBarRight>
        <div class={styl.btns}>
          <BackToTop></BackToTop>
          <ToggleTheme></ToggleTheme>
        </div>
      </div>
    );
  }
});
