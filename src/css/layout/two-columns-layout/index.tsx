import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  .left {
    width: 100px;
    background-color: #f66;
  }
  .right {
    flex: 1;
    background-color: #66f;
  }
`;

function TwoColumns() {
  return (
    <Wrap>
      <div className="left"></div>
      <div className="right"></div>
    </Wrap>
  );
}

export default TwoColumns;
