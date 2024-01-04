const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    component: './component.js',
    element: './element.js',
  },
  output: {
    library: ['internal', '[name]'], 
    libraryTarget: 'umd',
    filename: '[name].js',
    globalObject: 'this',
  },
  resolve: {
    alias: {
      codewave: path.resolve(__dirname, '../../../model/ui-model')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ]
}