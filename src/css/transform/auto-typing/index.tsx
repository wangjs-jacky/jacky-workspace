import React, { useState } from 'react';
import './index.less';

const AutoTyping: React.FC = () => {
  const [word] = useState('Do You Want To Know More About CSS Development Skill');
  const [speed, setSpend] = useState(100);
  return (
    <>
      <button onClick={() => setSpend(50)}> 速度 50ms </button>
      <button onClick={() => setSpend(100)}> 速度 100ms </button>
      <button onClick={() => setSpend(300)}> 速度 300ms </button>
      <br></br>
      <br></br>
      <div
        className="auto-typing"
        style={
          { '--word-length': word.length, '--time-per-second': speed + 'ms' } as React.CSSProperties
        }
      >
        {word}
      </div>
    </>
  );
};

export default AutoTyping;
