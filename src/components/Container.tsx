import React, { ReactNode, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Style from "@/styles/Container.module.scss";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuStyle from "@/styles/BurgerMenu.module.scss";
import { NextRouter, useRouter } from "next/router";

const Container: React.FC<Container> = ({
  children,
}): React.ReactElement => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);
  const router: NextRouter = useRouter();

  return (
    <div className={Style.Container}>
      <Nav
        isBurgerActive={isBurgerActive}
        setIsBurgerActive={setIsBurgerActive}
      />
      <div
        className={`${Style.Children} ${
          router.pathname === "/About"
            ? Style.About
            : router.pathname === "/Projects"
            ? Style.Projects
            : ""
        }`}
      >
        <BurgerMenu
          className={
            isBurgerActive === true ? BurgerMenuStyle.BurgerMenuActive : ""
          }
        />
        {!isBurgerActive && children}
      </div>
      <Footer />
    </div>
  );
};

export default Container;
