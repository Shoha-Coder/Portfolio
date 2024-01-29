import React, { ReactNode } from "react";
import Style from "@/styles/Burger.module.scss";

type BurgerProps = {
  click: () => void;
  children: ReactNode;
  className: string;
};

const Burger: React.FC<BurgerProps> = ({ click, children, className }) => {
  return (
    <button onClick={click} className={`${Style.Burger} ${className}`}>
      {children}
    </button>
  );
};

export default Burger;
