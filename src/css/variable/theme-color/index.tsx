import React, { useState } from 'react';
import './index.less';

function ThemeColor() {
  /* 获取当前系统主题色 */
  /*   const prefersDarkScheme = window.matchMedia('(perfers-color-scheme:dark)');
  console.log('prefersDarkScheme', prefersDarkScheme); */
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        切换{darkTheme ? '浅色' : '深色'}主题
      </button>
      <br></br>
      <div className={'theme-color' + (darkTheme ? ' dark' : ' light')}>
        <h2>这里是标题 </h2>
        <p>这里是内容，测试的内容</p>
        <a href="#"> 这是一个超链接</a>
      </div>
    </>
  );
}

export default ThemeColor;
