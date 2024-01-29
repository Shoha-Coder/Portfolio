import Link from "next/link";
import React from "react";
import Style from "@/styles/BurgerMenu.module.scss";
import { NextRouter, useRouter } from "next/router";


const BurgerMenu: React.FC<BurgerMenu> = ({
  className,
}): React.ReactElement => {
  const router: NextRouter = useRouter();
  let IsHomeActive: boolean = false;
  let IsAboutActive: boolean = false;
  let IsProjectsActive: boolean = false;
  let IsContactActive: boolean = false;
  if (router.pathname === "/") {
    IsHomeActive = true;
  } else if (router.pathname === "/About") {
    IsAboutActive = true;
  } else if (router.pathname === "/Projects") {
    IsProjectsActive = true;
  } else if (router.pathname === "/Contact") {
    IsContactActive = true;
  }
  const links: Link[] = [
    {
      id: 1,
      name: "_hello",
      path: "/",
      clas: IsHomeActive ? Style.Active : "",
    },
    {
      id: 2,
      name: "_about_me",
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
      name: "_contact",
      path: "/Contact",
      clas: IsContactActive ? Style.Active : "",
    },
  ];
  return (
    <div className={`${Style.BurgerMenu} ${className}`}>
      {links.map((link: Link): React.ReactElement => {
        return (
          <Link href={link.path} key={link.id} className={link.clas}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BurgerMenu;
