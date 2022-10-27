import React, { useEffect, useRef, useState } from 'react';

function Demo04() {
  const buttonRef = useRef<any>();

  const [message, setMessage] = useState('');

  useEffect(() => {
    buttonRef.current.addEventListener('click', () => {
      setMessage((m) => m + '\n 原生事件');
    });
    buttonRef.current.addEventListener(
      'click',
      () => {
        setMessage((m) => m + '\n 原生事件捕获');
      },
      true,
    );
  }, []);

  const onReactClick = () => {
    setMessage((m) => m + '\n 合成事件');
  };

  const onReactClickCapture = () => {
    setMessage((m) => m + '\n 合成事件捕获');
  };

  return (
    <>
      <button
        ref={buttonRef}
        className="button"
        onClickCapture={onReactClickCapture}
        onClick={onReactClick}
      >
        点击 Button 按钮后
      </button>
      <button onClick={() => setMessage('')}> Reset</button>
      <br></br>
      <br></br>
      <div>{message}</div>
    </>
  );
}

export default Demo04;
