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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <title>{metaTitle}</title>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keyword" content={metaKeywords} />
        <meta name="author" content={author} />
        <meta name="description" content={metaDescription} />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      {children}
    </>
  );
};

export default SEO;
