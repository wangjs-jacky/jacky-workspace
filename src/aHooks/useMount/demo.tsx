import { message, Button } from 'antd';
import React from 'react';
import useMount from '.';
import useBoolean from '../useBoolean';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [flag, { toggle }] = useBoolean();
  return (
    <>
      <Button type="primary" onClick={() => toggle()}>
        {flag ? 'unmount' : 'mount'}
      </Button>
      {flag && <MyComponent />}
    </>
  );
};
