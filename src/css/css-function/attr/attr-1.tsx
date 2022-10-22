import React from 'react';
import styled from 'styled-components';

const AttrContent = styled.h1`
  &::before {
    content: attr(id);
  }
  &::after {
    content: attr(data-name);
  }
`;

const Attr: React.FC = () => {
  return <AttrContent id="Hello" data-name=" Jacky!" />;
};

export default Attr;
