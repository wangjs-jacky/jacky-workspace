import React from 'react';
import { useState } from 'react';
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

function useList(items: any[]) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onNext() {
    setSelectedIndex((i) => (i + 1) % items.length);
  }

  const selected = items[selectedIndex];
  return [selected, onNext];
}

const List: React.FC<{
  products: {
    title: string;
    id: number;
  }[];
}> = ({ products }) => {
  const [selectedIndex, onNext] = useList(products);
  return (
    <ListWrapper>
      {products.map((product) => {
        return (
          <Row
            title={product.title}
            key={product.id}
            isHighlighted={selectedIndex === product}
          ></Row>
        );
      })}
      <button onClick={onNext}></button>
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
