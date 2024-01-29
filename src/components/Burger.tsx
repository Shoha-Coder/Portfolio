import React from "react";
import Style from "@/styles/Burger.module.scss";
import { Burger } from "@/assets/interface";


const Burger: React.FC<Burger> = ({ click, children, className }) => {
  return (
    <button onClick={click} className={`${Style.Burger} ${className}`}>
      {children}
    </button>
  );
};

export default Burger;
