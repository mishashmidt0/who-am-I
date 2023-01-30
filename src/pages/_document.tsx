import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ru'>
      <Head className='bg-color_bg font-roboto text-textHeading overflow-x-hidden scroll-smooth text-base antialiased'
        lang='ru'
        prefix='og: http://ogp.me/ns#'>

      </Head>

      <body className='flex flex-1 flex-col'>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
