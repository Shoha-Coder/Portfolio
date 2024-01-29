import React from "react";
import Style from "@/styles/Game.module.scss";
import { Snake } from "@/assets/interface";

const SnakeSegment: React.FC<Snake> = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };

  return <div className={Style.snake} style={style}></div>;
};

export default SnakeSegment;
