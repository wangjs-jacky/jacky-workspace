---
title: useMount
nav:
  title: AHooks 案例
group:
  title: LifeCycle
---

# useMount

只在组件初始化时执行的 Hook。

# 代码演示

## 模拟源码实现

```jsx | pure
import { useEffect } from 'react';

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
```

## 案例

<code src="./demo">
