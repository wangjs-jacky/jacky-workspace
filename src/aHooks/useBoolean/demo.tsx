/* @ts-ignore */

import { Button, Space } from 'antd';
import React from 'react';
import useBoolean from '.';

export default () => {
  const [bol, { toggle, setFalse, setTrue }] = useBoolean(false);
  return (
    <Space>
      Effects: {bol + ''}
      <div>
        <Space>
          <Button type={'primary'} onClick={toggle}>
            {' '}
            Toggle
          </Button>
          <Button type={'primary'} onClick={setFalse}>
            {' '}
            Set false
          </Button>
          <Button type={'primary'} onClick={setTrue}>
            {' '}
            Set true
          </Button>
        </Space>
      </div>
    </Space>
  );
};
