import React, { ReactElement } from 'react';

/* 原组件结构（Class Component） */
class ListComponent extends React.Component {
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

function WithListComponent<P extends {}>(ListComponent: React.ComponentClass<P>) {
  return class AAA extends React.Component {
    render() {
      // 1. 通过 render 函数获取 jsx 对象
      const element = new ListComponent(this.props as P).render();

      // 2. 修改 jsx 对象
      // 2.1 创建新的 Element ，即 <li>Hello,my name is jacky</li>
      const newElement = React.createElement('li', {}, `Hello,my name is jacky`);
      // 2.2 基于 element 的 children 生成 newChildren
      const newChildElement = React.Children.map(
        (element as ReactElement).props!.children.props.children,
        (child, index) => {
          if (index === 2) return newElement;
          return child;
        },
      );

      // 2.3 通过 React.cloneElement 常用于对 props 及 children 变化时的修改
      return React.cloneElement(
        element as ReactElement,
        (element as ReactElement).props,
        newChildElement,
      );
    }
  };
}

export default WithListComponent(ListComponent);
