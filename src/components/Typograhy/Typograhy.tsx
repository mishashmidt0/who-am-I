import React from 'react';

import {
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  P1Styled,
  P2Styled,
} from './styles';

import { ReturnComponentType } from 'types';

const variantsMapping = {
  h1: H1Styled,
  h2: H2Styled,
  h3: H3Styled,
  h4: H4Styled,
  h5: H5Styled,
  p1: P1Styled,
  p2: P2Styled,
};

type TypograhyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p1' | 'p2';
  children: React.ReactNode;
  className?: string;
};

const Typograhy = ({
  variant,
  className,
  children,
  ...props
}: TypograhyProps): ReturnComponentType => {
  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

export default Typograhy;
