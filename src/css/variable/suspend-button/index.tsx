import React, { useEffect, useRef } from 'react';
import './index.less';

const SuspendButton: React.FC = () => {
  const btnRef = useRef<any>();
  useEffect(() => {
    const btnStyle = btnRef.current.style;
    btnRef.current.addEventListener('mousemove', (e: any) => {
      btnStyle.setProperty('--x', `${e.offsetX}px`);
      btnStyle.setProperty('--y', `${e.offsetY}px`);
    });
  }, []);
  return (
    <a ref={btnRef} className="suspend-button">
      <span>使用JS获取元素坐标，再赋值给 --x 和 --y</span>
    </a>
  );
};

export default SuspendButton;
