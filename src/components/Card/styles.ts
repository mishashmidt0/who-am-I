import styled from 'styled-components';

import Typograhy from 'components/Typograhy';

export const Box = styled.div`
  width: 250px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme.palette.asphalt};
  border-radius: 10px;
  overflow: hidden;

  border: 1px solid ${props => props.theme.palette.dimgrey};
`;
export const Title = styled(Typograhy)`
  font-size: 20px;
  text-align: center;

  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  color: ${props => props.theme.palette.white};
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
