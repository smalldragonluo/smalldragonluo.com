'use strict';

import { useState } from 'react';

import styles from './AddWidget.less';

function AddForm() {

  return (
    <div>
      {/*<input className="c-form-input" {...{ value, placeholder, onChange, disabled }} />*/}
    </div>
  );
}

export default function Widget() {
  // const [open, setOpen] = useState(false);

  return (
    0 ?
      <AddForm /> :
      <div className={styles.addWidget}></div>
  );
}
