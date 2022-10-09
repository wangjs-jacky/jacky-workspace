---
group:
  title: 通用
---

## useState 是同步还是异步？

在下面的案例中，点击按钮会执行两次 `setState` 操作。

```javascript
() => {
  setNum((num) => num + 1);
  setNum((num) => num + 1);
};
```

代码有三种触发模式，同步触发，`setTimeout` 异步触发，及 `Promise.then` 异步触发。

## 原理分析

<code src="./demo01.tsx" desc="同步触发，useState 表现为异步批处理。异步触发，表现为同步，即多次渲染。">

> React 中的 Batch Update 是通过「Transaction」实现的。在 React 源码关于 Transaction 的部分，用一大段文字及一幅字符画解释了 Transaction 的作用：

```md
-                       wrappers (injected at creation time)
-                                      +        +
-                                      |        |
-                    +-----------------|--------|--------------+
-                    |                 v        |              |
-                    |      +---------------+   |              |
-                    |   +--|    wrapper1   |---|----+         |
-                    |   |  +---------------+   v    |         |
-                    |   |          +-------------+  |         |
-                    |   |     +----|   wrapper2  |--------+   |
-                    |   |     |    +-------------+  |     |   |
-                    |   |     |                     |     |   |
-                    |   v     v                     v     v   | wrapper
-                    | +---+ +---+   +---------+   +---+ +---+ | invariants
- perform(anyMethod) | | | | | | | | | | | | maintained
- +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
-                    | |   | |   |   |         |   |   | |   | |
-                    | |   | |   |   |         |   |   | |   | |
-                    | |   | |   |   |         |   |   | |   | |
-                    | +---+ +---+   +---------+   +---+ +---+ |
-                    |  initialize                    close    |
-                    +-----------------------------------------+
```

在上述图例中，`React` 会在 `useState/setState` 前后各加了段逻辑,只要是在同一个事务中的 `setState` 就会进行合并操作。

<Alert type="info">
特别注意的是：<strong>React</strong> 无法对 <strong>setTimeout/setInterval/Promise.then(fn)/fetch 回调/xhr 网络回调</strong> 添加事务逻辑(无法设置 <strong>isBatchUpdate</strong> 为 true) ，这也就是为什么在这些异步任务中，setState 表现为同步的原因。</Alert>

## 主动批处理

如果仍希望在异步任务中执行 `batchUpdate` 操作，可以尝试 `ReactDOM.unstable_batchedUpdates` 这个函数，代码如下：

<code src="./demo02" title="ReactDOM.unstable_batchedUpdates">
