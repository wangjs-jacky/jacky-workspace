import React, { useState } from 'react';

function Demo() {
  const [num, setNum] = useState(0);
  if (num !== 0) {
    console.log('触发渲染', num);
  }

  return (
    <>
      <strong>当前状态：{num}</strong>
      <br></br>
      <button
        onClick={() => {
          setNum((num) => num + 1);
          setNum((num) => num + 1);
          console.log('===同步===');
        }}
      >
        同步执行
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            setNum((num) => num + 1);
            setNum((num) => num + 1);
            console.log('===promise 异步===');
          }, 100);
        }}
      >
        setTimeout 异步执行
      </button>
      <button
        onClick={() => {
          Promise.resolve().then(() => {
            setNum((num) => num + 1);
            setNum((num) => num + 1);
            console.log('===promise 异步===');
          });
        }}
      >
        promise 异步执行
      </button>
    </>
  );
}
export default Demo;
