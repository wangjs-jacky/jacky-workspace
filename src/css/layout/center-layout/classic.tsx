import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f66;
  display: flex;
  div {
    width: 100px;
    height: 100px;
    margin: auto;
    background-color: #66f;
  }
`;

function Classic() {
  return (
    <Wrap>
      <div></div>
    </Wrap>
  );
}

export default Classic;
