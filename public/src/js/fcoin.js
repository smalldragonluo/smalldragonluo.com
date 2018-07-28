/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description index
 */

'use strict';

require('../less/global.less');
require('../less/fcoin.less');
require('./lib/base');

const Tpl = require('./lib/tpl');
const {getRecentTime, throttle} = require('./lib/utils');

$(function() {
  let myChart = echarts.init(document.getElementById('main-chart'));





  const socket = io();

  socket.on('connect', function(data) {
    console.log(data);
  });
  socket.on('quotation', function(data) {
    console.log('quotation', data);
    data = data.ticker;

    data.pop();
    data.pop();


    var dataAxis = [
      "最新成交价",
      "最近一笔成交的成交量",
      "最大买一价",
      "最大买一量",
      "最小卖一价",
      "最小卖一量",
      "24小时前成交价",
      "24小时内最高价",
      "24小时内最低价"/*,
      "24小时内基准货币成交量, 如 btcusdt 中 btc 的量",
      "24小时内计价货币成交量, 如 btcusdt 中 usdt 的量"*/
    ];
    var yMax = Math.max.apply(Math, data);
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    let option = {
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : dataAxis,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'直接访问',
          type:'bar',
          barWidth: '60%',
          data: data
        }
      ]
    };

    myChart.setOption(option);
  });
  socket.emit('data', {data: 'data from client'});
});
