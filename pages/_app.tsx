import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { GlobalStyles } from 'config/globalStyles';
import theme from 'config/theme';
import { ReturnComponentType } from 'types';

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
