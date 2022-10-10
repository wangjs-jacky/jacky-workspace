import React, { useState } from 'react';
import useBoolean from '../../aHooks/useBoolean';
import { delaySeconds } from './components/delaySeconds';
import dynamicComponent from './dynamic/dynamicComponent';

type PropType = {
  title: string;
};

const DynamicComponent: React.FC<PropType> = dynamicComponent(() =>
  delaySeconds(1000).then(() => import('./components/FunctionComponent')),
);

function Main() {
  const [visible, { toggle }] = useBoolean();
  const [param, setParam] = useState('');
  return (
    <>
      <input placeholder="用户输入的参数" onChange={(e) => setParam(e.target.value)}></input>
      <br></br>
      <br></br>
      <button onClick={() => toggle()}> {visible ? '卸载组件' : '加载组件'}</button>
      {visible ? <DynamicComponent title={param} /> : null}
    </>
  );
}

export default Main;
