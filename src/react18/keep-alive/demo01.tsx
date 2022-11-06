import React, { useEffect, useState } from 'react';
import KeepAliveItem from './component/KeepAliveItem';
import Scope from './component/scope';
import { useCacheDestory } from './core/useStore';

const FunctionComponent: React.FC<{ input: string }> = ({ input }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    return () => {
      console.log('组件被卸载了');
    };
  }, []);
  return (
    <>
      修改自身的state:
      <input onChange={(e) => setMessage(e.target.value)} />
      <div>自身的状态 state: {message}</div>
      <div>外部传入的 props:{input}</div>
    </>
  );
};

function Demo01() {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');
  const destroy = useCacheDestory();
  return (
    <>
      <Scope>
        <button onClick={() => setVisible(!visible)}>{visible ? '卸载组件' : '加载组件'}</button>
        <button onClick={() => destroy('demo02')}>删除缓存</button>
        <input onChange={(e) => setInput(e.target.value)}></input>
        {/*         {visible && (
          <KeepAliveItem cacheId="demo01">
            <>Demo01</>
          </KeepAliveItem>
        )} */}
        {visible && (
          <KeepAliveItem cacheId="demo02">
            <FunctionComponent input={input}></FunctionComponent>
          </KeepAliveItem>
        )}
      </Scope>
    </>
  );
}

export default Demo01;
