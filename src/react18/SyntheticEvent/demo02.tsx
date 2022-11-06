import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
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

const FakeModal: React.FC<any> = forwardRef((props, ref: any) => {
  return <Wrap ref={ref}>请点击此区域</Wrap>;
});

const Demo01: React.FC = () => {
  const [showBox, setShowBox] = useState(false);
  const modalRef = useRef<HTMLDivElement>();

  const handleClickButton = useCallback(() => {
    setShowBox(true);
  }, []);

  const handleClickBody = useCallback(() => {
    setShowBox(false);
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', handleClickBody);
  }, []);

  useEffect(() => {
    modalRef.current?.addEventListener('click', (e: any) => {
      console.log('123');
      e.stopPropagation();
    });
    return () => {
      modalRef.current?.removeEventListener('click', () => {});
    };
  }, [showBox]);

  return (
    <div>
      <button onClick={handleClickButton}>点击我显示弹窗</button>
      {showBox && (
        /* 使用 stopPropagation 组织弹窗体内的事件 */
        <div>
          <FakeModal ref={modalRef} />
        </div>
      )}
    </div>
  );
};

export default Demo01;
