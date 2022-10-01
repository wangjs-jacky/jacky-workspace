// 此函数目的永远能够在各个渲染周期中永远拿到最新值。

import { useRef } from 'react';

const useLatest = <T,>(value: T) => {
  // 核心: 保存在 ref 上面
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
