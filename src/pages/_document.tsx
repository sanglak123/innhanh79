import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>INNHANH79 || IN BẢN VẺ || IN QUẢNG CÁO || IN KTS</title>
      <meta name="description" content="IN KTS || IN QUẢNG CÁO || IN BẢN VẼ" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <link ref="stylesheet" href="/css/main.css" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
