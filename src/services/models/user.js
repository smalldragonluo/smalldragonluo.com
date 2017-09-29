/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description user model
 */

'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../../db/instance');

const user = sequelize.define('user', {
  userId: {
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING(20),
    field: 'name',
    allowNull: true
  }
}, {
  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,
  tableName: 'qq_user',
  comment: 'employee table'
});

module.exports = user;
