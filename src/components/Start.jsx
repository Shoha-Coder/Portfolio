import React from 'react'
import Style from "@/styles/Start.module.scss"
import StyleGame from "@/styles/Game.module.scss"

const Button = ({onClick, children, className}) => {
  return (
    <button onClick={onClick} className={`${Style.Start} ${className}`}>{children}</button>
  )
}

export default Button