import React from 'react';

interface PropsType {
  info?: string;
  title?: string;
}
const SquareWithColor: React.FC<PropsType> = (props) => {
  return (
    <div>
      SquareWithColor
      <p>
        <strong> HOC接受参数:{props.title}</strong>
        <br></br>
        <strong> 渲染劫持参数:{props.info}</strong>
      </p>
    </div>
  );
};

export default SquareWithColor;
