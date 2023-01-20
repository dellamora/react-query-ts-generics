/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="Francielle Dellamora" />
      </Head>
      <body>
        <div id="modal-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
