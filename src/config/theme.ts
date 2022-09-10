import { createTheme } from 'styled-breakpoints';

const palette = {
  white: '#ffffff',
  bg: 'rgb(32, 35, 41)',
  asphalt: 'rgb(60, 62, 68)',
  dimgrey: '#696969',
};

const breakpoints = createTheme({
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
});

export default {
  ...breakpoints,
  palette,
};
