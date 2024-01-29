import Head from "next/head";
import React from "react";

interface HelmetProps {
  title: string;
}

const Helmet: React.FC<HelmetProps> = ({ title }): React.ReactElement => {
  return (
    <Head>
      <title>Shoha_Coder | {title}</title>
    </Head>
  );
};

export default Helmet;
