import { Provider } from "@/assets/Context/Context";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}): React.ReactElement => {
  return (
      <Provider>
        <Component {...pageProps} />
      </Provider>
  );
};

export default App;
