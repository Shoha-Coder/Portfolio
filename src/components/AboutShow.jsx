import React, { useEffect, useState } from 'react';
import Style from '@/styles/AboutShow.module.scss';
import { RiCloseFill } from 'react-icons/ri';
import Link from 'next/link';

const ProfessionalInfoTabContent = () => {
    return (
        <div className={Style.TabContent}>
            <ol>
                <li>/**</li>
                <li>* You can download my professional information <a href={"/Shoha-Coder CV.pdf"} download>here</a></li>
                <li>*/</li>
            </ol>
        </div>
    );
}

const HobbiesTabContent = () => (
    <div className={Style.TabContent}>
        <ol>
            <li>/**</li>
            <li>* Hey! I'm a digital enthusiast who loves crafting websites using</li>
            <li>*  React and Next.js, exploring the dynamic power of JavaScript.</li>
            <li>*  When not coding, I'm conquering virtual battlefields in</li>
            <li>*  Counter-Strike 2, mastering strategy and reflexes. Beyond screens, my </li>
            <li>*  curiosity extends to exploring galaxies, adding a cosmic touch</li>
            <li>*   to my tech-filled journey.</li>
            <li>*/</li>
        </ol>
    </div>
);

const BioTabContent = () => (
    <div className={Style.TabContent}>
        <ol>
            <li>/**</li>
            <li>*  I am Shoha_coder, a dedicated Front-end developer who recently </li>
            <li>*  completed an intensive 6-month Front-end development program</li>
            <li>*  at IT-Academy from April 2023 to September 2023. My educationals</li>
            <li>*  journey has been focused on mastering technologie such as Next.js,</li>
            <li>*  React, HTML, CSS, SCSS, JavaScript, Node.js, Git, and gaining a</li>
            <li>*  foundational understanding of Express.js.</li>
            <li>*  I take pride in achieving the A+ Front-end award at IT-Academy,</li>
            <li>*  showcasing my commitment to excellence in the field despite not having</li>
            <li>*  professional work experience yet. You can explore my coding endeavors</li>
            <li>*  and projects on <Link href={"https://github.com/shoha-coder"} target='_blank'>Github</Link>. As I embark on the</li>
            <li>*  exciting journey of applying my skills in real-world scenarios,</li>
            <li>*  I remain passionate about creating intuitive and seamless user</li>
            <li>*  experiences through innovative Front-end development.</li>
            <li>*  I am eager to contribute my skills and learnings to future projects,</li>
            <li>*  embracing opportunities to grow and excel in the dynamic realm of</li>
            <li>* Front-end development.</li>
            <li>*/</li>
        </ol>
    </div>
);

const InterestsTabContent = () => (
    <div className={Style.TabContent}>
        <ol>
            <li>/**</li>
            <li>*  I'm passionate about web development, turning intricate code into </li>
            <li>*  visually captivating websites. I admire BMW for its blend of</li>
            <li>*  engineering and style, finding inspiration in sleek designs</li>
            <li>*  and cutting-edge technology. In my leisure time, I dive into the</li>
            <li>*  strategic world of Counter-Strike 2 for the adrenaline rush of</li>
            <li>*  competitive gaming.</li>
            <li>*  My interests weave together web development,</li>
            <li>*  automotive elegance, and competitive gaming, </li>
            <li>*  creating a rich and diverse landscape that keeps me inspired</li>
            <li>*  in both virtual and real-world spheres.</li>
            <li>*/</li>
        </ol>
    </div>
);

const EducationTabContent = () => (
    <div className={Style.TabContent}>
        <ol>
            <li>/**</li>
            <li>*  I successfully completed the Front-End Development program at </li>
            <li>*  IT Academy from April 2023 to September 2023, achieving an A+ grade</li>
            <li>*  My expertise extends to building projects using cutting-edge</li>
            <li>*  technologies such as React JS, Next.js, React TypeScript</li>
            <li>*  R Next.js TypeScript, and React Native TypeScript.</li>
            <li>*  With a portfolio of over nine projects, I have demonstrated</li>
            <li>*  my proficiency in creating robust and scalable applications.</li>
            <li>*  I am enthusiastic about applying my skills to contribute</li>
            <li>*  to innovative and challenging projects.</li>
            <li>*/</li>
        </ol>
    </div>
);
const AboutShow = ({
    isProfessionalInfoActive,
    setIsProfessionalInfoActive,
    isHobbiesActive,
    setIsHobbiesActive,
    isBioFileActive,
    setIsBioFileActive,
    isInterestsFileActive,
    setIsInterestsFileActive,
    isEducationFileActive,
    setIsEducationFileActive,
    isProfessionalInfoFileActive,
    setIsProfessionalInfoFileActive,
    isHobbiesFileActive,
    setIsHobbiesFileActive
}) => {
    const [ProfessionalInfoTab, setProfessionalInfoTab] = useState(false);
    const [InterestsTab, setInterestsTab] = useState(false);
    const [BioTab, setBioTab] = useState(false);
    const [EduTab, setEduTab] = useState(false);
    const [HobbiesTab, setHobbiesTab] = useState(false);
    const handleProfessionalInfoClose = () => setIsProfessionalInfoFileActive(false);
    const handleHobbiesClose = () => setIsHobbiesFileActive(false);
    const handleBioFileClose = () => setIsBioFileActive(false);
    const handleInterestsFileClose = () => setIsInterestsFileActive(false);
    const handleEducationFileClose = () => setIsEducationFileActive(false);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        if (isProfessionalInfoFileActive) setActiveTab('professional');
        else if (isHobbiesFileActive) setActiveTab('hobbies');
        else if (isBioFileActive) setActiveTab('bio');
        else if (isInterestsFileActive) setActiveTab('interests');
        else if (isEducationFileActive) setActiveTab('education');
        else setActiveTab('null')
    }, [
        isProfessionalInfoFileActive,
        isHobbiesFileActive,
        isBioFileActive,
        isInterestsFileActive,
        isEducationFileActive,
    ]);

    const handleTabClick = (tab) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'professional':
                return <ProfessionalInfoTabContent />;
            case 'hobbies':
                return <HobbiesTabContent />;
            case 'bio':
                return <BioTabContent />;
            case 'interests':
                return <InterestsTabContent />;
            case 'education':
                return <EducationTabContent />;
            case 'null':
                return <></>;
            default:
                return <></>;
        }
    };
    const [bodyWidth, setBodyWidth] = useState(0);
    const [professionalContent, setProfessionalContent] = useState("");
    const [hobbiesContent, setHobbiesContent] = useState("");
    const [bioContent, setBioContent] = useState("");
    const [interestsContent, setInterestsContent] = useState("");
    const [eduContent, setEduContent] = useState("");
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
            setProfessionalContent("// professional-info");
            setHobbiesContent("// hobbies");
            setBioContent("// personal-info / bio");
            setInterestsContent("// personal-info / interests");
            setEduContent("// personal-info / education");
        } else {
            setProfessionalContent("professional-info");
            setHobbiesContent("hobbies");
            setBioContent("bio");
            setInterestsContent("interests");
            setEduContent("education");
        }
    }, [bodyWidth]);
    return (
        <div className={Style.AboutShow}>
            <div className={Style.Tabs}>
                <div
                    className={`${Style.Tab} ${Style.ProfessionalTab} ${isProfessionalInfoFileActive ? Style.Active : ''} ${activeTab === 'professional' ? Style.ActiveTab : ""}`}
                    onClick={()=>handleTabClick('professional')}
                >
                    {professionalContent}<RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleProfessionalInfoClose} />
                </div>
                <div
                    className={`${Style.Tab} ${Style.HobbiesTab} ${isHobbiesFileActive ? Style.Active : ''} ${activeTab === 'hobbies' ? Style.ActiveTab : ""}`}
                    onClick={() => handleTabClick('hobbies')}
                >
                    {hobbiesContent} <RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleHobbiesClose} />
                </div>
                <div
                    className={`${Style.Tab} ${Style.BioTab} ${isBioFileActive ? Style.Active : ''} ${activeTab === 'bio' ? Style.ActiveTab : ""}`}
                    onClick={() => handleTabClick('bio')}
                >
                    {bioContent} <RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleBioFileClose} />
                </div>
                <div
                    className={`${Style.Tab} ${Style.InterestsTab} ${isInterestsFileActive ? Style.Active : ''} ${activeTab === 'interests' ? Style.ActiveTab : ""}`}
                    onClick={() => handleTabClick('interests')}
                >
                    {interestsContent} <RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleInterestsFileClose} />
                </div>
                <div
                    className={`${Style.Tab} ${Style.EduTab} ${isEducationFileActive ? Style.Active : ''} ${activeTab === 'education' ? Style.ActiveTab : ""}`}
                    onClick={() => handleTabClick('education')}
                >
                    {eduContent} <RiCloseFill className={Style.CloseIcon} fontSize={18} onClick={handleEducationFileClose} />
                </div>
            </div>
            <div className={`${Style.tabInfo}`}>
                {renderTabContent()}
            </div>
        </div>
    );
};

export default AboutShow;