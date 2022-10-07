import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
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
  const result = visible ? (
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
  return ReactDOM.createPortal(result, document.body);
};

/* 抽象函数 */
const modal = (content: ReactNode, bottons?: React.ReactElement[], afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), divEle);
    ReactDOM.unmountComponentAtNode(divEle);
    divEle.remove();
  };

  const component = (
    <Dialog
      visible={true}
      /* 注：可在此处插入 生命周期 (before 或者 after)*/
      onClose={() => {
        close();
        afterClose && afterClose;
      }}
      buttons={bottons}
    >
      {content}
    </Dialog>
  );

  /* 1. 创建 div 元素 */
  const divEle = document.createElement('div');
  /* 2. 挂载到真实的 body 下面 */
  document.body.append(divEle);
  /* 3. 通过 render 函数将虚拟DOM(component) 渲染到真实的 DOM(divELe) 上 */
  ReactDOM.render(component, divEle);

  return { close };
};

/* alert 需要补充定义关闭 */
const alert = (content: React.ReactNode) => {
  /* 此部分绝妙，类似递归，但是涉及到函数定义与执行的关系 */
  const { close } = modal(content, [<button onClick={() => close()}> OK</button>]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    /* todo */
    close();
    yes && yes();
  };

  const onNo = () => {
    close();
    no && no();
  };

  const buttons = [<button onClick={onYes}>yes</button>, <button onClick={onNo}>no</button>];

  const { close } = modal(content, buttons, no);
};

export { alert, confirm, modal };

export default Dialog;
