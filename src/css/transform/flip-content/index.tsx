import React from 'react';
import './index.less';

const FlipContent: React.FC = () => {
  return (
    <ul className="flip-content">
      <li>正常文本</li>
      <li className="x-axis">水平翻转</li>
      <li className="y-axis">垂直翻转</li>
      <li className="reverse">倒序翻转</li>
    </ul>
  );
};

export default FlipContent;
