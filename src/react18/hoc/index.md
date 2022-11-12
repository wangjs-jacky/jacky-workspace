---
group:
  title: HOC

order: 1
---

# HOC 基础

`HOC` 的本质就是接受组件和返回组件。

接受的组件需要考虑到是： `Class Component` 还是 `Function Component`。这一点需要在 `TypeScript` 中体现。

返回的组件也存在两种情况。

## 情况一: `Function Component`

<code src="./demo01.tsx" title="HOC：返回 Function Component">

## 情况二：`Class Component`

与函数式组件不同的是，返回 `Class Component` 组件时，可以通过继承的方式对组件进行 `Wrap`（包裹）

<code src="./demo02" title="HOC：返回 Class Component">
