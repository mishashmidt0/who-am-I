import { Box, Title } from './styles';

import { ReturnComponentType } from 'types';

export interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps): ReturnComponentType => {
  return (
    <Box className={className}>
      <Title variant="p1">...Loading</Title>
    </Box>
  );
};

export default Loading;
