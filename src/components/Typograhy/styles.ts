import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const H1Styled = styled.h1`
  font-size: 36px;
  line-height: 44px;
  font-weight: bold;

  ${up('lg')} {
    font-size: 42px;
    line-height: 52px;
  }
`;

export const H2Styled = styled.h2`
  font-size: 28px;
  line-height: 36px;
  font-weight: bold;

  ${up('lg')} {
    font-size: 30px;
    line-height: 38px;
  }
`;

export const H3Styled = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;

  ${up('lg')} {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const H4Styled = styled.h4`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;

  ${up('lg')} {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const H5Styled = styled.h5`
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;

  ${up('lg')} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const P1Styled = styled.p`
  font-size: 16px;
  line-height: 22px;

  ${up('lg')} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const P2Styled = styled.p`
  font-size: 14px;
  line-height: 18px;

  ${up('lg')} {
    font-size: 16px;
    line-height: 22px;
  }
`;
