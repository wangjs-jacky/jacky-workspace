import React, { useEffect, useRef, useState } from 'react';

import rough from 'roughjs';

function Demo02() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, update] = useState({});
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rc = rough.canvas(canvas);
      /* 默认填充：hachure */
      rc.rectangle(10, 10, 80, 80, { fill: 'red' });

      /* 可以控制 hachure 的线宽 */
      rc.rectangle(110, 10, 80, 80, {
        fill: '#6ab04c',
        fillWeight: 3, // thicker lines for hachure
      });

      /* 可以控制 hachure 的角度 */
      rc.rectangle(210, 10, 80, 80, {
        fill: '#f66',
        hachureAngle: 60, // angle of hachure,
        hachureGap: 8,
      });
    }
  });

  return (
    <div>
      <button onClick={() => update({})}>加粗</button>
      <pre></pre>
      <div>
        <canvas
          ref={canvasRef}
          width={'350px'}
          height={'200px'}
          style={{ border: '1px solid #000' }}
        >
          当前浏览器不支持 canvas，请下载最新的浏览器
        </canvas>
      </div>
    </div>
  );
}

export default Demo02;
