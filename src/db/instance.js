/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description db
 */

'use strict';

const Sequelize = require('sequelize');

module.exports = new Sequelize('smalldragonluo', 'siqin', '66457315', {
  host: '123.56.230.53',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 20,
    min: 5,
    idle: 10000
  },
  timezone: '+08:00',
  charset: 'utf-8'
});
