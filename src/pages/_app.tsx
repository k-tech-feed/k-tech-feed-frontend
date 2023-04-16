import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

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
  return (
    <NextUIProvider>
      <main className={fonts.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
