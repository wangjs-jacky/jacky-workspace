import React, { useEffect, useRef, useState } from 'react';

function Demo01() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, update] = useState({});
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      /* 获取画笔 */
      const context = canvas.getContext('2d')!;
      context.beginPath();
      /* 路径 */
      context.rect(50, 50, 150, 150);
      /* 轮廓 */
      context.stroke();
      context.closePath();
      context.beginPath();
      /* 路径 */
      context.rect(100, 100, 150, 150);
      /* 填充 */
      context.fill();
      context.closePath();
    }
  });

  return (
    <div>
      <pre></pre>
      <div>
        <canvas
          ref={canvasRef}
          id="c1"
          width={'350px'}
          height={'300px'}
          style={{ border: '1px solid #000' }}
        >
          当前浏览器不支持 canvas，请下载最新的浏览器
        </canvas>
      </div>
    </div>
  );
}

export default Demo01;
