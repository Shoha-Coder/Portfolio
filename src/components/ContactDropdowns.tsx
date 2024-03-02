import React, { ReactNode, useContext } from "react";
import Style from "@/styles/ContactDropdowns.module.scss";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiMailFill,
  RiPhoneFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import unActiveDropdownIcon from "@/assets/images/unactveDropdown.png";
import { ContactDropdowns } from "@/assets/interface";
import { Context } from "@/assets/Context/Context";

const ContactDropdowns: React.FC = (): React.ReactElement => {
  const {
    isContactActive,
    findMeActive,
    setIsContactActive,
    setIsContactFileActive,
    setFindMeActive,
  }: ContactDropdowns = useContext(Context);
  let UnActiveContact: string;
  let UnActiveFindMe: string;
  let ContactClick: Function;
  let FindMeClick: Function;
  if (isContactActive === true) {
    setIsContactFileActive(true);
    UnActiveContact = Style.Active;
    ContactClick = (): void => setIsContactActive(false);
  } else {
    UnActiveContact = "";
    ContactClick = (): void => setIsContactActive(true);
  }
  if (findMeActive === true) {
    FindMeClick = (): void => setFindMeActive(false);
    UnActiveFindMe = Style.Active;
  } else {
    FindMeClick = (): void => setFindMeActive(true);
    UnActiveFindMe = "";
  }
  return (
    <div className={Style.ContactDropdowns}>
      <div className={`${Style.Dropdown}`}>
        <h3
          onClick={(): void => ContactClick()}
          className={`${Style.Title} ${isContactActive ? Style.Active : ""}`}
        >
          <Image draggable={false}
            src={unActiveDropdownIcon}
            className={Style.DropdownIcon}
            alt="Dropdown"
          />{" "}
          contacts
        </h3>
        <div className={`${Style.Contacts} ${UnActiveContact}`}>
          <Link href={"mailto:shohacoder@gmail.com"} className={Style.Contact}>
            <RiMailFill fontSize={16.22} /> shohacoder@gmail.com
          </Link>
          <Link href={"tel:+998950220825"} className={Style.Contact}>
            <RiPhoneFill fontSize={16.22} /> +998950220825
          </Link>
        </div>
      </div>
      <div className={`${Style.Dropdown}`}>
        <h3
          onClick={(): void => FindMeClick()}
          className={`${Style.Title} ${findMeActive ? Style.Active : ""} ${
            isContactActive === true ? Style.Bt : ""
          }`}
        >
          <Image draggable={false}
            src={unActiveDropdownIcon}
            className={Style.DropdownIcon}
            alt="Dropdown"
          />{" "}
          find-me-also-in
        </h3>
        <div className={`${Style.Contacts} ${Style.FindMe} ${UnActiveFindMe}`}>
          <Link
            href={"https://www.instagram.com/shoha_coder/"}
            target="_blank"
            className={Style.Icon}
          >
            <RiInstagramLine fontSize={16.22} /> Instagram accaunt
          </Link>
          <Link
            href={"https://www.linkedin.com/in/shoha-coder/"}
            target="_blank"
            className={Style.Icon}
          >
            <RiLinkedinBoxFill fontSize={16.22} /> LinkedIn account
          </Link>
          <Link
            href={"https://twitter.com/Shoha_Coder/"}
            target="_blank"
            className={Style.Icon}
          >
            <RiTwitterXFill fontSize={16.22} /> Twitter account
          </Link>
          <Link
            href={"https://www.facebook.com/Shoha.Coder"}
            target="_blank"
            className={Style.Icon}
          >
            <RiFacebookBoxFill fontSize={16.22} /> Facebook account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDropdowns;
