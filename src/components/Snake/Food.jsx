import React from "react";
import Style from "@/styles/Game.module.scss"
import SnakesFood from "@/images/Snake's Food.svg"
import Image from "next/image";

const Food = props => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    };
    return <Image src={SnakesFood} alt="Snake's Food" className={Style.food} style={style} />; 
};

export default Food;