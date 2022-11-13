import React, { useEffect, useRef, useState } from 'react';

import rough from 'roughjs';

function Demo01() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, update] = useState({});
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rc = rough.canvas(canvas);
      /* 方形 */
      rc.rectangle(10, 10, 100, 100);
      /* 圆 */
      rc.circle(80, 150, 50); // centerX, centerY, diameter
      /* 椭圆 */
      rc.ellipse(300, 100, 150, 80); // centerX, centerY, width, height
      /* 线 */
      rc.line(80, 150, 300, 100); // x1, y1, x2, y2
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
          height={'200px'}
          style={{ border: '1px solid #000' }}
        >
          当前浏览器不支持 canvas，请下载最新的浏览器
        </canvas>
      </div>
    </div>
  );
}

export default Demo01;
