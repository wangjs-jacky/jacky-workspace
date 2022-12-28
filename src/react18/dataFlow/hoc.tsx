import React, { Children, ReactNode, useState } from 'react';
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

const List: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  /* 在 List 中维护高亮索引 */
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dataLength = Children.count(children);
  return (
    <ListWrapper>
      {/* {children} */}
      {Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isHighlighted: index === selectedIndex,
        });
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

function App() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  return (
    <List>
      {products.map(({ title, id }) => {
        return <Row title={title} key={id}></Row>;
      })}
    </List>
  );
}

export default App;
