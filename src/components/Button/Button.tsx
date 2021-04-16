import React, { FunctionComponent, HTMLAttributes, ReactChildren } from 'react';
import { useFela } from 'react-fela';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactChildren;
  text?: string;
}

export const DefaultButton: FunctionComponent<IButtonProps> = ({
  children,
  text,
  ...rest
}) => {
  const { css } = useFela();

  const styles = css({
    appearance: 'none',
    background: '#fff',
    border: '.05rem solid #5755d9',
    borderRadius: '.1rem',
    color: '#5755d9',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '.8rem',
    height: '1.8rem',
    lineHeight: '1.2rem',
    outline: 'none',
    textAlign: 'center',
  });

  return (
    <button {...rest} className={styles}>
      {text}
      {children}
    </button>
  );
};
