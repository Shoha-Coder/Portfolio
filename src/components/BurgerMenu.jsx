import Link from 'next/link'
import React from 'react'
import Style from "@/styles/BurgerMenu.module.scss"
import { useRouter } from 'next/router'

const BurgerMenu = ({className}) => {
    const router = useRouter()
    let IsHomeActive = false
    let IsAboutActive = false
    let IsProjectsActive = false
    let IsContactActive = false
    if (router.pathname === "/") {
        IsHomeActive = true
    } else if (router.pathname === "/about") {
        IsAboutActive = true
    } else if (router.pathname === "/projects") {
        IsProjectsActive = true
    } else if (router.pathname === "/contact") {
        IsContactActive = true
    }
    const links = [
        {
            id: 1,
            name: "_hello",
            path: "/",
            clas: IsHomeActive ? Style.Active : ""
        },
        {
            id: 2,
            name: "_about_me",
            path: "/about",
            clas: IsAboutActive ? Style.Active : ""
        },
        {
            id: 3,
            name: "_projects",
            path: "/projects",
            clas: IsProjectsActive ? Style.Active : ""
        },
        {
            id: 4,
            name: "_contact",
            path: "/contact",
            clas: IsContactActive ? Style.Active : ""
        }
    ]
    return (
        <div className={`${Style.BurgerMenu} ${className}`}>
            {
                links.map(link => {
                    return (
                        <Link href={link.path} key={link.id} className={link.clas}>{link.name}</Link>
                    )
                })
            }
        </div>
    )
}

export default BurgerMenu