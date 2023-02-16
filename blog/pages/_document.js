import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          {/*<link rel="stylesheet" href="/static/main/all.css" type="text/css" />*/}
          <script src="/static/js/jquery.min.js" async />
          {/*<link href="/static/main/bootstrap.min.css" rel="stylesheet" />*/}
          <script src="/static/js/bootstrap.bundle.min.js" async />
          <script src="/static/js/alertify.min.js" async />
          {/*<link rel="stylesheet" href="/static/main/alertify.min.css" />*/}
          {/*<link rel="stylesheet" href="/static/main/default.min.css" />*/}
          {/*<link rel="stylesheet" href="/static/main/style.css" />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
