/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description index
 */

'use strict';

var express = require('express');
var path = require('path');
var app = express();

// static
app.use(express.static(path.join(__dirname)));

// view
app.set('views', './views');
app.set('view engine', 'xtpl');

app.get('/', function(req, res) {
  res.render('index', {data: 1});
});

app.get('/about', function(req, res) {
  res.json({
    message: '敬请期待',
    data: new Date()
  });
});
app.listen(6001);
