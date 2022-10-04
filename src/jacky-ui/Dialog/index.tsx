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
  /* 底部 footer 传入 Element */
  buttons?: React.ReactElement[];
  onClose: React.MouseEventHandler;
  /* 点击遮罩层可以关闭 */
  closeOnClickMask?: boolean;
}

const Dialog: React.FC<PropsType> = ({ visible, buttons, children, onClose, closeOnClickMask }) => {
  const onClickClose = (e: React.MouseEvent<Element, MouseEvent>) => {
    onClose(e);
  };
  const onClickMask = (e: React.MouseEvent<Element, MouseEvent>) => {
    closeOnClickMask && onClose(e);
  };
  return visible ? (
    <>
      <div className="sui-dialog-mask" onClick={onClickMask}></div>
      <div className="sui-dialog">
        <div className="sui-dialog-close" onClick={onClickClose}>
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
