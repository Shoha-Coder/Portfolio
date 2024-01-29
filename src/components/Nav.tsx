import React from "react";
import Style from "@/styles/Nav.module.scss";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import Burger from "./Burger";

const Nav: React.FC<Nav> = ({
  isBurgerActive,
  setIsBurgerActive,
}): React.ReactElement => {
  const router: NextRouter = useRouter();
  let IsHomeActive: boolean = false;
  let IsAboutActive: boolean = false;
  let IsProjectsActive: boolean = false;
  let IsContactActive: boolean = false;
  let burger: React.ReactElement;
  let burgerClick: Function;
  if (isBurgerActive === false) {
    burger = <RxHamburgerMenu />;
    burgerClick = () => setIsBurgerActive(true);
  } else {
    burger = <RiCloseLine />;
    burgerClick = () => setIsBurgerActive(false);
  }
  if (router.pathname === "/") {
    IsHomeActive = true;
  } else if (router.pathname === "/About") {
    IsAboutActive = true;
  } else if (router.pathname === "/Projects") {
    IsProjectsActive = true;
  } else if (router.pathname === "/Contact") {
    IsContactActive = true;
  }
  const links: NavLink[] = [
    {
      id: 1,
      name: "_hello",
      path: "/",
      clas: IsHomeActive ? Style.Active : "",
    },
    {
      id: 2,
      name: "_about-me",
      path: "/About",
      clas: IsAboutActive ? Style.Active : "",
    },
    {
      id: 3,
      name: "_projects",
      path: "/Projects",
      clas: IsProjectsActive ? Style.Active : "",
    },
    {
      id: 4,
      name: "_contact-me",
      path: "/Contact",
      clas: IsContactActive ? Style.Active : "",
    },
  ];
  return (
    <nav className={Style.nav}>
      <div className={Style._left}>
        <Link className={Style.My_NickName} href={"/"}>
          Shoha_Coder
        </Link>
        <div className={Style._left_side}>
          <div className={Style.links}>
            {links.slice(0, 3).map((link) => {
              return (
                <Link href={link.path} key={link.id} className={link.clas}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Link
        className={`${Style.Contact} ${IsContactActive ? Style.Active : ""}`}
        href={"/Contact"}
      >
        _contact-me
      </Link>
      <Burger
        click={(): void => burgerClick()}
        children={burger}
        className={Style.Burger}
      />
    </nav>
  );
};

export default Nav;
