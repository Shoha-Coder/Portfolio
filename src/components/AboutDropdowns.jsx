import React, { useEffect, useState } from 'react'
import Style from "@/styles/AboutDropdowns.module.scss"
import unActiveDropdownIcon from "@/images/unactveDropdown.png"
import ActiveDropdownIcon from "@/images/actveDropdown.png"
import FolderToggleIcon from "@/images/FolderToggleIcon.png"
import { RiFolder3Fill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import { RiFolder5Fill } from "react-icons/ri";
import FileIcon from "@/images/FileIcon.svg"
import Image from 'next/image';
import Link from 'next/link'

const AboutDropdowns = ({
    isBioActive, setIsBioActive,
    isContactsActive, setIsContactsActive,
    isInterestsActive, setIsInterestsActive,
    isEducationActive, setIsEducationActive,
    isProfessionalInfoActive, setIsProfessionalInfoActive,
    isPersonalInfoActive, setIsPersonalInfoActive,
    isHobbiesActive, setIsHobbiesActive,
    isBioFileActive, setIsBioFileActive,
    isInterestsFileActive, setIsInterestsFileActive,
    isEducationFileActive, setIsEducationFileActive,
    isProfessionalInfoFileActive,
    setIsProfessionalInfoFileActive,
    isHobbiesFileActive,
    setIsHobbiesFileActive
}) => {
    let PersonalClick
    let BioFolderIcon
    let InterestsFolderIcon
    let EducationFolderIcon
    let BioClick
    let InterestsClick
    let EducationClick
    let ContactsClick
    let ProfessionalClick
    let HobbiesClick
    if (isPersonalInfoActive === true) {
        PersonalClick = () => {
            setIsPersonalInfoActive(false)
        }
    } else {
        PersonalClick = () => {
            setIsPersonalInfoActive(true)
        }
        setIsBioActive(false)
        setIsInterestsActive(false)
        setIsEducationActive(false)
    }
    if (isContactsActive === true) {
        ContactsClick = () => setIsContactsActive(false)
    } else {
        ContactsClick = () => setIsContactsActive(true)
    }
    if (isBioActive === true) {
        BioFolderIcon = <RiFolder5Fill fontSize={20} fill='#E99287' />
        BioClick = () => setIsBioActive(false)
    } else {
        BioFolderIcon = <RiFolder3Fill fontSize={20} fill='#E99287' />
        BioClick = () => setIsBioActive(true)
    }
    if (isInterestsActive === true) {
        InterestsFolderIcon = <RiFolder5Fill fontSize={20} fill='#43D9AD' />
        InterestsClick = () => setIsInterestsActive(false)
    } else {
        InterestsFolderIcon = <RiFolder3Fill fontSize={20} fill='#43D9AD' />
        InterestsClick = () => setIsInterestsActive(true)
    }
    if (isEducationActive === true) {
        EducationFolderIcon = <RiFolder5Fill fontSize={20} fill='#3A49A4' />
        EducationClick = () => setIsEducationActive(false)
    } else {
        EducationFolderIcon = <RiFolder3Fill fontSize={20} fill='#3A49A4' />
        EducationClick = () => setIsEducationActive(true)
    }
    if (isHobbiesActive === true) {
        HobbiesClick = () => setIsHobbiesActive(false)
    } else {
        HobbiesClick = () => setIsHobbiesActive(true)
    }
    if (isProfessionalInfoActive === true) {
        ProfessionalClick = () => setIsProfessionalInfoActive(false)
    } else {
        ProfessionalClick = () => setIsProfessionalInfoActive(true)
    }
    const [bodyWidth, setBodyWidth] = useState(0);
    useEffect(() => {
        if (isPersonalInfoActive === false) {
            setIsHobbiesActive(false)
            setIsInterestsActive(false)
            setIsEducationActive(false)
        }
    }, [])
    useEffect(() => {
        const handleResize = () => {
            setBodyWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    let HobbiesFileClick = () => {
        setIsHobbiesFileActive(true)
    }
    let ProfessionalFileClick = () => {
        setIsProfessionalInfoFileActive(true)
    }
    let EduFileClick = () => {
        setIsEducationFileActive(true)
    }
    let InterestsFileClick = () => {
        setIsInterestsFileActive(true)
    }
    let BioFileClick = () => {
        setIsBioFileActive(true)
    }
    const [hobbies, setHobbies] = useState(false)
    const [professional, setProfessional] = useState(false)
    const [edu, setEdu] = useState(false)
    const [interests, setInterests] = useState(false)
    const [bio, setBio] = useState(false)
    useEffect(() => {
        if (bodyWidth <= 70.375 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
            setProfessional(true)
            setHobbies(true)
            setBio(true)
            setEdu(true)
            setInterests(true)
        } else {
            setProfessional(false)
            setHobbies(false)
            setBio(false)
            setEdu(false)
            setInterests(false)
        }
    }, [bodyWidth, professional]);
    if (professional === true) {
        ProfessionalFileClick = () => {
            setIsProfessionalInfoFileActive(true)
            setIsBioFileActive(false)
            setIsEducationFileActive(false)
            setIsHobbiesFileActive(false)
            setIsInterestsFileActive(false)
        }
    } else {
        ProfessionalFileClick = () => {
            setIsProfessionalInfoFileActive(true)
        }
    }
    if (hobbies === true) {
        HobbiesFileClick = () => {
            setIsProfessionalInfoFileActive(false)
            setIsBioFileActive(false)
            setIsEducationFileActive(false)
            setIsHobbiesFileActive(true)
            setIsInterestsFileActive(false)
        }
    } else {
        HobbiesFileClick = () => {
            setIsHobbiesFileActive(true)
        }
    }
    if (edu === true) {
        EduFileClick = () => {
            setIsProfessionalInfoFileActive(false)
            setIsBioFileActive(false)
            setIsEducationFileActive(true)
            setIsHobbiesFileActive(false)
            setIsInterestsFileActive(false)
        }
    } else {
        EduFileClick = () => {
            setIsEducationFileActive(true)
        }
    }
    if (interests === true) {
        InterestsFileClick = () => {
            setIsProfessionalInfoFileActive(false)
            setIsBioFileActive(false)
            setIsEducationFileActive(false)
            setIsHobbiesFileActive(false)
            setIsInterestsFileActive(true)
        }
    } else {
        InterestsFileClick = () => {
            setIsInterestsFileActive(true)
        }
    }
    if (bio === true) {
        BioFileClick = () => {
            setIsProfessionalInfoFileActive(false)
            setIsBioFileActive(true)
            setIsEducationFileActive(false)
            setIsHobbiesFileActive(false)
            setIsInterestsFileActive(false)
        }
    } else {
        BioFileClick = () => {
            setIsBioFileActive(true)
        }
    }
    return (
        <div className={Style.AboutDropdowns}>
            <div className={Style.Dropdown}>
                <h3 onClick={PersonalClick}
                    className={`${Style.Title} 
                ${isPersonalInfoActive === true ? Style.Active : ""}`}>
                    <Image src={unActiveDropdownIcon} className={Style.DropdownIcon} alt='Dropdown' /> personal-info
                </h3>
                <div className={`${Style.Folders} ${isPersonalInfoActive === true ? Style.Active : ""}`}>
                    <h3 onClick={BioClick}
                        className={`${Style.BioToggle} ${isBioActive === true ? Style.Active : ""}`}>
                        <Image src={FolderToggleIcon} alt='' className={`${Style.FolderToggleIcon} ${isBioActive === true ? Style.Active : ""}`} />{BioFolderIcon} bio</h3>
                    <div className={`${Style.Folder} ${isBioActive === true ? Style.Active : ""}`} onClick={() => BioFileClick()}>
                        <Image src={FileIcon} alt='' className={Style.FileIcon} /> bio
                    </div>
                    <h3 onClick={InterestsClick}
                        className={`${Style.BioToggle} ${isInterestsActive === true ? Style.Active : ""}`}>
                        <Image src={FolderToggleIcon} alt=' ' className={`${Style.FolderToggleIcon} ${isInterestsActive === true ? Style.Active : ""}`} />{InterestsFolderIcon} interests</h3>
                    <div className={`${Style.Folder} ${isInterestsActive === true ? Style.Active : ""}`} onClick={() => InterestsFileClick()}>
                        <Image src={FileIcon} alt=' ' className={Style.FileIcon} /> interests
                    </div>
                    <h3 onClick={EducationClick}
                        className={`${Style.BioToggle} ${isEducationActive === true ? Style.Active : ""}`}>
                        <Image src={FolderToggleIcon} alt=' ' className={`${Style.FolderToggleIcon} ${isEducationActive === true ? Style.Active : ""}`} />{EducationFolderIcon} education</h3>
                    <div className={`${Style.Folder} ${isEducationActive === true ? Style.Active : ""}`} onClick={() => EduFileClick()}>
                        <Image src={FileIcon} alt=' ' className={Style.FileIcon} /> education
                    </div>
                </div>
            </div>
            <div className={`${Style.Dropdown} ${Style.UnActive}`}>
                <h3
                    onClick={ProfessionalClick}
                    className={`${Style.Title} 
                ${isProfessionalInfoActive === true ? Style.Active : ""}`}>
                    <Image src={unActiveDropdownIcon} className={Style.DropdownIcon} alt='Dropdown' /> professional-info
                </h3>
                <div className={`${Style.Folders} ${isProfessionalInfoActive === true ? Style.Active : ""}`}>
                    <div className={`${Style.Folder} ${isProfessionalInfoActive === true ? Style.Active : ""}`} onClick={() => ProfessionalFileClick()}>
                        <Image src={FileIcon} alt='' className={Style.FileIcon} /> professional-info
                    </div>
                </div>
            </div>
            <div className={`${Style.Dropdown} ${Style.UnActive}`}>
                <h3 onClick={HobbiesClick}
                    className={`${Style.Title} 
                ${isHobbiesActive === true ? Style.Active : ""}`}>
                    <Image src={unActiveDropdownIcon} className={Style.DropdownIcon} alt='Dropdown' /> hobbies
                </h3>
                <div className={`${Style.Folders} ${isHobbiesActive === true ? Style.Active : ""}`}>
                    <div className={`${Style.Folder} ${isHobbiesActive === true ? Style.Active : ""}`} onClick={() => HobbiesFileClick()}>
                        <Image src={FileIcon} alt='' className={Style.FileIcon} /> hobbies
                    </div>
                </div>
            </div>
            <div className={Style.Dropdown}>
                <h3 onClick={ContactsClick}
                    className={`${Style.Title} 
                ${isContactsActive === true ? Style.Active : ""}`}>
                    <Image src={unActiveDropdownIcon} className={Style.DropdownIcon} alt='Dropdown' /> contacts
                </h3>
                <div className={`${Style.Contacts} ${isContactsActive === true ? Style.Active : ""}`}>
                    <Link href={"mailto:shohacoder@gmail.com"} className={Style.Contact}><RiMailFill fontSize={16.22} /> shohacoder@gmail.com</Link>
                    <Link href={"tel:+998950220825"} className={Style.Contact}><RiPhoneFill fontSize={16.22} /> +998950220825</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutDropdowns