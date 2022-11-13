import React, { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';

function Demo05() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, update] = useState({});
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rc = rough.canvas(canvas);
      rc.path('M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z', { fill: 'green' });
      rc.path('M230 80 A 45 45, 0, 1, 0, 275 125 L 275 80 Z', { fill: 'purple' });
      rc.path('M80 230 A 45 45, 0, 0, 1, 125 275 L 125 230 Z', { fill: 'red' });
      rc.path('M230 230 A 45 45, 0, 1, 1, 275 275 L 275 230 Z', { fill: 'blue' });
    }
  });

  return (
    <div>
      <button onClick={() => update({})}>加粗</button>
      <pre></pre>
      <div>
        <canvas
          ref={canvasRef}
          width={'400px'}
          height={'300px'}
          style={{ border: '1px solid #000', width: '300px' }}
        >
          当前浏览器不支持 canvas，请下载最新的浏览器
        </canvas>
      </div>
    </div>
  );
}

export default Demo05;
