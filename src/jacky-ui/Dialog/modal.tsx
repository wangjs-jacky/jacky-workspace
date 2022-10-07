import React from 'react';
import { modal } from '.';

const Modal: React.FC = () => {
  const openModal = () => {
    const { close } = modal(
      <div>
        你好
        <button onClick={() => close()}>close</button>
      </div>,
    );
  };
  return <button onClick={openModal}>modal</button>;
};

export default Modal;
