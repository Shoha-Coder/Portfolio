import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Style from "@/styles/AboutDropdowns.module.scss";
import unActiveDropdownIcon from "@/images/unactveDropdown.png";
import FolderToggleIcon from "@/images/FolderToggleIcon.png";
import { RiFolder3Fill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import { RiFolder5Fill } from "react-icons/ri";
import FileIcon from "@/images/FileIcon.svg";
import Image from "next/image";
import Link from "next/link";

interface AboutDropdownsProps {
  isBioActive: boolean;
  isContactsActive: boolean;
  isInterestsActive: boolean;
  isEducationActive: boolean;
  isProfessionalInfoActive: boolean;
  isPersonalInfoActive: boolean;
  isHobbiesActive: boolean;
  isBioFileActive: boolean;
  isInterestsFileActive: boolean;
  isEducationFileActive: boolean;
  isProfessionalInfoFileActive: boolean;
  isHobbiesFileActive: boolean;
  setIsBioActive: Dispatch<SetStateAction<boolean>>;
  setIsContactsActive: Dispatch<SetStateAction<boolean>>;
  setIsInterestsActive: Dispatch<SetStateAction<boolean>>;
  setIsEducationActive: Dispatch<SetStateAction<boolean>>;
  setIsProfessionalInfoActive: Dispatch<SetStateAction<boolean>>;
  setIsPersonalInfoActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesActive: Dispatch<SetStateAction<boolean>>;
  setIsBioFileActive: Dispatch<SetStateAction<boolean>>;
  setIsInterestsFileActive: Dispatch<SetStateAction<boolean>>;
  setIsEducationFileActive: Dispatch<SetStateAction<boolean>>;
  setIsProfessionalInfoFileActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesFileActive: Dispatch<SetStateAction<boolean>>;
}

const AboutDropdowns: React.FC<AboutDropdownsProps> = ({
  isBioActive,
  isContactsActive,
  isInterestsActive,
  isEducationActive,
  isProfessionalInfoActive,
  isPersonalInfoActive,
  isHobbiesActive,
  isBioFileActive,
  isInterestsFileActive,
  isEducationFileActive,
  isProfessionalInfoFileActive,
  isHobbiesFileActive,
  setIsBioActive,
  setIsContactsActive,
  setIsInterestsActive,
  setIsEducationActive,
  setIsProfessionalInfoActive,
  setIsPersonalInfoActive,
  setIsHobbiesActive,
  setIsBioFileActive,
  setIsInterestsFileActive,
  setIsEducationFileActive,
  setIsProfessionalInfoFileActive,
  setIsHobbiesFileActive,
}): React.ReactElement => {
  let PersonalClick: Function;
  let BioFolderIcon: ReactElement;
  let InterestsFolderIcon: ReactElement;
  let EducationFolderIcon: ReactElement;
  let BioClick: Function;
  let InterestsClick: Function;
  let EducationClick: Function;
  let ContactsClick: Function;
  let ProfessionalClick: Function;
  let HobbiesClick: Function;
  if (isPersonalInfoActive === true) {
    PersonalClick = (): void => {
      setIsPersonalInfoActive(false);
    };
  } else {
    PersonalClick = (): void => {
      setIsPersonalInfoActive(true);
    };
    setIsBioActive(false);
    setIsInterestsActive(false);
    setIsEducationActive(false);
  }
  if (isContactsActive === true) {
    ContactsClick = (): void => setIsContactsActive(false);
  } else {
    ContactsClick = (): void => setIsContactsActive(true);
  }
  if (isBioActive === true) {
    BioFolderIcon = <RiFolder5Fill fontSize={20} fill="#E99287" />;
    BioClick = (): void => setIsBioActive(false);
  } else {
    BioFolderIcon = <RiFolder3Fill fontSize={20} fill="#E99287" />;
    BioClick = (): void => setIsBioActive(true);
  }
  if (isInterestsActive === true) {
    InterestsFolderIcon = <RiFolder5Fill fontSize={20} fill="#43D9AD" />;
    InterestsClick = (): void => setIsInterestsActive(false);
  } else {
    InterestsFolderIcon = <RiFolder3Fill fontSize={20} fill="#43D9AD" />;
    InterestsClick = (): void => setIsInterestsActive(true);
  }
  if (isEducationActive === true) {
    EducationFolderIcon = <RiFolder5Fill fontSize={20} fill="#3A49A4" />;
    EducationClick = (): void => setIsEducationActive(false);
  } else {
    EducationFolderIcon = <RiFolder3Fill fontSize={20} fill="#3A49A4" />;
    EducationClick = (): void => setIsEducationActive(true);
  }
  if (isHobbiesActive === true) {
    HobbiesClick = (): void => setIsHobbiesActive(false);
  } else {
    HobbiesClick = (): void => setIsHobbiesActive(true);
  }
  if (isProfessionalInfoActive === true) {
    ProfessionalClick = (): void => setIsProfessionalInfoActive(false);
  } else {
    ProfessionalClick = (): void => setIsProfessionalInfoActive(true);
  }
  const [bodyWidth, setBodyWidth] = useState<number>(0);
  useEffect((): void => {
    if (isPersonalInfoActive === false) {
      setIsHobbiesActive(false);
      setIsInterestsActive(false);
      setIsEducationActive(false);
    }
  }, []);
  useEffect(() => {
    const handleResize = (): void => {
      setBodyWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let HobbiesFileClick = (): void => {
    setIsHobbiesFileActive(true);
  };
  let ProfessionalFileClick = (): void => {
    setIsProfessionalInfoFileActive(true);
  };
  let EduFileClick = (): void => {
    setIsEducationFileActive(true);
  };
  let InterestsFileClick = (): void => {
    setIsInterestsFileActive(true);
  };
  let BioFileClick = (): void => {
    setIsBioFileActive(true);
  };
  const [hobbies, setHobbies] = useState<boolean>(false);
  const [professional, setProfessional] = useState<boolean>(false);
  const [edu, setEdu] = useState<boolean>(false);
  const [interests, setInterests] = useState<boolean>(false);
  const [bio, setBio] = useState<boolean>(false);
  useEffect((): void => {
    if (
      bodyWidth <=
      70.375 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    ) {
      setProfessional(true);
      setHobbies(true);
      setBio(true);
      setEdu(true);
      setInterests(true);
    } else {
      setProfessional(false);
      setHobbies(false);
      setBio(false);
      setEdu(false);
      setInterests(false);
    }
  }, [bodyWidth, professional]);
  if (professional === true) {
    ProfessionalFileClick = () => {
      setIsProfessionalInfoFileActive(true);
      setIsBioFileActive(false);
      setIsEducationFileActive(false);
      setIsHobbiesFileActive(false);
      setIsInterestsFileActive(false);
    };
  } else {
    ProfessionalFileClick = (): void => {
      setIsProfessionalInfoFileActive(true);
    };
  }
  if (hobbies === true) {
    HobbiesFileClick = (): void => {
      setIsProfessionalInfoFileActive(false);
      setIsBioFileActive(false);
      setIsEducationFileActive(false);
      setIsHobbiesFileActive(true);
      setIsInterestsFileActive(false);
    };
  } else {
    HobbiesFileClick = (): void => {
      setIsHobbiesFileActive(true);
    };
  }
  if (edu === true) {
    EduFileClick = (): void => {
      setIsProfessionalInfoFileActive(false);
      setIsBioFileActive(false);
      setIsEducationFileActive(true);
      setIsHobbiesFileActive(false);
      setIsInterestsFileActive(false);
    };
  } else {
    EduFileClick = (): void => {
      setIsEducationFileActive(true);
    };
  }
  if (interests === true) {
    InterestsFileClick = (): void => {
      setIsProfessionalInfoFileActive(false);
      setIsBioFileActive(false);
      setIsEducationFileActive(false);
      setIsHobbiesFileActive(false);
      setIsInterestsFileActive(true);
    };
  } else {
    InterestsFileClick = (): void => {
      setIsInterestsFileActive(true);
    };
  }
  if (bio === true) {
    BioFileClick = (): void => {
      setIsProfessionalInfoFileActive(false);
      setIsBioFileActive(true);
      setIsEducationFileActive(false);
      setIsHobbiesFileActive(false);
      setIsInterestsFileActive(false);
    };
  } else {
    BioFileClick = (): void => {
      setIsBioFileActive(true);
    };
  }
  return (
    <div className={Style.AboutDropdowns}>
      <div className={Style.Dropdown}>
        <h3
          onClick={(): void => PersonalClick()}
          className={`${Style.Title} 
                ${isPersonalInfoActive === true ? Style.Active : ""}`}
        >
          <Image
            src={unActiveDropdownIcon}
            className={Style.DropdownIcon}
            alt="Dropdown"
          />{" "}
          personal-info
        </h3>
        <div
          className={`${Style.Folders} ${
            isPersonalInfoActive === true ? Style.Active : ""
          }`}
        >
          <h3
            onClick={(): void => BioClick()}
            className={`${Style.BioToggle} ${
              isBioActive === true ? Style.Active : ""
            }`}
          >
            <Image
              src={FolderToggleIcon}
              alt=""
              className={`${Style.FolderToggleIcon} ${
                isBioActive === true ? Style.Active : ""
              }`}
            />
            {BioFolderIcon} bio
          </h3>
          <div
            className={`${Style.Folder} ${
              isBioActive === true ? Style.Active : ""
            }`}
            onClick={(): void => BioFileClick()}
          >
            <Image src={FileIcon} alt="" className={Style.FileIcon} /> bio
          </div>
          <h3
            onClick={(): void => InterestsClick()}
            className={`${Style.BioToggle} ${
              isInterestsActive === true ? Style.Active : ""
            }`}
          >
            <Image
              src={FolderToggleIcon}
              alt=" "
              className={`${Style.FolderToggleIcon} ${
                isInterestsActive === true ? Style.Active : ""
              }`}
            />
            {InterestsFolderIcon} interests
          </h3>
          <div
            className={`${Style.Folder} ${
              isInterestsActive === true ? Style.Active : ""
            }`}
            onClick={(): void => InterestsFileClick()}
          >
            <Image src={FileIcon} alt=" " className={Style.FileIcon} />{" "}
            interests
          </div>
          <h3
            onClick={(): void => EducationClick()}
            className={`${Style.BioToggle} ${
              isEducationActive === true ? Style.Active : ""
            }`}
          >
            <Image
              src={FolderToggleIcon}
              alt=" "
              className={`${Style.FolderToggleIcon} ${
                isEducationActive === true ? Style.Active : ""
              }`}
            />
            {EducationFolderIcon} education
          </h3>
          <div
            className={`${Style.Folder} ${
              isEducationActive === true ? Style.Active : ""
            }`}
            onClick={(): void => EduFileClick()}
          >
            <Image src={FileIcon} alt=" " className={Style.FileIcon} />{" "}
            education
          </div>
        </div>
      </div>
      <div className={`${Style.Dropdown} ${Style.UnActive}`}>
        <h3
          onClick={(): void => ProfessionalClick()}
          className={`${Style.Title} 
                ${isProfessionalInfoActive === true ? Style.Active : ""}`}
        >
          <Image
            src={unActiveDropdownIcon}
            className={Style.DropdownIcon}
            alt="Dropdown"
          />{" "}
          professional-info
        </h3>
        <div
          className={`${Style.Folders} ${
            isProfessionalInfoActive === true ? Style.Active : ""
          }`}
        >
          <div
            className={`${Style.Folder} ${
              isProfessionalInfoActive === true ? Style.Active : ""
            }`}
            onClick={(): void => ProfessionalFileClick()}
          >
            <Image src={FileIcon} alt="" className={Style.FileIcon} />{" "}
            professional-info
          </div>
        </div>
      </div>
      <div className={`${Style.Dropdown} ${Style.UnActive}`}>
        <h3
          onClick={(): void => HobbiesClick()}
          className={`${Style.Title} 
                ${isHobbiesActive === true ? Style.Active : ""}`}
        >
          <Image
            src={unActiveDropdownIcon}
            className={Style.DropdownIcon}
            alt="Dropdown"
          />{" "}
          hobbies
        </h3>
        <div
          className={`${Style.Folders} ${
            isHobbiesActive === true ? Style.Active : ""
          }`}
        >
          <div
            className={`${Style.Folder} ${
              isHobbiesActive === true ? Style.Active : ""
            }`}
            onClick={(): void => HobbiesFileClick()}
          >
            <Image src={FileIcon} alt="" className={Style.FileIcon} /> hobbies
          </div>
        </div>
      </div>
      <div className={Style.Dropdown}>
        <h3
          onClick={(): void => ContactsClick()}
          className={`${Style.Title} 
                ${isContactsActive === true ? Style.Active : ""}`}
        >
          <Image
            src={unActiveDropdownIcon}
            className={Style.DropdownIcon}
            alt="Dropdown"
          />{" "}
          contacts
        </h3>
        <div
          className={`${Style.Contacts} ${
            isContactsActive === true ? Style.Active : ""
          }`}
        >
          <Link href={"mailto:shohacoder@gmail.com"} className={Style.Contact}>
            <RiMailFill fontSize={16.22} /> shohacoder@gmail.com
          </Link>
          <Link href={"tel:+998950220825"} className={Style.Contact}>
            <RiPhoneFill fontSize={16.22} /> +998950220825
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutDropdowns;
