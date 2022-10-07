import React from 'react';
import Dialog from '.';
import useBoolean from '../../aHooks/useBoolean';

const Demo: React.FC = () => {
  const [isShow, { toggle, setFalse }] = useBoolean(false);
  return (
    <>
      <button onClick={toggle}>切换</button>
      <Dialog
        visible={isShow}
        closeOnClickMask={true}
        buttons={[
          <button onClick={setFalse}>button1</button>,
          <button onClick={setFalse}>button2</button>,
        ]}
        onClose={setFalse}
      >
        <strong>hi</strong>
      </Dialog>
    </>
  );
};

export default Demo;
