import React, { useRef, useState } from 'react';

let previousTimeStamp: number;

const Demo01 = () => {
  let count = useRef(0);
  const divDomRef = useRef<HTMLDivElement>(null);
  let cancelReq: number;
  const animation = () => {
    const timeStamp = performance.now();
    if (count.current > 200) return;
    if (divDomRef.current) {
      divDomRef.current.style.marginLeft = count.current + 'px';
    }

    if (previousTimeStamp) {
      const elapsed = timeStamp - previousTimeStamp;
      console.log('时间差', elapsed.toFixed(3), '已移动像素', count.current);
    }
    previousTimeStamp = timeStamp;
    /* 一帧走一格 */
    count.current = count.current + 1;
    cancelReq = window.requestAnimationFrame(animation);
  };

  const stopAnimation = () => {
    window.cancelAnimationFrame(cancelReq);
  };

  return (
    <div>
      <button onClick={() => animation()} style={{ marginBottom: '10px' }}>
        开始
      </button>
      <button id="stop" onClick={() => stopAnimation()} style={{ marginBottom: '10px' }}>
        停止
      </button>
      <div ref={divDomRef} style={{ width: '100px', height: '100px', backgroundColor: '#f66' }} />
    </div>
  );
};

export default Demo01;
