import React from 'react';

/* type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>; */

const CreateWithComponent = (title: string) => {
  /* 返回一个 HOC（即，入参组件，出参也是组件） */
  /* 难点：入参组件既有可能是一个 Class 也可能是 Function Component */
  return <P extends {}>(Component: React.ComponentType<P>) => {
    return (props: P): JSX.Element => {
      return (
        <div style={{ border: '1px solid #000' }}>
          <h2>接受的参数是：{title}</h2>
          <Component {...props} />
        </div>
      );
    };
  };
};

// 准备入参组件：Function Component
interface ComponentAType {
  attr: string;
}
const ComponentA: React.FC<ComponentAType> = ({ attr }) => {
  return <div style={{ backgroundColor: 'aquamarine', height: '80px' }}>Component-{attr}</div>;
};

/* 使用 CreateWithComponent 创造具有一个相同名称的 HOC */
const HOC = CreateWithComponent('child1');

/* 使用 HOC 生成可供消费组件 */
const Wrapper = HOC(ComponentA);

const Main = () => {
  /* 此组件可以传递参数 */
  return (
    <>
      <Wrapper attr="使用方案1"></Wrapper>
      <br></br>
      {HOC(ComponentA)({ attr: '使用方案2' })}
    </>
  );
};

export default Main;
