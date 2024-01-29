import React from "react";
import Style from "@/styles/Start.module.scss";
import StyleGame from "@/styles/Game.module.scss";

const Button: React.FC<StartGame> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={(): void => onClick()}
      className={`${Style.Start} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
