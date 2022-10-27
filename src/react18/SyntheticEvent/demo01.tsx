import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin-top: 10px;
  width: 200px;
  height: 200px;
  color: white;
  font-size: 25px;
  background-color: #f66;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FakeModal: React.FC = () => {
  return <Wrap>请点击此区域</Wrap>;
};

const Demo01: React.FC = () => {
  const [showBox, setShowBox] = useState(false);

  const handleClickButton = useCallback(() => {
    console.log('button');
    setShowBox(true);
  }, []);

  /* 点击空白区域：一般是 `原生事件` 实现 */
  useEffect(() => {
    document.body.addEventListener('click', () => setShowBox(false));
  }, []);

  return (
    <div>
      <button onClick={handleClickButton}>点击我显示弹窗</button>
      {showBox && (
        /* 使用 stopPropagation 组织弹窗体内的事件 */
        <div onClick={(e) => e.stopPropagation()}>
          <FakeModal />
        </div>
      )}
    </div>
  );
};

export default Demo01;
