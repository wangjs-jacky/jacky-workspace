import React from 'react';
import './newIndex.less';

const NewIndex: React.FC = () => {
  return (
    <ul className="strip-loading-new">
      {Object.keys(new Array(6).fill(null)).map((item, index) => {
        return <li key={index} style={{ '--inline-index': index } as React.CSSProperties}></li>;
      })}
    </ul>
  );
};

export default NewIndex;
