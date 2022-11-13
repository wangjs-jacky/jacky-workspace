import React from 'react';
import './index.less';

const ThumbUpButton: React.FC<any> = () => {
  return (
    <div className="wrapper" data-title="点赞按钮">
      <button className="like-btn">
        <div className="like-wrapper">
          {/*  点击后，会有一个先红后白的过渡 */}
          <div className="like-ripple"></div>
          {/* 使用 svg 绘制星型图标，后期可换成 canvas 绘制 */}
          <svg className="like-heart" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
          </svg>
          {/* 绘制六条粒子射线 */}
          {/*  <div className="like-particle" style={{ '--line-count': 6 } as React.CSSProperties}>
            {[0, 1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div
                  key={index}
                  className="like-particle-item"
                  style={{ '--line-index': index } as React.CSSProperties}
                ></div>
              );
            })}
          </div> */}
        </div>
      </button>
    </div>
  );
};

export default ThumbUpButton;
