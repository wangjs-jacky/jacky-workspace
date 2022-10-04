import React from 'react';
import Icon from '../Icon';
import './dialog.scss';

/*
  children 规则：
  type ReactNode = ReactElement | string | number | ReactFragment | ReactPortal | boolean | null | undefined;
  type ReactElemnt 存在具有 type props key
*/
interface PropsType {
  visible: boolean;
  children: React.ReactNode;
  buttons?: React.ReactElement[];
}

const Dialog: React.FC<PropsType> = ({ visible, buttons, children }) => {
  return visible ? (
    <>
      <div className="sui-dialog-mask"></div>
      <div className="sui-dialog">
        <div className="sui-dialog-close">
          <Icon name="close" />
        </div>
        <div className="sui-dialog-header"> 提示 </div>
        <div className="sui-dialog-main">{children}</div>
        <div className="sui-dialog-footer">
          {buttons &&
            buttons.map((button, index) => {
              /* 在 Element 中绑定 key  */
              return React.cloneElement(button, { key: index });
            })}
        </div>
      </div>
    </>
  ) : null;
};

export default Dialog;
