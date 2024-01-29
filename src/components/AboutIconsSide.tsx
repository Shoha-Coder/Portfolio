import React from "react";
import Style from "@/styles/AboutIconsSide.module.scss";
import ProfessionalInfo from "@/assets/images/professional-info-icon.png";
import PersonalInfo from "@/assets/images/personal-info-icon.png";
import Hobbies from "@/assets/images/hobbies-icon.png";
import Image from "next/image";
import { AboutIconsSide } from "@/assets/interface";

const AboutIconsSide: React.FC<AboutIconsSide> = ({
  isProfessionalInfoFileActive,
  isPersonalInfoActive,
  isHobbiesFileActive,
  setIsProfessionalInfoFileActive,
  setIsPersonalInfoActive,
  setIsHobbiesFileActive,
}): React.ReactElement => {
  let ProfessionalClick: Function;
  let PersonalClick: Function;
  let HobbiesClick: Function;
  if (isProfessionalInfoFileActive === true) {
    ProfessionalClick = (): void => setIsProfessionalInfoFileActive(false);
  } else {
    ProfessionalClick = (): void => setIsProfessionalInfoFileActive(true);
  }
  if (isPersonalInfoActive === true) {
    PersonalClick = (): void => setIsPersonalInfoActive(false);
  } else {
    PersonalClick = (): void => setIsPersonalInfoActive(true);
  }
  if (isHobbiesFileActive === true) {
    HobbiesClick = (): void => setIsHobbiesFileActive(false);
  } else {
    HobbiesClick = (): void => setIsHobbiesFileActive(true);
  }
  return (
    <div className={Style.AboutIconsSide}>
      <Image
        src={ProfessionalInfo}
        alt="ProfessionalInfoIcon"
        className={`${Style.Icon} ${
          isProfessionalInfoFileActive === true ? Style.Active : ""
        }`}
        onClick={(): void => ProfessionalClick()}
      />
      <Image
        src={PersonalInfo}
        alt="PersonalInfoIcon"
        className={`${Style.Icon} ${Style.PersonalInfo} ${
          isPersonalInfoActive === true ? Style.Active : ""
        }`}
        onClick={(): void => PersonalClick()}
      />
      <Image
        src={Hobbies}
        alt="HobbiesIcon"
        className={`${Style.Icon} ${
          isHobbiesFileActive === true ? Style.Active : ""
        }`}
        onClick={(): void => HobbiesClick()}
      />
    </div>
  );
};

export default AboutIconsSide;
