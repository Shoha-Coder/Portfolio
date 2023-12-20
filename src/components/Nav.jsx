import React, { useEffect, useState } from 'react'
import Style from "@/styles/Nav.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from 'react-icons/ri';
import Burger from './Burger';

const Nav = ({ isBurgerActive, setIsBurgerActive }) => {
  const router = useRouter()
  let IsHomeActive = false
  let IsAboutActive = false
  let IsProjectsActive = false
  let IsContactActive = false
  let burger
  let burgerClick
  if (isBurgerActive === false) {
    burger = <RxHamburgerMenu />
    burgerClick = () => setIsBurgerActive(true)
  } else {
    burger = <RiCloseLine />
    burgerClick = () => setIsBurgerActive(false)
  }
  if (router.pathname === "/") {
    IsHomeActive = true
  } else if (router.pathname === "/About") {
    IsAboutActive = true
  } else if (router.pathname === "/Projects") {
    IsProjectsActive = true
  } else if (router.pathname === "/Contact") {
    IsContactActive = true
  }
  const links = [
    {
      id: 1,
      name: "_hello",
      path: "/",
      clas: IsHomeActive ? Style.Active : ""
    },
    {
      id: 2,
      name: "_about_me",
      path: "/About",
      clas: IsAboutActive ? Style.Active : ""
    },
    {
      id: 3,
      name: "_projects",
      path: "/Projects",
      clas: IsProjectsActive ? Style.Active : ""
    },
    {
      id: 4,
      name: "_contact",
      path: "/Contact",
      clas: IsContactActive ? Style.Active : ""
    }
  ]
  return (
    <nav className={Style.nav}>
      <div className={Style._left}>
          <Link className={Style.My_NickName} href={"/"}>Shoha_Coder</Link>
        <div className={Style._left_side}>
          <div className={Style.links}>
            {
              links.slice(0, 3).map((link) => {
                return (
                  <Link href={link.path} key={link.id} className={link.clas}>{link.name}</Link>
                )
              })
            }
          </div>
        </div>
      </div>
      <Link className={`${Style.Contact} ${IsContactActive ? Style.Active : ""}`} href={"/contact"}>_contact</Link>
      <Burger click={burgerClick} children={burger} />
    </nav>
  )
}

export default Nav