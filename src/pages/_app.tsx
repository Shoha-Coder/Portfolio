import { Provider } from "@/assets/Context/Context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        <Analytics />
        <SpeedInsights />
      </Provider>
  );
};

export default App;
