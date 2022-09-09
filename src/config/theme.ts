import { createTheme } from 'styled-breakpoints';

const palette = {
  white: '#ffffff',
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
