---
group:
  title: HOC

order: 2
---

# HOC 应用：拦截渲染

对渲染的拦截有两种方式：

1. 在原有组件的基础上，再包裹一层，通过 `visible` 属性控制组件渲染。

2. 获取原有组件的 `JSX.Element` ，修改后弹出。

### 案例一：控制渲染

对于一个没有 `visible` 属性的组件，包括一个新的 `visible` 属性，如：

```jsx | pure
const HOC = (WrapComponent) =>
  class Index extends WrapComponent {
    render() {
      if (this.props.visible) {
        return super.render();
      } else {
        return <div>暂无数据</div>;
      }
    }
  };
```

### 案例二：拦截 `ReactElement`

上面这个案例主要在原有组件的基础上包一层结构（添加 `visible` 变量控制组件的加载情况），其实我们还可以进一步对原有组件的 `JSX.Element` 结构拦截。

核心步骤就三步：

1. 获取原有组件的`JSX` 结构。

2. 使用 `React` 提供的方案，对 `JSX` 元素进行修改。

3. 将修改后的 `JSX` 元素渲染到页面上。

现有组件结构：

```jsx
import React from 'react';
class Index extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>react</li>
          <li>vue</li>
          <li>Angular</li>
        </ul>
      </div>
    );
  }
}

export default Index;
```

将上述 `List` 中最后一个 `<li>Angular</li>` 标签替换为：`<li>Hello,my name is Jacky</li>`

#### 1.使用继承 `React.Component` 的方式

```jsx |pure
 const element = new ListComponent(this.props as P).render();
```

<code src="./demo03">

#### 2.使用反向继承的方式修改

```jsx |pure
const element = super.render();
```

<code src="./demo04">
