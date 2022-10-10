---
group:
  title: HOC

order: 3
---

# HOC 应用：动态加载组件

## 动态加载组件

动态加载的核心：

通过 `Promise.then` 获取 `Function` 组件。

```javascript
useEffect(() => {
  if (Component) return;
  asyncComponent()
    .then((module) => module?.default || module)
    .then((c) => {
      /* 这部分有两个写法 */
      return setComponent(() => c as React.FC);
    });
}, []);
```

在上述案例中，可以缓存两种类型的数据：

1. 其一，是缓存 `Function Component` 或者 `Class Component`。

2. 其二、是缓存 `JSX.Element` （但此方法有缺陷，外部用户使用时无法传递 `props`）

### 缓存 `Function` 组件

```tsx | pure
// @ts-ignore
const [Component, setComponent] = useState<MaybeNull<React.FC<P>>>(null);

/* 缓存组件 */
// @ts-ignore
setComponent(() => c as React.FC);

/* 使用时： */
// @ts-ignore
<Component {...props} info="123" />;
```

<code src="./demo05" title="缓存 Function Function">

```tsx | pure
// @ts-ignore
const [Element, setElement] = useState<MaybeNull<JSX.Element>>(null);

/* 缓存组件：只能在创建时传递 props */
// @ts-ignore
setElement(() => c({ ...props, info: '123' }));
```

<code src="./demo06" title="缓存 Function JSX Element">

> 注：如果缓存的是 `JSX.Element`,无法动态监听到 `inpurt` 输入框的变化，只能再次通过 `React.render(React.cloneElement(xxx,xxx,xxx))` 这种方式刷新。（暂未演示）
