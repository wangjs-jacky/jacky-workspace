import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  /* 经典三段论 */
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
  background-color: #f66;
  div {
    width: 100px;
    height: 100px;
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
