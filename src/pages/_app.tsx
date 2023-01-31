import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';

import { fork, Scope, serialize } from 'effector';
import { Provider } from 'effector-react/scope';

import '../../public/styles/globals.css';

let clientScope: Scope;

type AppProps<P = unknown> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

export default function App({ Component, pageProps }: AppProps<Record<string, Record<string, unknown>>>) {

  const scope = fork({
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  });

  if (typeof window !== 'undefined') clientScope = scope;

  return (

    <>
      <Head>
        <meta content='#16171D' name='theme-color' />
        <meta
          content='width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no,viewport-fit=cover'
          name='viewport'
        />
        <meta content='noindex' name='robots' />
      </Head>
      <Provider value={scope}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
