---
nav:
  title: AHooks 案例
group:
  title: State
---

# useLatest

返回当前最新值的 Hook，可以避免闭包问题。

# 代码演示

## 模拟源码实现

```jsx | pure
import { useRef } from 'react';

const useLatest = <T>(value: T) => {
  // 核心: 保存在 ref 上面
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
```

## 案例

<code src="./demo">
