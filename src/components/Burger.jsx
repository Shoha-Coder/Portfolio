import React from 'react'
import Style from "@/styles/Burger.module.scss"

const Burger = ({click, children}) => {
  return (
    <button onClick={click} className={Style.Burger}>{children}</button>
  )
}

export default Burger