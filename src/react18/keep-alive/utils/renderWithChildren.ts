import React, { cloneElement, isValidElement, ReactComponentElement, ReactNode } from "react";

function isFunction(fn: any) {
  return typeof fn === "function";
}

const renderWithChildren: any = (children: any) => (mergeProps: any) => {
  return children
    ? isFunction(children)
      ? children(mergeProps) /* 如果是 Function 则直接 props */
      : isValidElement(children)
        ? cloneElement(children, mergeProps) /* 如果是 ReactNode 则通过 clone 赋 props */
        : null
    : null;
};

export default renderWithChildren;
