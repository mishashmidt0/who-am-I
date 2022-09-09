import styled from 'styled-components';

import Typograhy from 'components/Typograhy';

export const Box = styled.div`
  width: 250px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: red;
  border-radius: 10px;
  overflow: hidden;
`;
export const Title = styled(Typograhy)``;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
