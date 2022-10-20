import React from 'react';
import './demo02.less';

function HeartLoading() {
  return (
    <div className="heart-loading-2">
      <ul style={{ '--line-count': 9 } as React.CSSProperties}>
        {Object.keys(new Array(9).fill(null)).map((item, index) => {
          return (
            <li
              className={`line-${index}`}
              style={{ '--line-index': index } as React.CSSProperties}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default HeartLoading;
