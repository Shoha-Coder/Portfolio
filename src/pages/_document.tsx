import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
 
const Document: React.FC = (): React.ReactElement => {
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

export default Document