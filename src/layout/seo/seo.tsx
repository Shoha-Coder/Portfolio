import { SeoProps } from "@/assets/interface";
import Head from "next/head";
import React from "react";

const SEO: React.FC<SeoProps> = ({ children, metaKeywords, metaTitle }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <title>{metaTitle}</title>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content={metaKeywords} />
        <meta name="keywords:tag" content={metaKeywords} />
        <meta name="author" content="Shoha_Coder" />
        <meta
          name="description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta
          name="og:description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta
          name="google-site-verification"
          content="LEHoGtjiPhe7nBgOSzpT3Top-nNKx1eaBlllOPQLn8o"
        />
        <meta
          name="description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta property="og:url" content="https://shoha-coder.uz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shoha_Coder - Portfolio" />
        <meta
          property="og:description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta
          property="og:image"
          content="https://links.shoha-coder.uz/portfolio/opengraph.png"
        />
        <meta property="twitter:domain" content="shoha-coder.uz" />
        <meta property="twitter:url" content="https://shoha-coder.uz" />
        <meta name="twitter:title" content="Shoha_Coder - Portfolio" />
        <meta
          name="twitter:description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta
          name="twitter:image"
          content="https://links.shoha-coder.uz/portfolio/opengraph.png"
        />
        <meta
          property="og:image"
          content="https://links.shoha-coder.uz/portfolio/opengraph.png"
        />
        <meta
          property="og:description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta property="og:site" content="@shoha_coder" />
        <meta name="twitter:site" content="@shoha_coder" />
      </Head>
      {children}
    </>
  );
};

export default SEO;