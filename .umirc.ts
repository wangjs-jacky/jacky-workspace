import { defineConfig, utils } from 'dumi';
const path = require("path");

export default defineConfig({
  title: 'jacky-workspace-dumi',
  favicon:
    '/logo.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: '/jacky-workspace-html/',
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
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
    memo.module
      .rule('svg')
      .test(/\.svg?/)
      .uses.delete('file-loader');

    /* createCSSRule({
      lang: 'sass',
      test: /\.(sass|scss)(\?.*)?$/,
      loader: require.resolve('sass-loader'),
      options: utils.deepmerge(
        {
          implementation: require('sass'),
        },
        api.config.sass || {},
      ),
    }); */

    return memo;

  }
});
