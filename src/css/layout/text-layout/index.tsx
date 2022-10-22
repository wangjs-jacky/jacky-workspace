import React from 'react';
import styled from 'styled-components';
const Wrap = styled.div`
  /* 创建一个 BFC 环境 */
  overflow: hidden;
  width: 400px;
  height: 300px;
  font-size: 20px;
  color: #f66;
  /* 允许在单词内换行 */
  word-break: break-all;
  border: 1px solid #000;
  img {
    /* 使用 float 可以是节点脱流，但是文字不会脱流 */
    float: left;
    height: 200px;
  }
  span {
    border-bottom: 1px solid #000;
  }
`;

const TextLayout: React.FC = () => {
  return (
    <Wrap>
      <img src="https://jowayyoung.github.io/static/img/icss/thor.jpg" />
      <span>
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </span>
    </Wrap>
  );
};

export default TextLayout;
