import React, { useEffect, useState } from 'react'
import Style from "@/styles/ProjectsFilterSide.module.scss"
import { FaReact } from "react-icons/fa";
import unActiveDropdownIcon from "@/images/unactveDropdown.png"
import Image from 'next/image';
import { SiNextdotjs, SiVite } from "react-icons/si";

const ProjectsFilterSide = ({
    reactChecked, setReactChecked,
    nextChecked, setNextChecked,
    viteChecked, setViteChecked
}) => {
    const [dropdown, setDropdown] = useState(false)
    let DropdownClick
    let ReactClick
    let ViteClick
    let NextClick
    if (dropdown === true) {
        DropdownClick = () => setDropdown(false)
    } else {
        DropdownClick = () => setDropdown(true)
    }
    if (reactChecked === true) {
        ReactClick = () => setReactChecked(false)
    } else {
        ReactClick = () => setReactChecked(true)
    }
    if (nextChecked === true) {
        NextClick = () => setNextChecked(false)
    } else {
        NextClick = () => setNextChecked(true)
    }
    if (viteChecked === true) {
        ViteClick = () => setViteChecked(false)
    } else {
        ViteClick = () => setViteChecked(true)
    }
    const [bodyWidth, setBodyWidth] = useState(0);
    const [React, setReact] = useState(false)
    const [Nextjs, setNextjs] = useState(false)
    const [Vite, setVite] = useState(false)
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
        if (bodyWidth <= 70.375 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
            setNextjs(true)
            setReact(true)
            setVite(true)
        } else {
            setNextjs(false)
            setReact(false)
            setVite(false)
        }
    }, [bodyWidth]);
    if (Nextjs === true) {
        NextClick = () => {
            setReactChecked(false)
            setViteChecked(false)
            if (nextChecked === true) {
                setNextChecked(false)
            } else {
                setNextChecked(true)
            }
        }
    } else {
        NextClick = () => {
            if (nextChecked === true) {
                setNextChecked(false)
            } else {
                setNextChecked(true)
            }
        }
    }
    if (React === true) {
        ReactClick = () => {
            setNextChecked(false)
            setViteChecked(false)
            if (reactChecked === true) {
                setReactChecked(false)
            } else {
                setReactChecked(true)
            }
        }
    } else {
        ReactClick = () => {
            if (reactChecked === true) {
                setReactChecked(false)
            } else {
                setReactChecked(true)
            }
        }
    }
    if (Vite === true) {
        ViteClick = () => {
            setNextChecked(false)
            setReactChecked(false)
            if (viteChecked === true) {
                setViteChecked(false)
            } else {
                setViteChecked(true)
            }
        }
    } else {
        ViteClick = () => {
            if (viteChecked === true) {
                setViteChecked(false)
            } else {
                setViteChecked(true)
            }
        }
    }
    return (
        <div className={Style.ProjectsFilterSide}>
            <div className={`${Style.Dropdown} ${dropdown === true ? Style.Active : ""}`}>
                <h3
                    onClick={DropdownClick}
                    className={`${Style.Title} 
                ${dropdown === true ? Style.Active : ""}`}>
                    <Image src={unActiveDropdownIcon} className={Style.DropdownIcon} alt='Dropdown' /> projects
                </h3>
                <div className={`${Style.DropdownItem} ${dropdown === true ? Style.Active : ""}`}>
                    <h3 onClick={ReactClick} className={reactChecked ? Style.Active : ""}><input type="checkbox" checked={reactChecked} /> <FaReact className={Style.Icon} /> React</h3>
                    <h3 onClick={NextClick} className={nextChecked ? Style.Active : ""}><input type="checkbox" checked={nextChecked} /> <SiNextdotjs className={Style.Icon} /> Next js</h3>
                    <h3 onClick={ViteClick} className={viteChecked ? Style.Active : ""}><input type="checkbox" checked={viteChecked} /> <SiVite className={Style.Icon} /> Vite</h3>
                </div>
            </div>
        </div>
    )
}

export default ProjectsFilterSide