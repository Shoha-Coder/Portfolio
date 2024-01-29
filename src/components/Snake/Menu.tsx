import React from "react";
import Style from "@/styles/Game.module.scss";
import Button from "./Start";
import img from "@/assets/images/Group 2.png";
import Image from "next/image";
import { Menu } from "@/assets/interface";

const Menu: React.FC<Menu> = ({ onRouteChange }) => {
  return (
    <div className={Style.game_area_}>
      <Image src={img} alt="img" />
      <Button className="" onClick={onRouteChange}>
        Start-game
      </Button>
    </div>
  );
};

export default Menu;
