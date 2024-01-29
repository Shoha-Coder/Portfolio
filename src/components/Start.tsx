import React from "react";
import Style from "@/styles/Start.module.scss";
import StyleGame from "@/styles/Game.module.scss";

interface Props {
  onClick: Function;
  children: string;
  className: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }) => {
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
