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
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/shoha-coder.uz/Shoha_Coder%20-%20Portfolio/https%3A%2F%2Fshoha-coder.uz%2Fopengraph.png/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="shoha-coder.uz" />
        <meta property="twitter:url" content="https://shoha-coder.uz" />
        <meta name="twitter:title" content="Shoha_Coder - Portfolio" />
        <meta
          name="twitter:description"
          content="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/shoha-coder.uz/Shoha_Coder%20-%20Portfolio/https%3A%2F%2Fshoha-coder.uz%2Fopengraph.png/og.png"
        />
      </Head>
      {children}
    </>
  );
};

export default SEO;
