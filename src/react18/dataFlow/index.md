---
group:
  title: 通用

order: 4
---

## React 组件复用

以下面这个案例为例，其中 在 `<App />` 中维护 `products` 数组，而在 `<List>` 组件中存在一个 `button` 用于控制 `selectedIndex` 状态。

### 数据驱动

数据驱动的写法就很简单，只需要在 `<List>` 中进一步处理下数组，新增一个 `isHighlighted` 属性即可,完全遵循 `React` 渲染公式：`UI = Hooks(state)`(即，数据驱动视图)。

```javascript | pure
const products = [
  { title: 'Cabbage', id: 1, isHighlighted: true },
  { title: 'Garlic', id: 2, isHighlighted: false },
  { title: 'Apple', id: 3, isHighlighted: false },
];
```

<code src="./data-drive">

### 渲染劫持

在 `Class Component` 时代存在两种数据流组织方式，其一，是 `HOC`。其二是，`render props`.

使用 `HOC` 案例中的渲染拦截的方式重构 `JSX.Element`

技巧：使用 `React.Children` 搭配 `React.cloneElement` 的固定方式实现（常用于修改已存在 `JSX` 的 `props`）

其中 `React.cloneElement` 的作用是维护 `ref` 属性不变。

<code src="./hoc">

### 使用 `renderProps`

在 `Class Component` 时代，第二套数据流方案。这里介绍两种写法。

`render props` 的表现：

1. 从组件搭建角度看,相当于把原先要渲染在 `<List />` 内部的部分提取到与 `<App />` 同级的区域。

2. 从状态流的角度看，相当于 `List` 内部的 `selectedIndex` 通过回调拿到外部。

组件结构如下：

```jsx | pure
const App = ()=>{
  return <List
    items={product}
    /* 注意：下面 product，和 isHighlighted 为 List 内部变量，Row 组件和 App 同级 */
    render={(product,isHighlighted)=>{
      return <Row title={product.title}>
    }}
  />
}
```

可以发现这种写法存在一个问题，`isHighlighted` 的逻辑写在 `<List />` 组件内部，`Row` 是以 `render` 的形式传入。完整案例如下：

<code src="./render-props">

### 奇技淫巧：render-props 也可以结合 HOC

上述案例中，需要两个参数才可以完成子组件的渲染 `product.title` 以及 `isHighlighted` 变量，且这两个参数是通过回调拿到外部组件的。这部分可由 `Context`进一步缩减。

思路：传入 `<Row>` 组件时，自动在外层包裹上一个 `Context.Provider` 变量，在`Row` 中通过 `useContext` 获取渲染所需的属性，案例如下：

<code src="./render-props-and-hoc">

以上方案的本质，实际上就是把组件作为参数传入，当以 `<Layout>{childre}</Layout>` 的形式为传统的组件包裹型写法，当以 `WithHocComponent(Component)` 的形式传入时，则称为 `HOC` 组件，当以 `<App render={({xxx})=> <Component xxx={xxx}>}>` 形式则为 `render props` 写法，相比于 `Hoc` 的优势在于更安全，因为只能使用回调暴露出的变量。

### React Hooks 抽离出 useList 钩子函数

在 `Hooks` 时代，其核心就是具备分离状态的能力，这个例子就能完全展现 Hooks 的优势，之前这么难的原因就在于 `List` 组件中存在一个 `button` 按钮，因此需要缓存 `selectedIndex` 这个状态。

而通过封装 `useList` 这个钩子将逻辑完全从 UI 结构中解耦出来，提取后可将结构移动到任何组件结构中。

<code src="./hooks">

## 参考案例：

1.[React 官方文档](https://beta.reactjs.org/reference/react/cloneElement)
