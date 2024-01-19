const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    component: './index.js',
  },
  output: {
    library: ['internal', '[name]'], 
    libraryTarget: 'umd',
    filename: '[name].js',
    globalObject: 'this',
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
//   plugins: [
//     new CopyPlugin({
//       patterns: [
//         { from: "usage.json", to: "dist" },
        
//       ]
//     }),
//   ]
}