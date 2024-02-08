import { SeoProps } from "@/assets/interface";
import Head from "next/head";
import React from "react";

const SEO: React.FC<SeoProps> = ({
  children,
  metaDescription,
  metaKeywords,
  metaTitle,
  author,
}) => {
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
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image" content="https://shoha-coder.uz/opengraph.png" />
        <meta property="og:image:alt" content="error" />
        <meta property="twitter:site" content="@shoha_coder" />
        <meta
          name="google-site-verification"
          content="LEHoGtjiPhe7nBgOSzpT3Top-nNKx1eaBlllOPQLn8o"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://shoha-coder.uz/" />
        <meta name="url" content="http://shoha-coder.uz/" />

        <meta property="og:site_name" content="Shoha_Coder website" />
        <meta property="og:title" content="Shoha_Coder - Portfolio" />
      </Head>
      {children}
    </>
  );
};

export default SEO;
