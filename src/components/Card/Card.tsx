import Image from 'next/image';

import { Box, Container, Title } from './styles';

import image from 'resources/test.jpg';
import { ReturnComponentType } from 'types';

export interface CardProps {
  className?: string;
}

const Card = ({ className }: CardProps): ReturnComponentType => {
  return (
    <Box className={className}>
      <Container>
        <Image src={image} alt="hero" layout="fill" />
      </Container>
      <Title variant="h3">Name</Title>
    </Box>
  );
};

export default Card;
