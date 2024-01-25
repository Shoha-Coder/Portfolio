import React from 'react'
import Style from "@/styles/AboutIconsSide.module.scss"
import ProfessionalInfo from "@/images/professional-info-icon.png"
import PersonalInfo from "@/images/personal-info-icon.png"
import Hobbies from "@/images/hobbies-icon.png"
import Image from 'next/image'

const AboutIconsSide = ({
    isProfessionalInfoFileActive, setIsProfessionalInfoFileActive,
    isPersonalInfoActive, setIsPersonalInfoActive,
    isHobbiesFileActive, setIsHobbiesFileActive
}) => {
    let ProfessionalClick
    let PersonalClick
    let HobbiesClick
    if (isProfessionalInfoFileActive === true) {
        ProfessionalClick = () => setIsProfessionalInfoFileActive(false)
    } else {
        ProfessionalClick = () => setIsProfessionalInfoFileActive(true)
    }
    if (isPersonalInfoActive === true) {
        PersonalClick = () => setIsPersonalInfoActive(false)
    } else {
        PersonalClick = () => setIsPersonalInfoActive(true)
    }
    if (isHobbiesFileActive === true) {
        HobbiesClick = () => setIsHobbiesFileActive(false)
    } else {
        HobbiesClick = () => setIsHobbiesFileActive(true)
    }
    return (
        <div className={Style.AboutIconsSide}>
            <Image src={ProfessionalInfo} alt='ProfessionalInfoIcon' className={`${Style.Icon} ${isProfessionalInfoFileActive === true ? Style.Active : ""}`} onClick={ProfessionalClick} />
            <Image src={PersonalInfo} alt='PersonalInfoIcon' className={`${Style.Icon} ${Style.PersonalInfo} ${isPersonalInfoActive === true ? Style.Active : ""}`} onClick={PersonalClick} />
            <Image src={Hobbies} alt='HobbiesIcon' className={`${Style.Icon} ${isHobbiesFileActive === true ? Style.Active : ""}`} onClick={HobbiesClick} />
        </div>
    )
}

export default AboutIconsSide