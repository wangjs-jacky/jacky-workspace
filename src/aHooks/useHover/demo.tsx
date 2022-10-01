import React from 'react';
import { useRef } from 'react';
import useHover from '.';

const Index: React.FC = () => {
  const domRef = useRef<any>();
  const isHover = useHover(domRef);
  return (
    <h1 ref={domRef} style={{ padding: '20px' }}>
      {' '}
      鼠标是否移入: {isHover ? '是' : '否'}
    </h1>
  );
};

export default Index;
