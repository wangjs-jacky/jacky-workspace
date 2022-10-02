import './importIcons';
import './icons.scss';
import React from 'react';
import { classnames } from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...restProps }) => {
  return (
    <svg className={classnames('sheng-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
