import { InputHTMLAttributes } from 'react';

import { Box, Input } from './styles';

import { ReturnComponentType } from 'types';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

const InputText = ({
  className,
  placeholder,
  ...other
}: InputTextProps): ReturnComponentType => {
  return (
    <Box className={className}>
      <Input placeholder={placeholder} {...other} />
    </Box>
  );
};

export default InputText;
