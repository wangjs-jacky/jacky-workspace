import React, { useEffect, useState } from 'react';
import KeepAliveItem from './component/KeepAliveItem';
import Scope from './component/scope';
import { useCacheDestory } from './core/useStore';

const FunctionComponent: React.FC<{ propNum: number }> = ({ propNum }) => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    return () => {
      console.log('组件被卸载了');
    };
  }, []);
  return (
    <div>
      <span>inner state: {num}</span>
      <button onClick={(e) => setNum((x) => x + 1)}> state + 1</button>
      <p>outside props:{propNum}</p>
    </div>
  );
};

function Demo01() {
  const [visible, setVisible] = useState(false);
  const [propNum, setPropNum] = useState(0);
  const destroy = useCacheDestory();
  return (
    <>
      <button onClick={() => setVisible(!visible)}>{visible ? '卸载组件' : '加载组件'}</button>
      <button onClick={() => destroy('demo02')}>删除缓存</button>
      <button onClick={() => setPropNum((x) => x + 1)}>props + 1</button>
      {visible && <FunctionComponent propNum={propNum}></FunctionComponent>}
      {visible && (
        <KeepAliveItem cacheId="demo02">
          <FunctionComponent propNum={propNum}></FunctionComponent>
        </KeepAliveItem>
      )}
    </>
  );
}

const Main = () => {
  return (
    <Scope>
      <Demo01 />
    </Scope>
  );
};

export default Main;
