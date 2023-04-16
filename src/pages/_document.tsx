import Document, { type DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';

import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
