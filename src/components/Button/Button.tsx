import React, { FunctionComponent, HTMLAttributes, ReactChildren } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactChildren;
  text?: string;
}

export const DefaultButton: FunctionComponent<IButtonProps> = ({
  children,
  text,
  ...rest
}) => {
  return (
    <button {...rest}>
      {text}
      {children}
    </button>
  );
};
