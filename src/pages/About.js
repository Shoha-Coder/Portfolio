import Container from "@/components/Container";
import React, { useState } from "react";
import Style from "@/styles/About.module.scss";
import AboutIconsSide from "@/components/AboutIconsSide";
import AboutDropdowns from "@/components/AboutDropdowns";
import AboutShow from "@/components/AboutShow";
import Helmet from "@/components/Helmet";

const About = () => {
  const [isProfessionalInfoActive, setIsProfessionalInfoActive] =
    useState(false);
  const [isProfessionalInfoFileActive, setIsProfessionalInfoFileActive] =
    useState(false);
  const [isPersonalInfoActive, setIsPersonalInfoActive] = useState(false);
  const [isHobbiesActive, setIsHobbiesActive] = useState(false);
  const [isHobbiesFileActive, setIsHobbiesFileActive] = useState(false);
  const [isBioActive, setIsBioActive] = useState(false);
  const [isContactsActive, setIsContactsActive] = useState(false);
  const [isInterestsActive, setIsInterestsActive] = useState(false);
  const [isEducationActive, setIsEducationActive] = useState(false);
  const [isBioFileActive, setIsBioFileActive] = useState(false);
  const [isInterestsFileActive, setIsInterestsFileActive] = useState(false);
  const [isEducationFileActive, setIsEducationFileActive] = useState(false);
  return (
    <Container>
      <Helmet title="About" />
      <div className={Style.About}>
        <p>_about-me</p>
        <AboutIconsSide
          isProfessionalInfoFileActive={isProfessionalInfoFileActive}
          setIsProfessionalInfoFileActive={setIsProfessionalInfoFileActive}
          isPersonalInfoActive={isPersonalInfoActive}
          setIsPersonalInfoActive={setIsPersonalInfoActive}
          isHobbiesFileActive={isHobbiesFileActive}
          setIsHobbiesFileActive={setIsHobbiesFileActive}
        />
        <AboutDropdowns
          isBioActive={isBioActive}
          setIsBioActive={setIsBioActive}
          isInterestsActive={isInterestsActive}
          setIsInterestsActive={setIsInterestsActive}
          isContactsActive={isContactsActive}
          setIsContactsActive={setIsContactsActive}
          isEducationActive={isEducationActive}
          setIsEducationActive={setIsEducationActive}
          isProfessionalInfoActive={isProfessionalInfoActive}
          setIsProfessionalInfoActive={setIsProfessionalInfoActive}
          isPersonalInfoActive={isPersonalInfoActive}
          setIsPersonalInfoActive={setIsPersonalInfoActive}
          isHobbiesActive={isHobbiesActive}
          setIsHobbiesActive={setIsHobbiesActive}
          isBioFileActive={isBioFileActive}
          setIsBioFileActive={setIsBioFileActive}
          isInterestsFileActive={isInterestsFileActive}
          setIsInterestsFileActive={setIsInterestsFileActive}
          isEducationFileActive={isEducationFileActive}
          setIsEducationFileActive={setIsEducationFileActive}
          isProfessionalInfoFileActive={isProfessionalInfoFileActive}
          setIsProfessionalInfoFileActive={setIsProfessionalInfoFileActive}
          isHobbiesFileActive={isHobbiesFileActive}
          setIsHobbiesFileActive={setIsHobbiesFileActive}
        />
        <AboutShow
          isProfessionalInfoActive={isProfessionalInfoActive}
          setIsProfessionalInfoActive={setIsProfessionalInfoActive}
          isHobbiesActive={isHobbiesActive}
          setIsHobbiesActive={setIsHobbiesActive}
          isBioFileActive={isBioFileActive}
          setIsBioFileActive={setIsBioFileActive}
          isInterestsFileActive={isInterestsFileActive}
          setIsInterestsFileActive={setIsInterestsFileActive}
          isEducationFileActive={isEducationFileActive}
          setIsEducationFileActive={setIsEducationFileActive}
          isProfessionalInfoFileActive={isProfessionalInfoFileActive}
          setIsProfessionalInfoFileActive={setIsProfessionalInfoFileActive}
          isHobbiesFileActive={isHobbiesFileActive}
          setIsHobbiesFileActive={setIsHobbiesFileActive}
        />
      </div>
    </Container>
  );
};

export default About;
