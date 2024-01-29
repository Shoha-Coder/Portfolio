import React from "react";
import Style from "@/styles/Game.module.scss";

interface SnakeProps {
  dot: number[];
}

const SnakeSegment: React.FC<SnakeProps> = ({ dot }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };

  return <div className={Style.snake} style={style}></div>;
};

export default SnakeSegment;
