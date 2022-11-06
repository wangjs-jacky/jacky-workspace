import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
/* Context 导入 */
import KeepaliveContext from '../core/keepContext';
import useStore, { cacheListType, StoreType } from '../core/useStore';
import KeepAliveItem from './KeepAliveItem';
import ReactDOM from 'react-dom';

/* ScopeItem 负责具体挂载 */
const ScopeItem: React.FC<
  cacheListType & { dispatchCacheList: StoreType['dispatchCacheList'] }
> = ({ cacheId, dispatchCacheList, parentNode, children, status }) => {
  const currentDom = useRef<any>();

  /* 【拦截 children】只有当 active|actived|unActive|unActived 时才返回 */
  const renderChildren =
    status === 'active' || status === 'actived' || status === 'unActive' || status === 'unActived'
      ? children
      : () => null;

  console.log('status', status, parentNode, children);

  const element = ReactDOM.createPortal(
    <div ref={currentDom} style={{ display: status === 'unActive' ? 'none' : 'block' }}>
      {useMemo(() => children, [])}
    </div>,
    /* 如果非激活状态，则传送到 document.body，否则到 parentNode */
    status === 'unActive' ? document.getElementById('root')! : parentNode!,
  );

  console.log('element', element);

  /* 渲染结束后，开始触发 actived 及 unActived 操作 */
  useEffect(() => {
    if (status === 'active') {
      dispatchCacheList({
        actionType: 'actived',
        payload: { cacheId },
      });
    } else if (status === 'unActive') {
      dispatchCacheList({
        actionType: 'unActived',
        payload: { cacheId },
      });
    }
  }, [status]);

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
