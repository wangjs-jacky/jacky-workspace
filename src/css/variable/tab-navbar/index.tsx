import React, { useEffect, useRef, useState } from 'react';
import './index.less';

const TabNavBar: React.FC = () => {
  const ulRef = useRef<any>();
  const [arr] = useState([
    { index: 0, '--bg-color': '#f66', content: '内容1' },
    { index: 1, '--bg-color': '#66f', content: '内容2' },
    { index: 2, '--bg-color': '#f90', content: '内容3' },
    { index: 3, '--bg-color': '#09f', content: '内容4' },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="tab-navbar">
      <nav>
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <label
              className={index === activeIndex ? 'active' : ''}
              key={index}
              onClick={() => {
                ulRef.current.style.setProperty('--tab-index', index);
                setActiveIndex(index);
              }}
            >
              标题 {index}
            </label>
          );
        })}
      </nav>
      <main>
        <ul ref={ulRef} style={{ '--tab-count': arr.length } as React.CSSProperties}>
          {arr.map((item, index) => {
            return (
              <li
                key={item['index']}
                style={
                  {
                    '--bg-color': item['--bg-color'],
                  } as React.CSSProperties
                }
              >
                {item['content']}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default TabNavBar;
