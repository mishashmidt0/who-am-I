import Image from 'next/image';

import { Box, Container, Title } from './styles';

import { ReturnComponentType } from 'types';

export interface CardProps {
  name: string;
  image: string;
  className?: string;
}

const Card = ({ className, name, image }: CardProps): ReturnComponentType => {
  return (
    <Box className={className}>
      <Container>
        <Image src={image} alt="hero" width={300} height={320} layout="responsive" />
      </Container>
      <Title variant="h3">{name}</Title>
    </Box>
  );
};

export default Card;
