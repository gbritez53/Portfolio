import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="My name is Gabriel Britez and this is my portfolio, where you can find the projects and technologies in which I have worked. "
          />
          <meta
            property="og:title"
            content="Personal Portfolio | Gabriel Britez"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="My name is Gabriel Britez and this is my portfolio, where you can find the projects and technologies in which I have worked. "
          />
          <meta property="og:image" content="https://i.imgur.com/HIWmajr.png" />
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
