import Script from 'next/script';

const GAScripts = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string
        }`}
        strategy="afterInteractive"
      />
      <Script id="gAnalytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string}');
        `}
      </Script>
    </>
  );
};

export default GAScripts;
