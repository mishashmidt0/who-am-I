import styled from 'styled-components';

import InputText from 'components/InputText';
import Typograhy from 'components/Typograhy';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const InputSearch = styled(InputText)``;
export const Title = styled(Typograhy)``;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
