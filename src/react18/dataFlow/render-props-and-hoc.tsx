import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Row from './Row';

import { createContext } from 'react';
export const HighlightContext = createContext(false);

const ListWrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  height: 200px;
`;

const List: React.FC<{
  products: {
    title: string;
    id: number;
  }[];
  renderItem: (x: any) => JSX.Element;
}> = ({ products, renderItem }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dataLength = products.length;
  return (
    <ListWrapper>
      {products.map((product, index) => {
        const isHighlighted = index === selectedIndex;
        return (
          <HighlightContext.Provider value={isHighlighted}>
            {renderItem({ product })}
          </HighlightContext.Provider>
        );
      })}
      <button
        onClick={() => {
          setSelectedIndex((i) => (i + 1) % dataLength);
        }}
      >
        Next
      </button>
    </ListWrapper>
  );
};

const _Row = ({ title }: { title: string }) => {
  const isHighlighted = useContext(HighlightContext);
  return <Row title={title} isHighlighted={isHighlighted}></Row>;
};

function App() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  return (
    <List
      products={products}
      renderItem={({ product }) => {
        return <_Row title={product.title}></_Row>;
      }}
    ></List>
  );
}

export default App;
