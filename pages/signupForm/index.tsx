import React, { ReactElement, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import * as yup from 'yup';

import style from 'styles/signupForm.module.scss';
import { FormField } from 'ui-kit';

export interface ISignupForm extends FieldValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  rePassword: string;
}

export const regex =
  /^[A-ZÀ-ÿА-Я][a-zà-ÿа-я]*(([^\\S\\n\\t]?(\\'|\\’|-|[^\\S\\n\\t])[^\\S\\n\\t]?)([A-ZÀ-ÿА-Я]?[a-zà-ÿа-я])+)*$/gm;

export const regexNotNumber = /^([^0-9]*)$/gm;

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(regexNotNumber, 'Имя не должно содержать цифры')
    .required('Укажите имя'),
  lastName: yup
    .string()
    .matches(regexNotNumber, 'Фамилия не должна содержать цифры')
    .required('Укажите фамилию'),
});

const SignupForm: React.FC = (): ReactElement => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    password: false,
    rePassword: false,
  });

  const watchAllFields = watch();

  const onSubmit = (data: ISignupForm): void => {
    console.log(data);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    setIsFocused({ ...isFocused, [event.target.name]: true });
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (watchAllFields[event.target.name as keyof ISignupForm] !== '') {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  console.log(isFocused.lastName);

  return (
    <div className={classNames(style.SignupForm)}>
      <div className={classNames(style['SignupForm-Content'])}>
        <h1>Регистрация</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classNames(style['SignupForm-FormFieldGroup'])}>
            <FormField
              label="Имя"
              name="firstName"
              type="text"
              register={register}
              error={errors.firstName && errors.firstName.message}
              isFocused={isFocused.firstName}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <FormField
              label="Фамилия"
              name="lastName"
              type="text"
              register={register}
              error={errors.lastName && errors.lastName.message}
              isFocused={isFocused.lastName}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>

          <button type="submit">signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
