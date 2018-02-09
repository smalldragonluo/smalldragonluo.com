/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description webpack.config.js
 */

'use strict';

const buildEnv = process.env.BUILD_ENV;
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {

  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'public/')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(buildEnv)
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};

if (buildEnv === 'development') {
  config.devtool = 'source-map';
}

module.exports = config;
