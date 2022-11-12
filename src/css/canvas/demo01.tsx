import React, { useEffect, useRef, useState } from 'react';

function Demo01() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, update] = useState({});
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      /* 获取画笔 */
      const context = canvas.getContext('2d');
      /* 轮廓画法 */
      context?.strokeRect(50, 50, 150, 150);
      /* 填充画法 */
      context?.fillRect(100, 100, 150, 150);
    }
  });

  const clearScreen = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      let height = 0;
      /* 清屏效果 */
      let timer = setInterval(() => {
        height++;
        context?.clearRect(0, 0, canvas.clientWidth, height);
        if (height > canvas.clientHeight) {
          clearTimeout(timer);
        }
      }, 10);
    }
  };

  return (
    <div>
      <button onClick={() => clearScreen()}>清屏效果</button>
      <button onClick={() => update({})}>reset</button>
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
