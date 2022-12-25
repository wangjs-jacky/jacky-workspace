import React, { useEffect, useMemo, useRef } from 'react';
/* Context 导入 */
import KeepaliveContext from '../core/keepContext';
import useStore, { cacheListType, StoreType } from '../core/useStore';
import ReactDOM from 'react-dom';

/* ScopeItem 负责具体挂载 */
const ScopeItem: React.FC<
  cacheListType & { dispatchCacheList: StoreType['dispatchCacheList'] }
> = ({ cacheId, dispatchCacheList, parentNode, children, status }) => {
  const currentDom = useRef<any>();
  const element = ReactDOM.createPortal(
    <div ref={currentDom} style={{ display: status === 'unActive' ? 'none' : 'block' }}>
      {useMemo(() => children || null, [children])}
    </div>,
    /* 如果非激活状态，则传送到 document.body，否则到 parentNode */
    document.body,
  );

  /* 渲染结束后，开始触发 actived 及 unActived 操作 */
  useEffect(() => {
    if (status === 'active') {
      parentNode?.appendChild(currentDom.current);
      dispatchCacheList({
        actionType: 'actived',
        payload: { cacheId },
      });
    } else if (status === 'unActive') {
      document.body.appendChild(currentDom.current);
      dispatchCacheList({
        actionType: 'unActived',
        payload: { cacheId },
      });
    }
  }, [status]);

  useEffect(() => {
    return () => {
      /* ReactDOM.render(React.cloneElement(component, { visible: false }), divEle); */
      /* ReactDOM.unmountComponentAtNode(currentDom.current);
      currentDom.current!.remove(); */
      document.body.appendChild(currentDom.current);
    };
  }, []);

  return element;
};

/* Scope:
    1. 加载数据层
    2. 根据 cacheList 中不同的 state 进行渲染（注: 渲染到 body 层）
*/
const Scope: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { cacheList, dispatchCacheList, getCacheStatus, deleteCacheId } = useStore();
  const contextValue = useMemo(() => {
    return { cacheList, dispatchCacheList, getCacheStatus, deleteCacheId };
  }, [cacheList]);

  return (
    <KeepaliveContext.Provider value={contextValue}>
      {children}
      {cacheList.map((item, index) => {
        return <ScopeItem {...item} key={index} dispatchCacheList={dispatchCacheList}></ScopeItem>;
      })}
    </KeepaliveContext.Provider>
  );
};

export default Scope;
