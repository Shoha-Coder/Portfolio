import Container from "@/components/Container";
import React, { useState } from "react";
import Style from "@/styles/About.module.scss";
import AboutIconsSide from "@/components/AboutIconsSide";
import AboutDropdowns from "@/components/AboutDropdowns";
import AboutShow from "@/components/AboutShow";
import Helmet from "@/components/Helmet";

const About: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Helmet title="About" />
      <div className={Style.About}>
        <p>_about-me</p>
        <AboutIconsSide />
        <AboutDropdowns />
        <AboutShow />
      </div>
    </Container>
  );
};

export default About;
