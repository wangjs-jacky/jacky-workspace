import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
          setTimeout(() => {
            ReactDOM.unstable_batchedUpdates(() => {
              setNum((num) => num + 1);
              setNum((num) => num + 1);
              console.log('===promise 异步===');
            });
          }, 100);
        }}
      >
        setTimeout 异步执行
      </button>
    </>
  );
}
export default Demo;
