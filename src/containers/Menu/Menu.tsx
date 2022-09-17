import { Box } from './styles';

import { ReturnComponentType } from 'types';

export interface MenuProps {
  className?: string;
}

const Menu = ({ className }: MenuProps): ReturnComponentType => {
  return (
    <Box className={className}>
      <p>Menu</p>
    </Box>
  );
};

export default Menu;
