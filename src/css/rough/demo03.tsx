import React, { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';

function Demo03() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, update] = useState({});
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rc = rough.canvas(canvas);
      /* 默认填充：hachure */
      rc.rectangle(10, 10, 100, 100, {
        stroke: '#686de0',
      });

      /* 填充模式：solid */
      rc.rectangle(130, 10, 100, 100, {
        fill: '#f66',
        fillStyle: 'solid',
      });

      /* 填充模式: zigzag */
      rc.rectangle(250, 10, 100, 100, {
        fill: '#686de0',
        fillStyle: 'zigzag',
      });

      /* 填充模式：cross-hatch */
      rc.rectangle(370, 10, 100, 100, {
        fill: '#130f40',
        fillStyle: 'cross-hatch',
      });

      rc.rectangle(490, 10, 100, 100, {
        fill: '#6ab04c',
        fillStyle: 'dots',
      });

      rc.rectangle(10, 120, 100, 100, {
        fill: '#ff7979',
        fillStyle: 'sunburst',
        hachureGap: 8,
        fillWeight: 3,
        hachureAngle: 60,
      });

      rc.rectangle(130, 120, 100, 100, {
        fill: '#ff7979',
        fillStyle: 'dashed',
        fillWeight: 3,
        roughness: 5,
      });

      rc.rectangle(250, 120, 100, 100, {
        fill: '#ff7979',
        fillStyle: 'zigzag-line',
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
          width={'600px'}
          height={'240px'}
          style={{ border: '1px solid #000' }}
        >
          当前浏览器不支持 canvas，请下载最新的浏览器
        </canvas>
      </div>
    </div>
  );
}

export default Demo03;
