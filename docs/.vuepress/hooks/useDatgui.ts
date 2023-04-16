import * as dat from '../piugin/dat.gui/dat.gui';
import { onBeforeUnmount, onMounted, isRef } from 'vue';

export default (node) => {
  let gui = null;
  onMounted(() => {
    if (node && isRef(node)) {
      gui = new dat.GUI({
        parentNode: node.value
      });
    }
  });
  onBeforeUnmount(() => {
    gui?.destroy();
  });
  return {
    getGui() {
      return gui;
    },
    removeFolder(folder) {
      folder && gui.removeFolder(folder);
    }
  };
};
