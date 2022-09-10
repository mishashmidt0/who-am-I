import { AxiosError } from 'axios';

import { Box, Title } from './styles';

import { ReturnComponentType } from 'types';

export interface ErrorProps {
  error?: AxiosError;
  className?: string;
}
const userError = 400;
const userError2 = 500;
const Error = ({ className, error }: ErrorProps): ReturnComponentType => {
  const createErrorText = (): string => {
    if (
      error?.response?.status &&
      error?.response?.status >= userError &&
      error?.response?.status < userError2
    ) {
      return 'nothing :(';
    }

    return error!.message;
  };

  return (
    <Box className={className}>
      <Title variant="p1">{createErrorText()}</Title>
    </Box>
  );
};

export default Error;
