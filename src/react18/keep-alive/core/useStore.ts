
/* 使用类型组件去缓存数据 */

import React, { ReactNode, useMemo, useRef, useState } from "react";

export interface cacheListType {
  /* 组件的 id */
  cacheId: string;
  /* 当前的生命周期 */
  status?: string;
  /* 父节点 */
  parentNode?: HTMLDivElement | null,
  /* 子节点 */
  /* children?: (props?: any) => ReactNode */
  children?: any
}

function modifyCacheList(cacheList: cacheListType[], cacheId: string, status: string) {
  let index = cacheList.findIndex((item) => {
    if (item.cacheId === cacheId) return true
  });
  if (index === -1) return;
  cacheList[index].status = status;
}

const reducer = (cacheList: cacheListType[], actionType: string, payload: cacheListType): cacheListType[] => {
  const { cacheId, parentNode, children } = payload;
  console.log("当前状态时", cacheList, actionType);

  if (actionType === "created") {
    cacheList.push({
      cacheId,
      parentNode: parentNode as any,
      children,
      status: "created"
    })
    console.log("created 后", cacheList);
    debugger

    return [...cacheList];
  } else if (actionType === "active") {
    let index = cacheList.findIndex((item) => {
      if (item.cacheId === cacheId) return true
    });
    if (index === -1) return cacheList;
    cacheList[index].status = "active";
    console.log("active周期", cacheList);
    debugger;
    return [...cacheList]
  } else if (actionType === "unActive") {
    console.log("children 被缓存了", children, cacheList);

    let index = cacheList.findIndex((item) => {
      if (item.cacheId === cacheId) return true
    });
    if (index === -1) return cacheList;
    cacheList[index].status = "unActive";
    return [...cacheList];
  } else if (actionType === "actived") {
    modifyCacheList(cacheList, cacheId, "actived")
    return [...cacheList];
  } else if (actionType === "unActived") {
    modifyCacheList(cacheList, cacheId, "unActived")
    return [...cacheList];
  } else if (actionType === "update") {
    console.log("children 被更新了");
    let index = cacheList.findIndex((item) => {
      if (item.cacheId === cacheId) return true
    });
    if (index === -1) return cacheList;
    cacheList[index].status = "actived";
    cacheList[index].children = children;
    return [...cacheList];
  }
  return [...cacheList];
};

export interface StoreType {
  cacheList: cacheListType[],
  dispatchCacheList: (param: dispatchType) => void;
  getCacheStatus: (cacheId: string) => string;
}

type dispatchType = {
  actionType: string,
  payload: cacheListType
}

const useStore = () => {
  const [cacheList, setCacheList] = useState<cacheListType[]>([]);

  /* 重新封装修改数据的方法 */
  const dispatchCacheList = ({ actionType, payload }: dispatchType) => {
    const newState = reducer(cacheList, actionType, payload);
    setCacheList(newState);
  };

  /* 封装函数，查询是否缓存 */
  const getCacheStatus = (cacheId: string) => {
    return cacheList.find((item) => {
      if (item.cacheId === cacheId) return true
    })?.status
  };

  const deleteCacheId = (cacheId: string) => {
    let index = cacheList.findIndex((item) => {
      if (item.cacheId === cacheId) return true
    });
    delete cacheList[index];
  };

  return useMemo(() => ({
    cacheList,
    dispatchCacheList,
    getCacheStatus,
    deleteCacheId
  }), [cacheList]);
}

export const useCacheDestory = () => {
  const { deleteCacheId } = useStore();
  return deleteCacheId;
}

export default useStore;
