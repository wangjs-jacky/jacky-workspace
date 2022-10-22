import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  line-height: 200px;
  background-color: #f66;
  text-align: center;
  font-size: 0;
  div {
    display: inline-block;
    width: 100px;
    height: 100px;
    vertical-align: middle;
    background-color: #66f;
  }
`;

function InlineBlock() {
  return (
    <Wrap>
      <div></div>
    </Wrap>
  );
}

export default InlineBlock;
