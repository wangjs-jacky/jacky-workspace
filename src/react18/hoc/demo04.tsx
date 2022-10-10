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
  /* 直接继承需要包装的组件*/
  return class XXX extends ListComponent {
    render() {
      const element = super.render();
      const newElement = React.createElement('li', {}, `Hello,my name is Jacky`);
      const newChildElement = React.Children.map(
        (element as ReactElement).props!.children.props.children,
        (child, index) => {
          if (index === 2) return newElement;
          return child;
        },
      );
      return React.cloneElement(
        element as ReactElement,
        (element as ReactElement).props,
        newChildElement,
      );
    }
  };
}

export default WithListComponent(ListComponent);
