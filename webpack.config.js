/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description webpack.config.js
 */

'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const buildEnv = process.env.NODE_ENV;
const cwd = __dirname;
const srcDir = path.join(cwd, 'public', 'src');
const distDir = path.join(cwd, 'public', 'build', 'assets');
const publicPath = buildEnv === 'development' ? '/assets/' : 'https://smalldragonluo.com/assets/';

const defaultConfig = {
  mode: buildEnv,
  context: cwd,
  output: {
    filename: 'js/[name].min.js',
    path: distDir,
    publicPath: publicPath,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(png|jpg|bmp|gif|webp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // fallback, config for file-loader
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)([?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(distDir, {}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(buildEnv)
    }),
    new CopyWebpackPlugin([
      { from: './js/compiled/', to: path.join(distDir, 'js'), toType: 'dir' },
      { from: './html/', to: path.join(distDir, 'html'), toType: 'dir' },
      { from: './images/', to: path.join(distDir, 'images'), toType: 'dir' }
    ], {
      context: srcDir
    }),
    // new GenerateSW({
    //   inlineWorkboxRuntime: true,
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   cleanupOutdatedCaches: true,
    //   swDest: './js/service-worker.js',
    //   // exclude: [/\.(png|jpg)$/],
    //   navigationPreload: true,
    //   runtimeCaching: [
    //     {
    //       urlPattern: /\/$/,
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'page-cache',
    //         expiration: {
    //           maxEntries: 20,
    //           maxAgeSeconds: 30 * 24 * 60 * 60,
    //         },
    //       },
    //     },
    //     {
    //       urlPattern: /.+\.json$/,
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'json-cache',
    //         expiration: {
    //           maxEntries: 50,
    //           maxAgeSeconds: 30 * 24 * 60 * 60,
    //         },
    //       },
    //     },
    //   ]
    // }),
    // new InjectManifest({
    //   swSrc: './js/service-worker.js',
    // }),
  ]
};

if (buildEnv === 'development') {
  defaultConfig.devtool = 'source-map';
  defaultConfig.devServer = {
    contentBase: distDir,
    hot: true
  };
  defaultConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // https://github.com/webpack-contrib/webpack-bundle-analyzer
  // defaultConfig.plugins.push(new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
  //   analyzerHost: '127.0.0.1',
  //   analyzerPort: 6001,
  //   openAnalyzer: false
  // }));
} else if (buildEnv === 'production') {
  defaultConfig.plugins.push(new UglifyJSPlugin({ sourceMap: false }));
  // defaultConfig.plugins.push(new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
  //   analyzerMode: 'static',
  //   openAnalyzer: false,
  //   reportFilename: 'deps-analyze.html',
  // }));
}

const mobileConfig = merge(defaultConfig, {
  entry: function() {
    const entry = {
      'index-mobile': path.join(srcDir, 'js/index-mobile.js')
    };

    // fs.readdirSync(path.join(srcDir, 'js'))
    //   .map(function(fileName) {
    //     let matched = fileName.match(/(.+)\.js/);
    //     return {
    //       name: matched && matched[1],
    //       path: path.join(path.join(srcDir, 'js'), fileName)
    //     };
    //   })
    //   .filter(function(fileInfo) {
    //     return fs.statSync(fileInfo.path).isFile() && fileInfo.path.match(/\.js$/);
    //   })
    //   .forEach(function(fileInfo) {
    //     entry[fileInfo.name] = fileInfo.path;
    //   });

    if (buildEnv === 'development') {
      // add HMR chunk
      Object.keys(entry).forEach((key) => {
        entry[key] = [entry[key], 'webpack-hot-middleware/client?reload=true']
      });
    }

    return entry;
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /node_modules/
      },
      {
        test: /\.css$|\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          'less-loader'
        ],
        exclude: /node_modules/
      },
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
});

const pcConfig = merge(defaultConfig, {
  entry: {
    bootstrap: path.join(srcDir, 'js/bootstrap.js'),
    index: path.join(srcDir, 'js/index.js'),
    clipboard: path.join(srcDir, 'js/clipboard.js'),
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
    new ExtractTextPlugin('css/[name].min.css', {
      // allChunks: false default
    })
  ]
});

module.exports = buildEnv === 'development' ?
  [
    mobileConfig,
    // pcConfig
  ] : [
    mobileConfig,
    pcConfig
  ];
