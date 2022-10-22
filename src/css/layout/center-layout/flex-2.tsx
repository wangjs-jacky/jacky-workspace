import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex; /* 第 1 行*/
  width: 200px;
  height: 200px;
  background-color: #f66;
  div {
    width: 100px;
    height: 100px;
    margin: auto; /* 第 2 行*/
    background-color: #66f;
  }
`;

function Flex() {
  return (
    <Wrap>
      <div></div>
    </Wrap>
  );
}

export default Flex;
