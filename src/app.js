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
const configRoutes = require('./routes');
const configAPIRoutes = require('./apiRoutes');
const mountRenderer = require('./lib/renderer');

// CORS（API and local assets, online assets we use nginx）
app.use(function(req, res, next) {
  if (req.headers.origin && req.headers.origin.match(/^https:\/\/blog.smalldragonluo.com/)) {
    res.header('Access-Control-Allow-Origin', 'https://blog.smalldragonluo.com/');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'range');
  }
  next();
});
// static（local only，online we use nginx）
app.use(express.static(path.join(__dirname, '../public/build')));

// set view engine
mountRenderer(app);

// session
app.use(require('./middlewares/session'));
// accessLog
app.use(require('./middlewares/accessLog'));

// page routes
configRoutes(app, router);
// API routes
app.use('/api', router);
configAPIRoutes(app, router);

app.use(function (err, req, res, next) {
  logger.error(err.stack);
  res.status(500);
});

http.listen(6001);
