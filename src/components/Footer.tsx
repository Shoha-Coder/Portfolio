import React from "react";
import Style from "@/styles/Footer.module.scss";
import { RiFacebookFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

const Footer = (): React.ReactElement => {
  return (
    <footer className={Style.footer}>
      <div className={Style._left_side}>
        <h2>find me in:</h2>
        <a
          href="https://instagram.com/shoha_coder"
          target="_blank"
          rel="noreferrer"
          className={Style.Insta}
        >
          <RiInstagramFill className={Style.InstaIcon} />
        </a>
        <a
          href="https://facebook.com/shoha.coder"
          target="_blank"
          rel="noreferrer"
          className={Style.Fc}
        >
          <RiFacebookFill className={Style.FcIcon} />
        </a>
      </div>
      <div className={Style.GitHub}>
        <a
          href="https://github.com/shoha-coder"
          target="_blank"
          rel="noreferrer"
        >
          @Shoha_Coder
        </a>{" "}
        {"  "} <RiGithubFill className={Style.GitHubIcon} />
      </div>
    </footer>
  );
};

export default Footer;
