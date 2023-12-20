import React from 'react'
import Style from "@/styles/Game.module.scss"
import FoodDisabled from "@/images/Snake's Food (1).svg"
import FoodActive from "@/images/Snake's Food.svg"
import Image from 'next/image'

const FoodLeft = ({ foodLeft = 10 }) => {
    return (
        <div className={Style.Images}>
            {[...Array(10)].map((food, index) => {
                return (
                    <Image src={index < foodLeft ? FoodDisabled : FoodActive} alt="error" key={index} />
                );
            })}
        </div>
    )
}

export default FoodLeft;