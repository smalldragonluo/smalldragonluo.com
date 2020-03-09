/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description index
 */

'use strict';

require('../less/global.less');
require('../less/index.less');
require('./lib/base');
require('./lib/registerServiceWorker');

const Tpl = require('./lib/tpl');
const {getRecentTime, throttle} = require('./lib/utils');

$(function() {
  $.get('/api/list').then(function({data}) {
    // format date
    data.forEach(function(item) {
      item.createdAt = getRecentTime(new Date(item.createdAt));
      item.content = item.content.replace('\n', '<br>');
    });

    var renderer = new Tpl(`
      <% list.forEach(function(item) { %>
        <div class="post">
        <div class="post-user">
          <img class="post-avatar" src="<%= item.user.avatar %>"/>
          <span class="post-nickname"><%= item.user.userName %></span>
          <span class="post-date"><%= item.createdAt %></span>
        </div>
        <span class="page-desc content-text"><%= item.content %></span>
      </div>
      <% }); %>
    `);

    $('.post-list').append(renderer({list: data}));
  });

  // wx.ready(function(){
  //   // wx.chooseImage({
  //   //   count: 1, // 默认9
  //   //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  //   //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  //   //   success: function (res) {
  //   //     var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
  //   //   }
  //   // });
  //
  //   wx.onMenuShareTimeline({
  //     title: document.title,  // 分享标题
  //     link: location.href,    // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  //     imgUrl: 'https://smalldragonluo.com/assets/images/favicon.jpg',             // 分享图标
  //     success: function() {
  //       // 用户点击了分享后执行的回调函数
  //     }
  //   });
  //
  //   wx.onMenuShareAppMessage({
  //     title: document.title, // 分享标题
  //     desc: $('.page-desc:eq(0)').text() || $('meta[name="description"]').attr('content') || document.title, // 分享描述
  //     link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  //     imgUrl: 'https://smalldragonluo.com/assets/images/favicon.jpg', // 分享图标
  //     type: 'link', // 分享类型,music、video或link，不填默认为link
  //     dataUrl: '', // 如果 type 是 music 或 video，则要提供数据链接，默认为空
  //     success: function() {
  //       // 用户点击了分享后执行的回调函数
  //     }
  //   });
  // });

  // 瀑布流
  // var ref;
  // var active = true;
  // var loading = false;

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
