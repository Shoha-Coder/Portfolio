import React, { useEffect, useState } from 'react'
import Style from "@/styles/ProjectsFilterSide.module.scss"
import { FaReact  } from "react-icons/fa";
import unActiveDropdownIcon from "@/images/unactveDropdown.png"
import Image from 'next/image';
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const ProjectsFilterSide = ({
    reactChecked, setReactChecked,
    nextChecked, setNextChecked,
    reactNativeChecked, setReactNativeChecked
}) => {
    const [dropdown, setDropdown] = useState(false)
    let DropdownClick
    let ReactClick
    let ReactNativeClick
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
    if (reactNativeChecked === true) {
        ReactNativeClick = () => setReactNativeChecked(false)
    } else {
        ReactNativeClick = () => setReactNativeChecked(true)
    }
    const [bodyWidth, setBodyWidth] = useState(0);
    const [React, setReact] = useState(false)
    const [Nextjs, setNextjs] = useState(false)
    const [ReactNative, setReactNative] = useState(false)
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
            setReactNative(true)
        } else {
            setNextjs(false)
            setReact(false)
            setReactNative(false)
        }
    }, [bodyWidth]);
    if (Nextjs === true) {
        NextClick = () => {
            setReactChecked(false)
            setReactNativeChecked(false)
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
            setReactNativeChecked(false)
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
    if (ReactNative === true) {
        ReactNativeClick = () => {
            setNextChecked(false)
            setReactChecked(false)
            if (reactNativeChecked === true) {
                setReactNativeChecked(false)
            } else {
                setReactNativeChecked(true)
            }
        }
    } else {
        ReactNativeClick = () => {
            if (reactNativeChecked === true) {
                setReactNativeChecked(false)
            } else {
                setReactNativeChecked(true)
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
                    <h3 onClick={ReactNativeClick} className={reactNativeChecked ? Style.Active : ""}><input type="checkbox" checked={reactNativeChecked} /> <TbBrandReactNative className={Style.Icon} /> React Native</h3>
                </div>
            </div>
        </div>
    )
}

export default ProjectsFilterSide