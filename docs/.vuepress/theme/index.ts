import { defaultTheme } from '@vuepress/theme-default';
import { path } from '@vuepress/utils';

export const localTheme = (options) => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options)
  };
};
