import React from 'react';
import Dialog from '.';
import useBoolean from '../../aHooks/useBoolean';

const Demo: React.FC = () => {
  const [isShow, { toggle, setTrue, setFalse }] = useBoolean(false);
  return (
    <div>
      <button onClick={() => toggle()}>切换</button>
      <Dialog
        visible={isShow}
        buttons={[
          <button onClick={setFalse}>确定</button>,
          <button onClick={setFalse}>取消</button>,
        ]}
        onClose={setFalse}
        closeOnClickMask={true}
      >
        <strong>hi</strong>
      </Dialog>
    </div>
  );
};

export default Demo;
