import React, { useEffect, useState } from 'react'
import Style from "@/styles/FilteredProjects.module.scss"
import axios from 'axios'
import { RiCloseFill } from 'react-icons/ri'
import ReactIcon from "@/images/React.png"
import Card from './Card'
import ViteIcon from "@/images/Vite.svg"
import NextjsIcon from "@/images/nextjs.png"

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
const ViteContent = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get("https://back.shoha-coder.uz/projects")
            .then(response =>
                setProjects(response.data))
    }, [])
    return (
        <div className={Style.Content}>
            {
                projects.filter(project => project.category === "Vite").map(project => {
                    return (
                        <div key={project.id}>
                            <Card
                                ProjectImage={"/images" + project.ProjectImage}
                                CategoryImage={ViteIcon}
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
                    } else if (project.category === "Vite") {
                        CategoryImage = ViteIcon
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
    viteChecked,
    setReactChecked,
    setNextChecked,
    setViteChecked
}) => {
    const handleReactClose = () => setReactChecked(false);
    const handleNextClose = () => setNextChecked(false);
    const handleViteClose = () => setViteChecked(false);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        if (reactChecked) setActiveTab('react');
        else if (nextChecked) setActiveTab('next');
        else if (viteChecked) setActiveTab('vite');
        else setActiveTab('all')
    }, [
        reactChecked,
        nextChecked,
        viteChecked,
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
            case 'vite':
                return <ViteContent />;
            case 'all':
                return <AllContent />;
            default:
                return <></>;
        }
    };
    const [bodyWidth, setBodyWidth] = useState(0);
    const [reactContent, setReactContent] = useState("");
    const [nextjsContent, setNextjsContent] = useState("");
    const [viteContent, setViteContent] = useState("");
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
            setViteContent("// projects / Vite");
            setAllContent(`// projects / All`);
        } else {
            setReactContent("React");
            setNextjsContent("Next js");
            setViteContent("Vite");
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
                    onClick={() => handleTabClick('vite')}
                    className={`${Style.Tab} ${Style.Vite} ${viteChecked ? Style.Active : ''} ${activeTab === 'vite' ? Style.ActiveTab : ''}`}
                >
                    {viteContent}<RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleViteClose} />
                </div>
            </div>
            <div className={Style.Cards}>
                {renderTabContent()}
            </div>
        </div>
    )
}

export default FilteredProjects