import React, { useState } from 'react';
import styled from 'styled-components';
import Row from './Row';

const ListWrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  height: 200px;
`;

/* 数据驱动，相当于每条数据上计算出一个状态属性 */
const List: React.FC<{
  products: {
    title: string;
    id: number;
  }[];
}> = ({ products }) => {
  /* 在 List 中维护高亮索引 */
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ListWrapper>
      {products.map(({ title, id }, index) => {
        return <Row title={title} key={id} isHighlighted={selectedIndex === index}></Row>;
      })}
      <button
        onClick={() => {
          setSelectedIndex((i) => (i + 1) % products.length);
        }}
      >
        Next
      </button>
    </ListWrapper>
  );
};

function App() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  return <List products={products}></List>;
}

export default App;
