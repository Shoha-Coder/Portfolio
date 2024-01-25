import React, { useEffect, useState } from 'react'
import Style from "@/styles/Card.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Card = ({
    ProjectImage = null,
    AltText = "",
    ProjectLink = "",
    categoryid = Number,
    name = "",
    description = "",
    CategoryImage = null,
    CategoryImageClass = "",
    ProjectNameClass = ""
}) => {
    const [bodyWidth, setBodyWidth] = useState(0)
    const [className, setClassName] = useState("")
    const [containerClassName, setContainerClass] = useState("")
    useEffect(() => {
        const handleResize = () => {
            setBodyWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (bodyWidth <= 26.563 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
            setClassName(Style.Mini)
        } else {
            setClassName(Style.Card)
        }
    }, [bodyWidth]);
    return (
        <div className={`${Style.CardContainer} ${className}`}>
            <p className={ProjectNameClass}><span>Project {categoryid} </span>{name}</p>
            <div className={`${Style.Card} ${className}`}>
                <Image src={ProjectImage} className={Style.ProjectImage} width={10} height={1} alt={AltText} />
                <Image src={CategoryImage} className={`${Style.CategoryImage} ${CategoryImageClass}`} />
                <p className={Style.Description}>{description}</p>
                <Link href={ProjectLink} className={Style.ProjectLink}>view-project</Link>
            </div>
        </div>
    )
}

export default Card