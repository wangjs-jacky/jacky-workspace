import React from 'react';
import styled from 'styled-components';

interface RowType {
  title: string;
  isHighlighted?: boolean;
}

const RowWrapper = styled.div`
  border: 1px dashed #000;
  height: 30px;
  &.RowHighlighted {
    background-color: hsl(60, 80%, 90%);
  }
`;

export default function Row({ title, isHighlighted = false }: RowType) {
  return (
    <RowWrapper className={['Row', isHighlighted ? 'RowHighlighted' : ''].join(' ')}>
      {title}
    </RowWrapper>
  );
}
