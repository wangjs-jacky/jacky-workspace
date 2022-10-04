import React from 'react';
import Dialog from '.';
import useBoolean from '../../aHooks/useBoolean';

const Demo: React.FC = () => {
  const [isShow, { toggle }] = useBoolean(false);
  return (
    <div>
      <button onClick={() => toggle()}>切换</button>
      <Dialog visible={isShow} buttons={[<button>确定</button>, <button>取消</button>]}>
        <div>hi</div>
      </Dialog>
    </div>
  );
};

export default Demo;
