import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { GlobalStyles } from 'config/globalStyles';
import theme from 'config/theme';
import { ReturnComponentType } from 'types';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps): ReturnComponentType => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
