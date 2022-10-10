import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';

// 工具函数
type MaybeNull<T> = T | null;

/* 缓存 Function JSX */
const dynamicJSXElement = (asyncComponent: {
  (): Promise<typeof import('../components/FunctionComponent')>;
}) => {
  return <P extends {}>(props: P): JSX.Element => {
    const abcRef = useRef(null);
    const [Element, setElement] = useState<MaybeNull<JSX.Element>>(null);
    useEffect(() => {
      if (Element) return;
      asyncComponent()
        .then((module) => module?.default || module)
        .then((c) => {
          return setElement(() => c({ ...props, info: '123' }));
        });
    }, []);

    /* 经测试：无法通过 React.cloneElement 修改 props 的方式去 re-render 组件 */
    useEffect(() => {
      if (!Element) return;
      /* setElement(React.cloneElement(Element, { ...props })); */
      ReactDOM.render(React.cloneElement(Element, { ...props }), document.getElementById('abc'));
    }, [props]);

    return Element ? <div id="abc">{Element}</div> : <Loading />;
  };
};

export default dynamicJSXElement;
