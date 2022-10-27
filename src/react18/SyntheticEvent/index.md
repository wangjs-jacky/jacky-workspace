---
group:
  title: 通用

order: 2
---

## React 合成事件

### 捕获与冒泡的概念

当点击 `span` 时，必然会经历过捕获阶段----》目标阶段----》冒泡阶段：

<img src="https://wjs-tik.oss-cn-shanghai.aliyuncs.com/image-20221027231130063.png" style="zoom:50%;" />

<code src="./demo03">

> ps: 写这个案例 demo 本身就有难度，`addEventListener` 第二个参数设置为 `true` 为捕获阶段。

### 三个与事件监听相关的 `API`

它们分别是 `event.preventDefault`、`event.stopPropagation` 与 `event.stopImmediatePropagation`。

1. `event.preventDefault`:此方法常用于阻止元素默认行为，比如点击 a 标签除了执行我们绑定的 click 事件外，它还会执行 a 标签默认的跳转。再或者 form 表达点击提交会将 form 的值传递给 action 指定地址并刷新页面，像这类行为我们均可以通过 preventDefault 阻止。

2. `event.stopPropagation`: 此方法一般用于阻止冒泡，比如父子都绑定了点击事件，但点击子时我不希望父在冒泡阶段也被触发。

3. `event.stopImmediatePropagation`: 在事件监听，支持为同一 `dmo` 监听多个行为，则此函数可以用于在同一 dom 绑定多个监听的场景下，在执行了某个监听后，将其它监听都阻止掉。

   ```javascript
   // 目标阶段
   span.addEventListener('click', (e) => {
     e.stopImmediatePropagation();
     console.log('目标阶段---span-1');
   });
   span.addEventListener('click', (e) => {
     console.log('目标阶段---span-2');
   });
   ```

### `React` 中的原生事件和合成事件执行先后案例

<code src="./demo04" title="点击按钮后，原生先触发,合成后触发">

> ps: React 提供 `onClick` 事件函数名 + `Capture` 用于模拟原生捕获

总结合成事件与原生事件执行顺序：

- 合成事件不管冒泡阶段还是捕获阶段，都要晚于原生事件。
- 冒泡阶段不管合成事件还是原生事件，冒泡阶段都要晚于捕获阶段。

这里就不讨论原理了，无法合成事件是代理在 `document` 层(v16)，还是代理在 `container` 层(v17) ，结论永远是 `合成事件` 要晚于 `原生事件`，在下面给出的这个例子中，就必须要事件原生事件实现。

### 一个典型场景：模拟实现弹窗功能

现模拟一个弹窗功能，点击按钮打开弹窗，要求如下：

1. 点击屏幕空白处，关闭弹窗。

2. 点击弹窗区域，不关闭弹窗。

<code src="./demo01" title="在弹窗区域内使用 stopPropagation 无法组织弹窗不被关闭">

失效原因：点击空白区域是一个`原生事件`，点击弹窗是`合成事件`。在合成事件中使用 `e.stopPropagation` 是无法阻止掉 `原生事件` 中的冒泡的。

解决方案：将点击弹窗这个行为也改为 `原生事件`，在`原生事件`中是存在冒泡行为，即可以使用 `e.stopPropagation` 行为的。

<code src="./demo02" title="在弹窗区域内使用 stopPropagation 无法组织弹窗不被关闭">

### 参考资料：

1. [react 八千字长文深入了解 react 合成事件底层原理，原生事件中阻止冒泡是否会阻塞合成事件？](https://juejin.cn/post/7118626759162986526)

2. [彭道宽：由浅到深的 React 合成事件](https://juejin.cn/post/6844903988794671117)

3. [React 官网: 合成事件的解析](https://zh-hans.reactjs.org/docs/events.html)
