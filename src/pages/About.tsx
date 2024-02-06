import Container from "@/components/Container";
import React, { useState } from "react";
import Style from "@/styles/About.module.scss";
import AboutIconsSide from "@/components/AboutIconsSide";
import AboutDropdowns from "@/components/AboutDropdowns";
import AboutShow from "@/components/AboutShow";
import SEO from "@/layout/seo/seo";

const About: React.FC = (): React.ReactElement => {
  return (
    <SEO
      metaTitle="Shoha-Coder | About"
      metaKeywords={process.env.META_KEYWORD_ABOUTФ || ""}
      metaDescription="Shoha Coder's Portfolio About Page"
      author="Shoha Coder"
    >
      <Container>
        <div className={Style.About}>
          <p>_about-me</p>
          <AboutIconsSide />
          <AboutDropdowns />
          <AboutShow />
        </div>
      </Container>
    </SEO>
  );
};

export default About;
