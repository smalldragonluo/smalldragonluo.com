/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description app
 */

'use strict';

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);
const {logger} = require('./lib/utils');

const router = express.Router();
const configMiddleware = require('./middlewares/index');
const configRoutes = require('./routes');
const configAPIRoutes = require('./apiRoutes');
const mountRenderer = require('./lib/renderer');

// assets dev
if (app.get('env') === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  // HMR
  app.use(webpackDevMiddleware(compiler, {
    publicPath: (config.output || config[0].output).publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

// static（local only，online we use nginx）
app.use(express.static(path.join(__dirname, '../public/build')));

// set view engine
mountRenderer(app);

// set middleware
configMiddleware(app);

// page routes
configRoutes(app);

// API routes
app.use('/api', router);
configAPIRoutes(app, router);

app.use(function(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).json({success: false});
});

http.listen(6001);
