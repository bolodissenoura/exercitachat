import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Responda suas questões em segundos."
          />
          <meta property="og:site_name" content="exercitaaibio.io" />
          <meta
            property="og:description"
            content="Responda suas questões em segundos."
          />
          <meta property="og:title" content="Exercita ai" />
          <meta name="exercitaai:card" content="summary_large_image" />
          <meta name="exercitaai:title" content="Exercita ai" />
          <meta
            name="exercitaai:description"
            content="Responda suas questões em segundos."
          />
          <meta
            property="og:image"
            content="https://cdn.discordapp.com/attachments/1082297301072105544/1126359728147136583/exercitaaa.png"
          />
          <meta
            name="exercitaai:image"
            content="https://cdn.discordapp.com/attachments/1082297301072105544/1126359728147136583/exercitaaa.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
