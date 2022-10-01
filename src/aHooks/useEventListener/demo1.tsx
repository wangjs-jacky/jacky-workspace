/* 监听键盘 */

import React, { useState } from 'react';
import useEventListener from '.';

export default () => {
  const [value, setValue] = useState('');

  useEventListener('keydown', (ev) => {
    setValue(ev.code);
  });

  return <p>Your press key is {value}</p>;
};
