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
const configAPIRoutes = require('./routes');
const listService = require('./services/list');
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

// API routes
app.use('/api', router);
configAPIRoutes(app, router);

// page routes
app.get('/', function(req, res) {
  req.query.pageSize = 100;
  listService.getListCache(req.query).then(function(data) {
    res.render('index', {
      list: data
    });
  });
});

app.get('/koala', function(req, res) {
  res.render('koala', {});
});

app.get('/about', function(req, res) {
  res.json({
    message: '敬请期待',
    data: new Date()
  });
});

// 币
// require('./stock')(app, io);

app.use(function (err, req, res, next) {
  logger.error(err.stack);
  res.status(500);
});

http.listen(6001);
