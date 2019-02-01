/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 */

'use strict';

import React from 'react';

export default function Icon({ url, width = 25, height = 25 }) {
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
      background: `url(${url}) center center /  ${width}px ${height}px no-repeat`
    }}
    />
  );
}
