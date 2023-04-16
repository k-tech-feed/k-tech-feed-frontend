import type { AppProps } from 'next/app';
import Head from 'next/head';

import { NextUIProvider, useSSR } from '@nextui-org/react';

import { PageLayout } from '@/components';
import localFont from 'next/font/local';

const fonts = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-ExtraLight.subset.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraLight.subset.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Black.subset.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();

  return (
    isBrowser && (
      <NextUIProvider>
        <Head>
          <title>K Tech Feed</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLayout className={fonts.className}>
          <Component {...pageProps} />
        </PageLayout>
      </NextUIProvider>
    )
  );
}
