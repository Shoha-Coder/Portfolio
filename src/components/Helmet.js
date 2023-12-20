import Head from "next/head";
import React from "react";

const Helmet = (props) => {
  return (
    <Head>
      <title>Shoha_Coder | {props.title}</title>
    </Head>
  );
};

export default Helmet;