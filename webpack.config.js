/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description webpack.config.js
 */

'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildEnv = process.env.BUILD_ENV;
const cwd = process.cwd();
const srcDir = path.join(cwd, 'public', 'src');
const distDir = path.join(cwd, 'public', 'build');

const config = {
  // default
  target: 'web',
  context: cwd,
  entry: fs.readdirSync(path.join(srcDir, 'js'))
    .map(function(fileName) {
      return path.join(path.join(srcDir, 'js'), fileName);
    })
    .filter(function(filePath) {
      return fs.statSync(filePath).isFile() && filePath.match(/\.js$/);
    }),
  output: {
    filename: '[name].min.js',
    path: path.join(distDir, 'js'),
    publicPath: 'https://smalldragonluo.com/assets/js/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(buildEnv)
    }),
    new ExtractTextPlugin(path.join(distDir, 'css', '[name].css')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};

if (buildEnv === 'development') {
  config.devtool = 'source-map';
  config.plugins.push(new webpack.HotModuleReplacementPlugin({}));
} else if (buildEnv === 'production') {
  config.plugins.push(new UglifyJSPlugin({sourceMap: true}));
}

// can supply multiple target
module.exports = [config];
