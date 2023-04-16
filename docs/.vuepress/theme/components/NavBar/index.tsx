import { defineComponent } from 'vue';
import NavbarBrand from '@theme/NavbarBrand.vue';
import NavbarItems from '@theme/NavbarItems.vue';
import './index.scss';

export default defineComponent({
  setup(props, ctx) {
    return () => (
      <div class={['nav-bar']}>
        <NavbarBrand />
        <div class='navbar-items-wrapper'>
          <NavbarSearch />
          <div style={{ width: '30px' }}></div>
          <NavbarItems class='can-hide' />
        </div>
      </div>
    );
  }
});
