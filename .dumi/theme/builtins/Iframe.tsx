import React from 'react';
import styled from 'styled-components';
const Wrap = styled.iframe`
  width: 100%;
  height: 500px;
`;

const Badge = styled.p`
  background: rgba(180, 160, 120, 0.1);
  border-radius: 2px;
  font-family: 'Courier New', Courier, monospace;
  padding: 1rem;
  font-size: 15px;
`;

const Iframe: React.FC<any> = (props) => {
  const { src } = props;

  return (
    <>
      {src ? (
        <Badge>
          网址：
          <a target={'_blank'} href={src}>
            {src}
          </a>
        </Badge>
      ) : null}
      <Wrap {...props}></Wrap>
    </>
  );
};

export default Iframe;
