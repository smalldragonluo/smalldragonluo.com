/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description app
 */

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
var configAPIRoutes = require('./routes');

app.all('/*', function(req, res, next) {
  if (req.headers.host && req.headers.host.match(/([^.]+\.)*?smalldragonluo.com/)) {
    res.header('Access-Control-Allow-Origin', '*');
  }
  next();
});

// static（local only，online we use nginx）
app.use(express.static(path.join(__dirname, '../public/build')));

// set view engine
app.set('views', './src/views');
app.set('view engine', 'xtpl');

// session
app.use(require('./middlewares/session'));
// accessLog
app.use(require('./middlewares/accessLog'));

// API routes
app.use('/api', router);
configAPIRoutes(app, router);

// page routes
app.get('/', function(req, res) {
  res.render('index', {});
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

app.listen(6001);
