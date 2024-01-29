import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default App;
