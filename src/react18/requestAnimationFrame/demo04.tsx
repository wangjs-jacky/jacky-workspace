import React, { useRef, useState } from 'react';

let previousTimeStamp: number;

const Demo01 = () => {
  let count = useRef(0);
  let count2 = useRef(0);
  const divDomRef = useRef<HTMLDivElement>(null);
  const divDomRef2 = useRef<HTMLDivElement>(null);

  let cancelReq: number;

  const higerAnimation = (fn: any, divDomRef: any, count: any) => {
    let tempFun = () => {
      const timeStamp = performance.now();
      if (count.current > 100) return;
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
      cancelReq = fn(tempFun);
    };
    return tempFun;
  };

  const animation1 = higerAnimation(setTimeout, divDomRef, count);
  const animation2 = higerAnimation(requestIdleCallback, divDomRef2, count2);

  return (
    <div>
      <button onClick={() => animation1()} style={{ marginBottom: '10px' }}>
        开始1
      </button>
      <button onClick={() => animation2()} style={{ marginBottom: '10px' }}>
        开始2
      </button>
      <div ref={divDomRef} style={{ width: '100px', height: '100px', backgroundColor: '#f66' }} />
      <div
        ref={divDomRef2}
        style={{ width: '100px', height: '100px', backgroundColor: '#27ae60' }}
      />
    </div>
  );
};

export default Demo01;
