import Head from "next/head";

export default ({
  title = "Corona Stats",
  description = "Corona stats on the go",
}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="google-site-verification"
      content="HhQbOzSv2xxfydDeOFdoevOzJtya5qg4yfkC3tAiltg"
    />
    <meta name="description" content={description} />
    <title>{title}</title>

    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" sizes="72x72" href="/icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/icon-512x512.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="384x384"
      href="/icon-384x384.png"
    />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="theme-color" content="#317EFB" />
  </Head>
);
