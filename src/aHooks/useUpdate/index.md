---
nav:
  title: AHooks 案例
group:
  title: Effects
---

# useUpdate

useUpdate 会返回一个函数，调用该函数会强制组件重新渲染。

# 代码演示

## 模拟源码实现

```jsx | pure
import { useCallback } from 'react';
import { useState } from 'react';

const useUpdate = () => {
  const [, update] = useState({});
  return useCallback(() => update({}), []);
};

export default useUpdate;
```

## 案例

<code src="./demo">
