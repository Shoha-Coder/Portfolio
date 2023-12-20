import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Style from "@/styles/Container.module.scss";
import BurgerMenu from './BurgerMenu';
import BurgerMenuStyle from "@/styles/BurgerMenu.module.scss"

const Container = ({ children }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  return (
    <div className={Style.Container}>
      <Nav isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
      <div className={`${Style.Children}`}>
        <BurgerMenu className={isBurgerActive === true ? BurgerMenuStyle.BurgerMenuActive : ""} />
        {!isBurgerActive && children}
      </div>
      <Footer />
    </div>
  );
};


export default Container;