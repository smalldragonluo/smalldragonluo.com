/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 */

'use strict';

import React from 'react';

export default function Logo({ size }) {
  return (
    <div
      className="g-logo"
      style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `url(${require('../../images/avatar.jpg')}) center center /  ${size}px ${size}px no-repeat`,
      borderRadius: '50%',
      display: 'inline-block'
    }}
    />
  );
}
