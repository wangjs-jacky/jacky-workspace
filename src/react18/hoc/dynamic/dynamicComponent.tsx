import React from 'react';
import { useEffect, useState } from 'react';
import Loading from './Loading';

// 工具函数
type MaybeNull<T> = T | null;

/* 缓存 Function Component */
const dynamicComponent = (asyncComponent: {
  (): Promise<typeof import('../components/FunctionComponent')>;
}) => {
  return <P extends {}>(props: P): JSX.Element => {
    const [Component, setComponent] = useState<MaybeNull<React.FC<P>>>(null);
    useEffect(() => {
      if (Component) return;
      asyncComponent()
        .then((module) => module?.default || module)
        .then((c) => {
          return setComponent(() => c as React.FC);
        });
    }, []);

    return Component ? <Component {...props} info="123" /> : <Loading />;
  };
};

export default dynamicComponent;
