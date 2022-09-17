import React from 'react';

import classNames from 'classnames';
import { UseFormRegister } from 'react-hook-form/dist/types/form';

import { ISignupForm } from '../../../pages/signupForm';

import style from './formField.module.scss';

import { Input } from 'ui-kit';

export type FormFieldType = 'text' | 'password' | 'phone' | 'textarea';

export interface IFormFieldProps {
  className?: string;
  error?: string;
  label?: string;
  name: string;
  register: UseFormRegister<ISignupForm>;
  type: FormFieldType;
  isFocused?: boolean;
  isRequired?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<IFormFieldProps> = ({
  className,
  error,
  label,
  name,
  register,
  type,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}) => {
  return (
    <div
      className={classNames(className, style.FormField, {
        [style.FormField__active]: isFocused,
      })}
    >
      <label className={style['FormField-Label']} htmlFor={name}>
        {label}
        {isRequired && <span className={style['FormField-LabelRequired']}>*</span>}
      </label>
      {type === 'text' && (
        <>
          <Input
            className={classNames({
              [style.Input__active]: isFocused,
              [style.Input__error]: error,
            })}
            {...register(name)}
            error={error}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error && <div className={style['FormField-ErrorMessage']}>{error}</div>}
        </>
      )}
    </div>
  );
};
