import React from 'react';
import { confirm, alert } from '.';

const Demo: React.FC = () => {
  const onYes = () => {
    console.log('你点击了yes');
  };
  const onNo = () => {
    console.log('你点击了no');
  };
  return (
    <>
      <button onClick={() => alert('1')}>alert</button>
      <button onClick={() => confirm('1', onYes, onNo)}>confirm</button>
    </>
  );
};

export default Demo;
