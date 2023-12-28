import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Style from "@/styles/Container.module.scss";
import BurgerMenu from './BurgerMenu';
import BurgerMenuStyle from "@/styles/BurgerMenu.module.scss"
import { useRouter } from 'next/router';

const Container = ({ children }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const router = useRouter()
  return (
    <div className={Style.Container}>
      <Nav isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
      <div className={`${Style.Children} ${router.pathname === "/About" ? Style.About : ""}`}>
        <BurgerMenu className={isBurgerActive === true ? BurgerMenuStyle.BurgerMenuActive : ""} />
        {!isBurgerActive && children}
      </div>
      <Footer />
    </div>
  );
};


export default Container;