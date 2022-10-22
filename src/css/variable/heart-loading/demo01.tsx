import React from 'react';
import './demo01.less';

function HeartLoading() {
  return (
    <div className="heart-loading-1">
      <ul>
        {Object.keys(new Array(9).fill(null)).map((item, index) => {
          return <li key={index} style={{ '--line-index': index } as React.CSSProperties}></li>;
        })}
      </ul>
    </div>
  );
}

export default HeartLoading;
