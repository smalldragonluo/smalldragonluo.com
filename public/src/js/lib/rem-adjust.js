/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description ren
 */

'use strict';

// rem 适配
$(function() {
  var fontSize = 37.5;

  if (navigator.userAgent.match(/pad|mobile/i)) {
    console.log(window.innerWidth);
    $('meta[name="viewport"]').attr('content', `width=${window.innerWidth * 4}, initial-scale=0.25, maximum-scale=1, user-scalable=no`);
    fontSize = document.documentElement.clientWidth / 10;
  }

  $('html').css('font-size', fontSize + 'px');
});
