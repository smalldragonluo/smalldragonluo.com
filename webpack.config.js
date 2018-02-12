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
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const buildEnv = process.env.BUILD_ENV;
const cwd = process.cwd();
const srcDir = path.join(cwd, 'public', 'src');
const distDir = path.join(cwd, 'public', 'build', 'assets');
const publicPath = 'https://smalldragonluo.com/assets/';

const config = {
  // default
  target: 'web',
  context: cwd,
  // 目录下直接子 JS 文件作为入口
  entry: function() {
    const entry = {};

    fs.readdirSync(path.join(srcDir, 'js'))
      .map(function(fileName) {
        return {
          name: fileName.match(/(.+)\.js/) && fileName.match(/(.+)\.js/)[1],
          path: path.join(path.join(srcDir, 'js'), fileName)
        };
      })
      .filter(function(fileInfo) {
        return fs.statSync(fileInfo.path).isFile() && fileInfo.path.match(/\.js$/);
      })
      .forEach(function(fileInfo) {
        entry[fileInfo.name] = fileInfo.path;
      });

    return entry;
  },
  output: {
    filename: '[name].min.js',
    path: path.join(distDir, 'js'),
    publicPath: publicPath + 'js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
        loader: 'file-loader??publicPath=' + publicPath + 'fonts' + '&name=../fonts/[hash].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader??publicPath=' + publicPath + 'images' + '&name=../images/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(distDir, {}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(buildEnv)
    }),
    new ExtractTextPlugin('../css/[name].min.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 3
    }),
    new CopyWebpackPlugin([
      {from: './js/compiled/', to: '../build/js', toType: 'dir'},
      // {from: path.join(srcDir, 'html', '/**/*'), to: path.join(distDir, 'html')},
      // {from: path.join(srcDir, 'images', '/**/*'), to: path.join(distDir, 'images')}
    ], {
      context: srcDir
    })
  ]
};

console.log([
  {from: path.join(srcDir, 'js', 'compiled', '/**/*'), to: path.join(distDir, 'js')},
  {from: path.join(srcDir, 'html', '/**/*'), to: path.join(distDir, 'html')},
  {from: path.join(srcDir, 'images', '/**/*'), to: path.join(distDir, 'images')}
]);

if (buildEnv === 'development') {
  config.devtool = 'source-map';
  // 非 dev-server 或者 middleware 没暖用
  // config.plugins.push(new webpack.HotModuleReplacementPlugin({}));
} else if (buildEnv === 'production') {
  config.plugins.push(new UglifyJSPlugin({sourceMap: true}));
}

// can supply multiple target
module.exports = [config];
