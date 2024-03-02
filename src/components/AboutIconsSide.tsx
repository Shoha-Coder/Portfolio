import React, { useContext } from "react";
import Style from "@/styles/AboutIconsSide.module.scss";
import ProfessionalInfo from "@/assets/images/professional-info-icon.png";
import PersonalInfo from "@/assets/images/personal-info-icon.png";
import Hobbies from "@/assets/images/hobbies-icon.png";
import Image from "next/image";
import { Context } from "@/assets/Context/Context";
import { ContextInterface } from "@/assets/interface";

const AboutIconsSide: React.FC = (): React.ReactElement => {
  const {
    isProfessionalInfoFileActive,
    setIsProfessionalInfoFileActive,
    isPersonalInfoActive,
    setIsPersonalInfoActive,
    isHobbiesFileActive,
    setIsHobbiesFileActive,
  }: ContextInterface = useContext(Context);
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
      <Image draggable={false}
        src={ProfessionalInfo}
        alt="ProfessionalInfoIcon"
        className={`${Style.Icon} ${
          isProfessionalInfoFileActive === true ? Style.Active : ""
        }`}
        onClick={(): void => ProfessionalClick()}
      />
      <Image draggable={false}
        src={PersonalInfo}
        alt="PersonalInfoIcon"
        className={`${Style.Icon} ${Style.PersonalInfo} ${
          isPersonalInfoActive === true ? Style.Active : ""
        }`}
        onClick={(): void => PersonalClick()}
      />
      <Image draggable={false}
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
