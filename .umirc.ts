import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'jacky-workspace-dumi',
  favicon:
    '/logo.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  logo: '/logo.svg',
  alias: {
    "@": "/src/aHooks/"
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
