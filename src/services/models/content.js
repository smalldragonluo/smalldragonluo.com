/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description content model
 */

'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../../db/instance');

const content = sequelize.define('content', {
  contentId: {
    type: Sequelize.INTEGER,
    field: 'id',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  content: {
    type: Sequelize.TEXT,
    field: 'content',
    allowNull: true
  },
  creatorId: {
    type: Sequelize.INTEGER,
    field: 'creatorId'
  }
}, {
  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,
  tableName: 'qq_content',
  comment: 'content table'
});

module.exports = content;
