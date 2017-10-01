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
  },
  avatar: {
    type: Sequelize.STRING(256),
    field: 'avatar',
    allowNull: true
  },
  openId: {
    type: Sequelize.STRING(128),
    field: 'openId',
    allowNull: false
  }
}, {
  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,
  tableName: 'qq_user',
  comment: 'user table'
});

module.exports = user;
