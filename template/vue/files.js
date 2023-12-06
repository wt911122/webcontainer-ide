
export const files = {
    'package.json': {
      file: {
        contents: `
        {
            "name": "vue2-demo",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
              "dev": "webpack-dev-server --config ./webpack.config.js",
              "build": "rm -rf ./dist && webpack --config ./webpack.product.config.js"
            },
            "author": "",
            "license": "ISC",
            "devDependencies": {
              "html-webpack-plugin": "^5.5.0",
              "vue-loader": "^15.0.0",
              "vue-template-compiler": "^2.6.11",
              "webpack": "^5.70.0",
              "webpack-cli": "^4.9.2",
              "webpack-dev-server": "^4.7.4"
            },
            "dependencies": {
              "vue": "^2.6.11"
            }
          }
          `,
      },
      'webpack.config.js': {
        file: {
            contents: `
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // resolve: {
  //     alias: {
  //       '@joskii/jflow': path.resolve(__dirname, '../src/index.js'),
  //     },
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};
`
        }
      },

    },
    'webpack.config.js': {
        file: {
            contents: `
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};
            `
        }
    },
    'src': {
        directory: {
            'index.js': {
                file: {
                    contents: `
import App from './App.vue';
const Vue = window.Vue;
Vue.config.productionTip = false;

const CloudUI = window.CloudUI;
installComponents(Vue, CloudUI);
console.log(Vue)
const app = new Vue({
  render: (h) => h(App),
});
app.$mount('#app')
console.log(app);

function installComponents(Vue, Components) {
    console.log(Components)
    const caseRE = /^[A-Z]/;
    const blackList = ['directives', 'filters', 'utils', 'mixins', 'blocks', 'vendors', 'install', 'default'];

    // 组件之间有依赖，有 install 的必须先安装
    Object.keys(Components).forEach((key) => {
        if (!caseRE.test(key)) { // 如果为大写则是组件
            if (!blackList.includes(key))
                console.error('不允许组件名首字母小写', key, Components[key]);
            return;
        }

        const Component = Components[key];
        if (Component.install) {
            Vue.component(key, Component);
            Component.install(Vue, key);
        }
    });
    Object.keys(Components).forEach((key) => {
        if (!caseRE.test(key)) { // 如果为大写则是组件
            if (!blackList.includes(key))
                console.error('不允许组件名首字母小写', key, Components[key]);
            return;
        }

        const Component = Components[key];
        Vue.component(key, Component);
        if (!Component.install) {
            Vue.component(key, Component);
        }
    });
}

                    `
                }
            },
            'index.html': {
                file: {
                    contents: `
<!DOCTYPE html>
<html>
  <head>
    <title>demo vue</title>
    <link crossorigin="anonymous" rel="stylesheet" href="https://ceph.lcap.hatest.163yun.com/lcap-test-static/packages/cloud-ui.vusion@0.18.0/dist-theme/index.css" />
    <script crossorigin="anonymous" src="https://ceph.lcap.hatest.163yun.com/lcap-test-static/packages/vue@2/dist/vue.min.js"></script>
    <script crossorigin="anonymous" src="https://ceph.lcap.hatest.163yun.com/lcap-test-static/packages/cloud-ui.vusion@0.18.0/dist-theme/index.js"></script>
    <script crossorigin="anonymous" src="https://ceph.lcap.hatest.163yun.com/lcap-test-static/packages/lcap-pc-template@0.8.1/cloudAdminDesigner.umd.min.js"></script>
    <script crossorigin="anonymous" src="https://ceph.lcap.hatest.163yun.com/lcap-test-static/packages/lcap-login@1.2.0/dist-theme/index.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`
                }
            },
            'App.vue': {
                file: {
                    contents: `
<template>
<div>
  <h1>Hello there!</h1>
  <u-text text="默认颜色"></u-text>
    <u-text color="primary" text="主要文本"></u-text>
    <u-text color="secondary" text="次要文本"></u-text>
    <u-text color="success" text="成功文本"></u-text>
    <u-text color="warning" text="警告文本"></u-text>
    <u-text color="error" text="错误文本"></u-text>
    <u-text color="disabled" text="禁默文本"></u-text>
  </div>
</template>

                    `
                }
            }
        }
    }
  };