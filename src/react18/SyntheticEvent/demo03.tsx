import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 200px;
  background-color: #1abc9c;
  display: flex;
  border: 1px solid #000;
  p {
    display: flex;
    width: 300px;
    height: 150px;
    margin: auto;
    background-color: #27ae60;
    span {
      width: 150px;
      height: 80px;
      margin: auto;
      background-color: #e67e22;
    }
  }
`;

const Span = styled.em`
  position: absolute;
  font-size: 20px;
  color: #fff;
`;

const Demo03: React.FC = () => {
  const divRef = useRef<any>();
  const pRef = useRef<any>();
  const spanRef = useRef<any>();
  const [message, setMessage] = useState('');

  useEffect(() => {
    /* 捕获阶段 */
    divRef.current.addEventListener(
      'click',
      () => {
        setMessage((m) => m + '<br/> 捕获阶段--div ');
      },
      true,
    );
    pRef.current.addEventListener(
      'click',
      () => {
        setMessage((m) => m + '<br/> 捕获阶段--p');
      },
      true,
    );
    spanRef.current.addEventListener(
      'click',
      () => {
        setMessage((m) => m + '<br/> 捕获阶段--span');
      },
      true,
    );

    /* 冒泡阶段 */
    divRef.current.addEventListener('click', () => {
      setMessage((m) => m + '<br/> 冒泡阶段--div ');
    });
    pRef.current.addEventListener('click', () => {
      setMessage((m) => m + '<br/> 冒泡阶段--p');
    });
    spanRef.current.addEventListener('click', () => {
      setMessage((m) => m + '<br/> 冒泡阶段--span');
    });
  }, []);

  return (
    <>
      <button onClick={() => setMessage('')}>清空区域</button>
      <Div id="div" ref={divRef}>
        <Span>div</Span>
        <p id="p" ref={pRef}>
          <Span>p</Span>
          <span id="span" ref={spanRef}>
            <Span>span</Span>
          </span>
        </p>
      </Div>
      <div dangerouslySetInnerHTML={{ __html: message }}></div>
    </>
  );
};

export default Demo03;
