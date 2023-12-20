import React from "react";
import Style from "@/styles/Game.module.scss"

const Snake = props => {
    return (
        <div>
            {props.snakeDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                };
                return <div className={Style.snake} key={i} style={style} />;
            })}
        </div>
    );
};
export default Snake;