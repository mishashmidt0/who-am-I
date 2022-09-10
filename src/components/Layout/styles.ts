import styled from 'styled-components';

export const Box = styled.div``;
export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  align-items: start;
  justify-content: center;

  background: ${props => props.theme.palette.bg};
`;
