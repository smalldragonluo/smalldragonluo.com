/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description exam
 */

'use strict';

require('../less/bootstrap-3.3.5/less/bootstrap.less');
require('../less/global.less');
require('../less/index.less');
require('./lib/base');

const Tpl = require('./lib/tpl');
const {getRecentTime, throttle} = require('./lib/utils');

$(function() {
  var pageData = $('.J_PageData').data('page-data');

  // format date
  pageData.list.forEach(function(item) {
    item.createdAt = getRecentTime(new Date(item.createdAt));
  });

  var renderer = new Tpl(`
    <% list.forEach(function(item) { %>
      <div class="post">
      <div class="post-user">
        <img class="post-avatar" src="<%= item.user.avatar %>"/>
        <span class="post-nickname"><%= item.user.userName %></span>
        <span class="post-date"><%= item.createdAt %></span>
      </div>
      <span class="content-text"><%= item.content %></span>
    </div>
    <% }); %>
  `);

  $('.post-list').append(renderer(pageData));

  // 瀑布流
  var ref;
  var active = true;
  var loading = false;

  // $(document).on('scroll', ref = throttle(function(e) {
  //   var dH = $(document).height();
  //   var sT = $(window).scrollTop();
  //   var wH = $(window).height();
  //
  //   var bottomLeft = dH - sT - wH;
  //
  //   if (active && !loading && bottomLeft < getPxByRem(1254 / 75)) {
  //     loadItems();
  //   }
  // }, 500, null, true));
  //
  // function loadItems() {
  //   loading = true;
  //
  //   self.loadMore(function(data) {
  //     // 没有更多，取消绑定
  //     if (!data.words.length) {
  //       $(document).off('scroll', ref);
  //       self.$container.find('.list').append('<li class="no-more">亲，已经看光光啦~</li>');
  //       return;
  //     }
  //
  //     if (self.rendered) {
  //       _renderItems(data);
  //     } else {
  //       self.render(data, function() {
  //         self.rendered = true;
  //         _renderItems(data);
  //       });
  //     }
  //   });
  // }
});
