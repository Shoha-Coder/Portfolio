import React from "react";
import Style from "@/styles/Game.module.scss";
import SnakesFood from "@/assets/images/Snake's Food.svg";
import Image from "next/image";
import { Food } from "@/assets/interface";

const Food: React.FC<Food> = ({ dot }): React.ReactElement => {
  const style: React.CSSProperties = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };

  return (
    <Image draggable={false}
      src={SnakesFood}
      alt="Snake's Food"
      className={Style.food}
      style={style}
    />
  );
};

export default Food;
