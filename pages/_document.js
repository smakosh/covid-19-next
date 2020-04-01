import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const pageProps = await super.getInitialProps(ctx);

    const styleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => pageProps =>
            styleSheet.collectStyles(<App {...pageProps} />)
        });

      pageProps.styles = (
        <>
          {pageProps.styles}
          {styleSheet.getStyleElement()}
        </>
      );
    } finally {
      styleSheet.seal();
    }

    return pageProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
