import React, { ReactNode, useContext, useEffect, useLayoutEffect, useRef } from 'react';
import KeepaliveContext from '../core/keepContext';
import { cacheListType, StoreType } from '../core/useStore';
import renderWithChildren from '../utils/renderWithChildren';

/* 往 Context 中存数据 */
function KeepAliveItem({ cacheId, children }: { cacheId: string; children: ReactNode }) {
  const firstRender = useRef(true);
  const parentNode = useRef<HTMLDivElement>(null);
  const { dispatchCacheList, getCacheStatus } = useContext(KeepaliveContext) as StoreType;

  console.log('children 变化了吗？');

  /*
     拦截 children ，整体渲染流程如下：
     children 存入 store => Scope 通过 Context 获取 store => 并通过 ScopeItem 负责真实的挂载。
  */
  const ChildrenComponent = renderWithChildren(children);

  /* 初始化（同步执行）,此时已获取到 parentNode */
  useLayoutEffect(() => {
    if (!getCacheStatus(cacheId) && firstRender.current) {
      dispatchCacheList({
        actionType: 'created',
        payload: {
          /* 存入 id */
          cacheId,
          /* 存入真实父节点，待后续渲染用 */
          parentNode: parentNode.current,
          /* 缓存组件函数 */
          children: children,
        },
      });
    }
  });

  /* 异步渲染 */
  useEffect(() => {
    /* 首屏阶段 */
    /* 1. KeepAliveItem 第一次加载(注：此时会产生新的 parentNode) */
    firstRender.current = false;
    /* 2. 组件未被缓存 */
    dispatchCacheList({
      actionType: 'active',
      payload: { cacheId },
    });

    return () => {
      /* 卸载元素，元素隐藏 */
      dispatchCacheList({
        actionType: 'unActive',
        payload: { cacheId },
      });
    };
  }, []);

  /* update 阶段 */
  useLayoutEffect(() => {
    /* KeepAlive非首次渲染且 状态非 unActived */
    getCacheStatus(cacheId) !== 'unActived' &&
      !firstRender.current &&
      dispatchCacheList({
        actionType: 'update',
        payload: {
          cacheId,
          /* 重新传入 children */
          children,
        },
      });
  }, [children]);

  return <div ref={parentNode}></div>;
}

export default KeepAliveItem;
