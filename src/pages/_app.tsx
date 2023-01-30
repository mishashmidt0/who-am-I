import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';

import '../../public/styles/globals.css';

type AppProps<P = unknown> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

export default function App({ Component, pageProps }: AppProps<Record<string, Record<string, unknown>>>) {

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

      <Component {...pageProps} />

    </>
  );
}
