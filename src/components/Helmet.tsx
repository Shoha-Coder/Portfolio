import Head from "next/head";
import React from "react";

const Helmet: React.FC<HelmetProps> = ({ title }): React.ReactElement => {
  return (
    <Head>
      <title>Shoha_Coder | {title}</title>
    </Head>
  );
};

export default Helmet;
