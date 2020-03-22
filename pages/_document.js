import Document, { Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Head from "next/head";

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
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=fallback"
            rel="stylesheet"
          />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Corona Stats</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="images/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="images/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="images/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="images/icons/apple-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="images/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="images/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="images/icons/favicon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="384x384"
            href="images/icons/favicon-384x384.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="images/icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
