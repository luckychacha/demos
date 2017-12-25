var webpack = require('webpack')
var path = require('path')


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-module/,
        query: {
    		  presets: ['es2015', 'react','stage-0']
    	  }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  }
}
