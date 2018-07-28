/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description content model
 */

'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../../db/instance');

const kvPair = sequelize.define('kvPair', {
  id: {
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  groupId: {
    type: Sequelize.INTEGER,
    field: 'group_id'
  },
  key: {
    type: Sequelize.STRING,
    field: 'key',
    allowNull: false
  },
  value: {
    type: Sequelize.STRING,
    field: 'value'
  }
}, {
  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,
  tableName: 'kv_pair',
  comment: '键值对'
});

module.exports = kvPair;
