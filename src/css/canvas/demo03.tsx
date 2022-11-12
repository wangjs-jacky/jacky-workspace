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
      /* 定位到圆心 */
      context.arc(150, 150, 100, 0, Math.PI * 2);
      context.fillStyle = '#f6e58d';
      context.fill();
      context.stroke();
      context.closePath();

      /* 绘制左眼 */
      /* 移动位置 */
      context.beginPath();
      context.moveTo(150 - 50 + 20, 150 - 25);
      context.arc(150 - 50, 150 - 25, 20, 0, Math.PI * 2);

      /* 绘制右眼 */
      /* 移动位置 */
      context.moveTo(150 + 50 + 20, 150 - 25);
      context.arc(150 + 50, 150 - 25, 20, 0, Math.PI * 2);
      context.fillStyle = '#6ab04c';
      context.fill();
      context.stroke();
      context.closePath();

      /* 绘制笑脸 */
      /* 移动位置 */
      context.beginPath();
      context.moveTo(150 + 55, 150 + 10);
      context.arc(150, 150 + 10, 55, 0, Math.PI);

      context.moveTo(150 - 55, 150 + 10);
      context.lineTo(150 + 55, 150 + 10);
      context.fillStyle = '#f66';
      context.strokeStyle = '#000';
      context.fill();
      context.stroke();
      context.closePath();
    }
  });

  return (
    <div>
      <pre></pre>
      <div>
        <canvas
          ref={canvasRef}
          width={'300px'}
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
