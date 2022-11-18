import React, { useRef, useState } from 'react';

const Demo02 = () => {
  const divDomRef = useRef<HTMLDivElement>(null);
  const [, update] = useState({});
  if (divDomRef.current) {
    divDomRef.current.style.transform = 'translate(0px, 0px)';
  }
  const handleClick = () => {
    if (divDomRef.current) {
      divDomRef.current.style.transform = 'translate(400px, 0)';
    }
    requestAnimationFrame(() => {
      if (divDomRef.current) {
        divDomRef.current.style.transform = 'translate(200px, 0)';
        divDomRef.current.style.transition = 'transform 0.5s linear';
      }
    });
  };

  return (
    <div>
      <button onClick={() => handleClick()} style={{ marginBottom: '10px' }}>
        开始
      </button>
      <button onClick={() => update({})} style={{ marginBottom: '10px' }}>
        复位
      </button>
      <div ref={divDomRef} style={{ width: '100px', height: '100px', backgroundColor: '#f66' }} />
    </div>
  );
};

export default Demo02;
