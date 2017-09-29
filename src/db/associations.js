/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description 表关联关系
 * @refer http://docs.sequelizejs.com/manual/tutorial/associations.html
 */

'use strict';

const user = require('../services/models/user');
const content = require('../services/models/content');

user.hasMany(content, {
  foreignKey: 'creatorId'
});

content.belongsTo(user, {
  foreignKey: 'creatorId'
});
