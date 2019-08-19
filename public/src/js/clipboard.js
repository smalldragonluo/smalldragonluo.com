'use strict';

require('../less/global.less');
require('../less/clipboard.less');
require('./lib/base');

const { throttle } = require('./lib/utils');

$(function() {
  $('.clipboard-content textarea').on('change', throttle(function(event) {
    const value = event.target.value;

    $.ajax({
      type: 'POST',
      url: '/api/clipboard/update',
      data: JSON.stringify({
        value: value,
      }),
      success: function(data) {
        console.log('save response:', data);
      },
      contentType: 'application/json',
      dataType: 'json',
    });
  }, 1000, null, true));
});
