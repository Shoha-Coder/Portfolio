import React, { useEffect, useState } from 'react'
import Style from "@/styles/FilteredProjects.module.scss"
import axios from 'axios'
import { RiCloseFill } from 'react-icons/ri'
import ReactIcon from "@/images/React.png"
import Card from './Card'
import ReactNativeIcon from "@/images/reactnative.jpg"
import NextjsIcon from "@/images/nextjs.jpg"

const ReactContent = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get("https://back.shoha-coder.uz/projects")
            .then(response =>
                setProjects(response.data))
    }, [])
    return (
        <div className={Style.Content}>
            {
                projects.filter(project => project.category === "React").map(project => {
                    return (
                        <div key={project.id}>
                            <Card
                                ProjectImage={"/images" + project.ProjectImage}
                                CategoryImage={ReactIcon}
                                description={`${project.description.substring(0, 50)}...`}
                                AltText={project.AltText}
                                ProjectLink={project.link}
                                name={project.name}
                                categoryid={project.categoryid}
                                ProjectNameClass={Style.ProjectNameClass}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
const NextjsContent = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get("https://back.shoha-coder.uz/projects")
            .then(response =>
                setProjects(response.data))
    }, [])
    return (
        <div className={Style.Content}>
            {
                projects.filter(project => project.category === "Nextjs").map(project => {
                    return (
                        <div key={project.id}>
                            <Card
                                ProjectImage={"/images" + project.ProjectImage}
                                CategoryImage={NextjsIcon}
                                description={`${project.description.substring(0, 50)}...`}
                                AltText={project.AltText}
                                ProjectLink={project.link}
                                name={project.name}
                                categoryid={project.categoryid}
                                ProjectNameClass={Style.ProjectNameClass}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
const ReactNativeContent = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get("https://back.shoha-coder.uz/projects")
            .then(response =>
                setProjects(response.data))
    }, [])
    return (
        <div className={Style.Content}>
            {
                projects.filter(project => project.category === "ReactNative").map(project => {
                    return (
                        <div key={project.id}>
                            <Card
                                ProjectImage={"/images" + project.ProjectImage}
                                CategoryImage={ReactIcon}
                                description={`${project.description.substring(0, 50)}...`}
                                AltText={project.AltText}
                                ProjectLink={project.link}
                                name={project.name}
                                categoryid={project.categoryid}
                                ProjectNameClass={Style.ProjectNameClass}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
const AllContent = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get("https://back.shoha-coder.uz/projects")
            .then(response =>
                setProjects(response.data))
    }, [])
    return (
        <div className={Style.Content}>
            {
                projects.map(project => {
                    let CategoryImage = ReactIcon
                    let CategoryClass
                    if (project.category === "HtmlCss") {
                        CategoryClass = Style.HtmlCssCategoryIcon
                    } else if (project.category === "React") {
                        CategoryImage = ReactIcon
                    } else if (project.category === "Nextjs") {
                        CategoryImage = NextjsIcon
                    } else if (project.category === "ReactNative") {
                        CategoryImage = ReactNativeIcon
                    }
                    return (
                        <div key={project.id}>
                            <Card
                                ProjectImage=
                                {"/images" + project.ProjectImage}
                                CategoryImage={CategoryImage}
                                description={`${project.description.substring(0, 50)}...`}
                                AltText={project.AltText}
                                ProjectLink={project.link}
                                CategoryImageClass={CategoryClass}
                                name={project.name}
                                categoryid={project.categoryid}
                                ProjectNameClass={Style.ProjectNameClass}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

const FilteredProjects = ({
    reactChecked,
    nextChecked,
    reactNativeChecked,
    setReactChecked,
    setNextChecked,
    setReactNativeChecked
}) => {
    const handleReactClose = () => setReactChecked(false);
    const handleNextClose = () => setNextChecked(false);
    const handleReactNativeClose = () => setReactNativeChecked(false);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        if (reactChecked) setActiveTab('react');
        else if (nextChecked) setActiveTab('next');
        else if (reactNativeChecked) setActiveTab('reactnative');
        else setActiveTab('all')
    }, [
        reactChecked,
        nextChecked,
        reactNativeChecked,
    ]);
    const handleTabClick = (tab) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'react':
                return <ReactContent />;
            case 'next':
                return <NextjsContent />;
            case 'reactnative':
                return <ReactNativeContent />;
            case 'all':
                return <AllContent />;
            default:
                return <></>;
        }
    };
    const [bodyWidth, setBodyWidth] = useState(0);
    const [reactContent, setReactContent] = useState("");
    const [nextjsContent, setNextjsContent] = useState("");
    const [reactNativeContent, setReactNativeContent] = useState("");
    const [allContent, setAllContent] = useState("");
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
            setReactContent(`// projects / React`);
            setNextjsContent(`// projects / Next js`);
            setReactNativeContent("// projects / React Native");
            setAllContent(`// projects / All`);
        } else {
            setReactContent("React");
            setNextjsContent("Next js");
            setReactNativeContent("React Native");
            setAllContent("All");
        }
    }, [bodyWidth]);
    return (
        <div className={Style.CardsContainer}>
            <div className={Style.Tabs}>
                <div
                    onClick={() => handleTabClick('all')}
                    className={`${Style.Tab} ${Style.All} ${activeTab === 'all' ? Style.ActiveTab : ''}`}
                >
                    {allContent}
                </div>
                <div
                    onClick={() => handleTabClick('react')}
                    className={`${Style.Tab} ${Style.React} ${reactChecked ? Style.Active : ''} ${activeTab === 'react' ? Style.ActiveTab : ''}`}
                >
                    {reactContent}<RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleReactClose} />
                </div>
                <div
                    onClick={() => handleTabClick('next')}
                    className={`${Style.Tab} ${Style.Next} ${nextChecked ? Style.Active : ''} ${activeTab === 'next' ? Style.ActiveTab : ''}`}
                >
                    {nextjsContent}<RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleNextClose} />
                </div>
                <div
                    onClick={() => handleTabClick('reactnative')}
                    className={`${Style.Tab} ${Style.ReactNative} ${reactNativeChecked ? Style.Active : ''} ${activeTab === 'reactnative' ? Style.ActiveTab : ''}`}
                >
                    {reactNativeContent}<RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleReactNativeClose} />
                </div>
            </div>
            <div className={Style.Cards}>
                {renderTabContent()}
            </div>
        </div>
    )
}

export default FilteredProjects