import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from 'react';

import classNames from 'classnames';

import style from './input.module.scss';

export interface IInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
}

export const Input = forwardRef(
  (
    { className, name, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        className={classNames(className, style.Input, { [style.Input__error]: error })}
        type={type}
        name={name}
        ref={ref}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
