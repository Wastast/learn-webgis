import type { App } from 'vue';

export const setupComponents = (app: App) => {
  const CssPageList = import.meta.globEager('./css/*/*.tsx');
  const CesiumPageList = import.meta.globEager('./cesium/*/*.tsx');
  // const ThreePageList = import.meta.globEager('./three/*.tsx');
  const FileList = [
    ...Object.entries(CssPageList),
    ...Object.entries(CesiumPageList)
    // ...Object.entries(ThreePageList)
  ];
  const regEx = new RegExp('.+/(.+)$');
  const comList = FileList.reduce((a, b: any) => {
    // console.log(regEx);
    const filePrefix = regEx.exec(b[0])[1].replace('.tsx', '');
    const com = b[1].default;
    a[filePrefix] = com;
    return a;
  }, {});
  Object.entries(comList).forEach(([key, val]) => {
    app.component(key, val);
  });
};
