import Head from 'next/head';
import { Header } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>K Tech Feed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
