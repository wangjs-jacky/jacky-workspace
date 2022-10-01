---
title: useBoolean
nav:
  title: AHooks 案例
group:
  title: LifeCycle
---

# useBoolean

优雅的管理 boolean 状态的 Hook。

# 代码演示

## 模拟源码实现

```jsx | pure
import { useState } from 'react';

interface funType {
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

type useBooleanType = [boolean, funType];

const useBoolean = (initialValue: boolean = false): useBooleanType => {
  const [flag, setFlag] = useState(initialValue);
  const setTrue = () => setFlag(true);
  const setFalse = () => setFlag(false);
  const toggle = () => setFlag((s) => !s);
  return [flag, { setTrue, setFalse, toggle }];
};

export default useBoolean;
```

## 案例

<code src="./demo">
