import React from "react";
import Style from "@/styles/Game.module.scss";
import FoodDisabled from "@/assets/images/Snake's Food (1).svg";
import FoodActive from "@/assets/images/Snake's Food.svg";
import Image from "next/image";
import { FoodLeft } from "@/assets/interface";

const FoodLeft: React.FC<FoodLeft> = ({
  foodLeft = 10,
}): React.ReactElement => {
  return (
    <div className={Style.Images}>
      {[...Array(10)].map((food: number, index: number): React.ReactElement => {
        return (
          <Image draggable={false}
            src={index < foodLeft ? FoodDisabled : FoodActive}
            alt="error"
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FoodLeft;
