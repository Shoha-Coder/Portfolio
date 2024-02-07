import Head from "next/head";
import Style from "@/styles/Home.module.scss";
import HomeContent from "@/components/HomeContent";
import Game from "@/components/Snake/Game";
import Container from "@/components/Container";
import React from "react";
import SEO from "@/layout/seo/seo";

const Home: React.FC = (): React.ReactElement => {
  return (
    <SEO
      metaTitle="Shoha-Coder | Home"
      metaKeywords={process.env.META_KEYWORD_HOME || ""}
      metaDescription="Front-end developer (JSX & TSX), web developer. Operational layout. I work with observance of terms and performance of Test tasks."
      author="Shoha Coder"
    >
      <Container>
        <div className={Style.Home}>
          <HomeContent />
          <div className={Style.Game}>
            <Game />
          </div>
        </div>
      </Container>
    </SEO>
  );
};

export default Home;
