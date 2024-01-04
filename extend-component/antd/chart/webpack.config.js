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
//   externals: {
//     'react': {
//       'commonjs': 'react',
//       'commonjs2': 'react',
//       'amd': 'react',
//       'root': 'React'
//     }
//   },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env",
                    ["@babel/preset-react", {"runtime": "automatic"}]]
              }
            }
        },
    ]
  },
}