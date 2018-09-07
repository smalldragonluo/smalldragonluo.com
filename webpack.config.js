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
const CleanWebpackPlugin = require('clean-webpack-plugin');
const buildEnv = process.env.BUILD_ENV;
const cwd = process.cwd();
const srcDir = path.join(cwd, 'public', 'src');
const distDir = path.join(cwd, 'public', 'build', 'assets');
const publicPath = './assets/';

const config = {
  // default
  target: 'web',
  context: cwd,
  // 目录下直接子 JS 文件作为入口
  entry: function() {
    const entry = {};

    fs.readdirSync(path.join(srcDir, 'js'))
      .map(function(fileName) {
        let matched = fileName.match(/(.+)\.js/);
        return {
          name: matched && matched[1],
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
    filename: 'js/[name].min.js',
    path: distDir,
    publicPath: publicPath,
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
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      },
      {
        test: /\.(png|jpg|bmp|gif|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(distDir, {}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(buildEnv)
    }),
    new ExtractTextPlugin('css/[name].min.css', {
      // allChunks: false default
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 3
    }),
    new CopyWebpackPlugin([
      {from: './js/compiled/', to: path.join(distDir, 'js'), toType: 'dir'},
      {from: './html/', to: path.join(distDir, 'html'), toType: 'dir'},
      {from: './images/', to: path.join(distDir, 'images'), toType: 'dir'}
    ], {
      context: srcDir
    })
  ],
  externals: [
    // {
    //   // a: false, // a is not external
    //   // b: true, // b is external `module.exports = b`
    //   // "./c": "c", // "./c" is external `module.exports = c`
    //   // "./d": "var d", // "./d" is external `module.exports = ./d`  <-- would be syntax error
    //   // "./f": "commonjs2, ./a/b" // "./f" is external `module.exports = require("./a/b")`
    //   // "./f": "commonjs, ./a/b" // ...same as commonjs2
    //   // "./f": "this ./a/b", // "./f" is external `(function() { module.exports = this["./a/b"]; }())`
    // },
    // function(context, request, callback) {
    //   if (/^externals-/.test(request)) {
    //     return callback(null, "var " + request);
    //   }
    //   callback();
    // }
  ]
};

if (buildEnv === 'development') {
  config.devtool = 'source-map';
  // 非 dev-server 或者 middleware 没暖用
  // config.plugins.push(new webpack.HotModuleReplacementPlugin({}));
} else if (buildEnv === 'production') {
  config.plugins.push(new UglifyJSPlugin({sourceMap: true}));
}

// can supply multiple target
module.exports = [config];
