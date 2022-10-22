import React from 'react';
import styled from 'styled-components';
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hover-tips {
    position: relative;
    height: 40px;
    padding: 0 10px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    background-color: #66f;
    border-radius: 10px;

    /* 同样的技巧，只让第二个 button 有这个属性 */
    & + .hover-tips {
      margin-top: 10px;
    }
    &.btn-1 {
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        padding: 0 4px;
        color: #000;
        font-size: 12px;
        white-space: nowrap;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        opacity: 0;
        transition: all 300ms;
        content: attr(data-msg);
      }
      &:hover::after {
        left: calc(100% + 20px);
        opacity: 1;
      }
    }
    &.btn-2:empty::after {
      content: attr(data-msg);
    }
  }
`;

const Attr: React.FC = () => {
  return (
    <Wrap data-title="使用attr()抓取节点属性">
      <a className="hover-tips btn-1" data-msg="Hello World">
        提示框
      </a>
      <a className="hover-tips btn-2" data-msg="https://www.baidu.com"></a>
    </Wrap>
  );
};

export default Attr;
