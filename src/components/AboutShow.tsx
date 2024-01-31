import React, { useContext, useEffect, useState } from "react";
import Style from "@/styles/AboutShow.module.scss";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import { Context } from "@/assets/Context/Context";
import { ContextInterface } from "@/assets/interface";

const ProfessionalInfoTabContent: React.FC = (): React.ReactElement => {
  return (
    <div className={Style.TabContent}>
      <ol>
        <li>/**</li>
        <li>
          * You can download my professional information{" "}
          <a href={"/Shoha-Coder CV.pdf"} download>
            here
          </a>
        </li>
        <li>*/</li>
      </ol>
    </div>
  );
};

const HobbiesTabContent: React.FC = (): React.ReactElement => (
  <div className={Style.TabContent}>
    <ol>
      <li>/**</li>
      <li>* Hey! I'm a digital enthusiast who loves crafting websites using</li>
      <li>* React and Next.js, exploring the dynamic power of JavaScript.</li>
      <li>* When not coding, I'm conquering virtual battlefields in</li>
      <li>
        * Counter-Strike 2, mastering strategy and reflexes. Beyond screens, my{" "}
      </li>
      <li>* curiosity extends to exploring galaxies, adding a cosmic touch</li>
      <li>* to my tech-filled journey.</li>
      <li>*/</li>
    </ol>
  </div>
);

const BioTabContent: React.FC = (): React.ReactElement => (
  <div className={Style.TabContent}>
    <ol>
      <li>/**</li>
      <li>* I am Shoha_coder, a dedicated Front-end developer who recently </li>
      <li>* completed an intensive 6-month Front-end development program</li>
      <li>
        * at IT-Academy from April 2023 to September 2023. My educationals
      </li>
      <li>
        * journey has been focused on mastering technologie such as Next.js,
      </li>
      <li>* React, HTML, CSS, SCSS, JavaScript, TypeScript, Git, </li>
      <li>* I take pride in achieving the A+ Front-end award at IT-Academy,</li>
      <li>
        * showcasing my commitment to excellence in the field despite not having
      </li>
      <li>
        * professional work experience yet. You can explore my coding endeavors
      </li>
      <li>
        * and projects on{" "}
        <Link href={"https://github.com/shoha-coder"} target="_blank">
          Github
        </Link>
        . As I embark on the
      </li>
      <li>* exciting journey of applying my skills in real-world scenarios,</li>
      <li>* I remain passionate about creating intuitive and seamless user</li>
      <li>* experiences through innovative Front-end development.</li>
      <li>
        * I am eager to contribute my skills and learnings to future projects,
      </li>
      <li>
        * embracing opportunities to grow and excel in the dynamic realm of
      </li>
      <li>* Front-end development.</li>
      <li>*/</li>
    </ol>
  </div>
);

const InterestsTabContent: React.FC = (): React.ReactElement => (
  <div className={Style.TabContent}>
    <ol>
      <li>/**</li>
      <li>
        * I'm passionate about web development, turning intricate code into{" "}
      </li>
      <li>* visually captivating websites. I admire BMW for its blend of</li>
      <li>* engineering and style, finding inspiration in sleek designs</li>
      <li>
        * and cutting-edge technology. In my leisure time, I dive into the
      </li>
      <li>* strategic world of Counter-Strike 2 for the adrenaline rush of</li>
      <li>* competitive gaming.</li>
      <li>* My interests weave together web development,</li>
      <li>* automotive elegance, and competitive gaming, </li>
      <li>* creating a rich and diverse landscape that keeps me inspired</li>
      <li>* in both virtual and real-world spheres.</li>
      <li>*/</li>
    </ol>
  </div>
);

const EducationTabContent: React.FC = (): React.ReactElement => (
  <div className={Style.TabContent}>
    <ol>
      <li>/**</li>
      <li>* I successfully completed the Front-End Development program at </li>
      <li>
        * IT Academy from April 2023 to September 2023, achieving an A+ grade
      </li>
      <li>* My expertise extends to building projects using cutting-edge</li>
      <li>* technologies such as React JS, Next.js, TypeScript,</li>
      <li>* With a portfolio of over nine projects, I have demonstrated</li>
      <li>* my proficiency in creating robust and scalable applications.</li>
      <li>* I am enthusiastic about applying my skills to contribute</li>
      <li>* to innovative and challenging projects.</li>
      <li>*/</li>
    </ol>
  </div>
);
const ProfessionalInfoTabContentMin: React.FC = (): React.ReactElement => {
  return (
    <div className={`${Style.TabContent} ${Style.MinTab}`}>
      <ol>
        <li>/**</li>
        <li>* You can download my</li>
        <li>
          * professional information{" "}
          <a href={"/Shoha-Coder CV.pdf"} download>
            here
          </a>
        </li>
        <li>*/</li>
      </ol>
    </div>
  );
};

const HobbiesTabContentMin: React.FC = (): React.ReactElement => (
  <div className={`${Style.TabContent} ${Style.MinTab}`}>
    <ol>
      <li>/**</li>
      <li>* Hey! I'm a digital enthusiast</li>
      <li>* who loves crafting websites</li>
      <li>* using React and Next.js,</li>
      <li>* exploring the dynamic power </li>
      <li>* of TypeScript. When not</li>
      <li>* coding, I'm conquering</li>
      <li>* virtual battlefields in</li>
      <li>* Counter-Strike 2, mastering</li>
      <li>* strategy and reflexes. Beyond</li>
      <li>* screens, my curiosity extends</li>
      <li>* to exploring galaxies, adding</li>
      <li>* a cosmic touch to my</li>
      <li>* tech-filled journey.</li>
      <li>*/</li>
    </ol>
  </div>
);

const BioTabContentMin: React.FC = (): React.ReactElement => (
  <div className={`${Style.TabContent} ${Style.MinTab}`}>
    <ol>
      <li>/**</li>
      <li>* I am Shoha_coder, a dedicated</li>
      <li>* Front-end developer who</li>
      <li>* recently completed</li>
      <li>* an intensive 6-month</li>
      <li>* Front-end development program</li>
      <li>* at IT-Academy from April 2023</li>
      <li>* to September 2023.</li>
      <li>* My educationals journey has</li>
      <li>* been focused on mastering</li>
      <li>* technologie such as Next.js,</li>
      <li>* React, HTML, CSS, SCSS,</li>
      <li>* JavaScript, Git, and</li>
      <li>* TypeScript,</li>
      <li>* I take pride in achieving</li>
      <li>* the A+ Front-end award at</li>
      <li>* IT-Academy, showcasing my</li>
      <li>* commitment to excellence in</li>
      <li>* the field despite not having</li>
      <li>* professional work experience</li>
      <li>* yet. You can explore my</li>
      <li>* coding endeavors and projects</li>
      <li>
        * on{" "}
        <Link href={"https://github.com/shoha-coder"} target="_blank">
          Github
        </Link>
        . As I embark on the
      </li>
      <li>* exciting journey of applying</li>
      <li>* my skills in real-world</li>
      <li>* scenarios, I remain</li>
      <li>* passionate about creating</li>
      <li>* intuitive and seamless user</li>
      <li>* experiences through</li>
      <li>* innovative Front-end</li>
      <li>* development. I am eager to</li>
      <li>* contribute my skills and</li>
      <li>* learnings to future projects,</li>
      <li>* embracing opportunities to</li>
      <li>* grow and excel in the dynamic</li>
      <li>* realm of Front-end</li>
      <li>* development.</li>
      <li>*/</li>
    </ol>
  </div>
);

const InterestsTabContentMin: React.FC = (): React.ReactElement => (
  <div className={`${Style.TabContent} ${Style.MinTab}`}>
    <ol>
      <li>/**</li>
      <li>* I'm passionate about</li>
      <li>* web development, turning</li>
      <li>* intricate code into visually</li>
      <li>* captivating websites. I admire</li>
      <li>* BMW for its blend of engineering</li>
      <li>* and style, finding inspiration</li>
      <li>* in sleek designs and cutting-edge </li>
      <li>* technology. In my leisure time,</li>
      <li>* I dive into the strategic world</li>
      <li>* of Counter-Strike 2 for the</li>
      <li>* adrenaline rush of competitive</li>
      <li>* gaming. My interests weave</li>
      <li>* together web development,</li>
      <li>* automotive elegance, and</li>
      <li>* competitive gaming, creating</li>
      <li>* a rich and diverse landscape</li>
      <li>* that keeps me inspired in both</li>
      <li>* virtual and real-world spheres.</li>
      <li>*/</li>
    </ol>
  </div>
);

const EducationTabContentMin: React.FC = (): React.ReactElement => (
  <div className={`${Style.TabContent} ${Style.MinTab}`}>
    <ol>
      <li>/**</li>
      <li>* I successfully completed the</li>
      <li>* Front-End Development program at </li>
      <li>* IT Academy from April 2023 to</li>
      <li>* September 2023, achieving an A+</li>
      <li>* grade. My expertise extends to</li>
      <li>* building projects using</li>
      <li>* cutting-edge technologies such as</li>
      <li>* React JS, Next.js. With a</li>
      <li>* portfolio of over nine projects,</li>
      <li>* I have demonstrated my</li>
      <li>* proficiency in creating robust</li>
      <li>* and scalable applications.</li>
      <li>* I am enthusiastic about applying</li>
      <li>* my skills to contribute to</li>
      <li>* innovative and challenging</li>
      <li>* projects</li>
      <li>*/</li>
    </ol>
  </div>
);

const AboutShow: React.FC = (): React.ReactElement => {
  const {
    isBioFileActive,
    isInterestsFileActive,
    isEducationFileActive,
    isProfessionalInfoFileActive,
    isHobbiesFileActive,
    setIsBioFileActive,
    setIsInterestsFileActive,
    setIsEducationFileActive,
    setIsProfessionalInfoFileActive,
    setIsHobbiesFileActive,
  }: ContextInterface = useContext(Context);
  const handleProfessionalInfoClose = (): void =>
    setIsProfessionalInfoFileActive(false);
  const handleHobbiesClose = (): void => setIsHobbiesFileActive(false);
  const handleBioFileClose = (): void => setIsBioFileActive(false);
  const handleInterestsFileClose = (): void => setIsInterestsFileActive(false);
  const handleEducationFileClose = (): void => setIsEducationFileActive(false);
  const [activeTab, setActiveTab]: [string, Function] = useState("null");

  useEffect(() => {
    if (isProfessionalInfoFileActive) setActiveTab("professional");
    else if (isHobbiesFileActive) setActiveTab("hobbies");
    else if (isBioFileActive) setActiveTab("bio");
    else if (isInterestsFileActive) setActiveTab("interests");
    else if (isEducationFileActive) setActiveTab("education");
    else setActiveTab("null");
  }, [
    isProfessionalInfoFileActive,
    isHobbiesFileActive,
    isBioFileActive,
    isInterestsFileActive,
    isEducationFileActive,
  ]);

  const handleTabClick = (tab: string): void => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  const renderTabContent = (): React.ReactElement => {
    switch (activeTab) {
      case "professional":
        return <ProfessionalInfoTabContent />;
      case "hobbies":
        return <HobbiesTabContent />;
      case "bio":
        return <BioTabContent />;
      case "interests":
        return <InterestsTabContent />;
      case "education":
        return <EducationTabContent />;
      case "null":
        return <></>;
      default:
        return <></>;
    }
  };
  const renderTabContentMin = (): React.ReactElement => {
    switch (activeTab) {
      case "professional":
        return <ProfessionalInfoTabContentMin />;
      case "hobbies":
        return <HobbiesTabContentMin />;
      case "bio":
        return <BioTabContentMin />;
      case "interests":
        return <InterestsTabContentMin />;
      case "education":
        return <EducationTabContentMin />;
      case "null":
        return <></>;
      default:
        return <></>;
    }
  };
  const [bodyWidth, setBodyWidth] = useState<number>(0);
  const [professionalContent, setProfessionalContent] = useState<string>("");
  const [hobbiesContent, setHobbiesContent] = useState<string>("");
  const [bioContent, setBioContent] = useState<string>("");
  const [interestsContent, setInterestsContent] = useState<string>("");
  const [eduContent, setEduContent] = useState<string>("");
  const [renderMaxContent, setRenderMaxContent] = useState<boolean>(false);
  const [renderMinContent, setRenderMinContent] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = (): void => {
      setBodyWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (
      bodyWidth <=
      70.375 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    ) {
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
    if (
      bodyWidth >=
      26.563 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    ) {
      setRenderMaxContent(true);
      setRenderMinContent(false);
    } else {
      setRenderMaxContent(false);
      setRenderMinContent(true);
    }
  }, [bodyWidth]);
  return (
    <div className={Style.AboutShow}>
      <div className={Style.Tabs}>
        <div
          className={`${Style.Tab} ${Style.ProfessionalTab} ${
            isProfessionalInfoFileActive ? Style.Active : ""
          } ${activeTab === "professional" ? Style.ActiveTab : ""}`}
          onClick={(): void => handleTabClick("professional")}
        >
          {professionalContent}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleProfessionalInfoClose}
          />
        </div>
        <div
          className={`${Style.Tab} ${Style.HobbiesTab} ${
            isHobbiesFileActive ? Style.Active : ""
          } ${activeTab === "hobbies" ? Style.ActiveTab : ""}`}
          onClick={(): void => handleTabClick("hobbies")}
        >
          {hobbiesContent}{" "}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleHobbiesClose}
          />
        </div>
        <div
          className={`${Style.Tab} ${Style.BioTab} ${
            isBioFileActive ? Style.Active : ""
          } ${activeTab === "bio" ? Style.ActiveTab : ""}`}
          onClick={(): void => handleTabClick("bio")}
        >
          {bioContent}{" "}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleBioFileClose}
          />
        </div>
        <div
          className={`${Style.Tab} ${Style.InterestsTab} ${
            isInterestsFileActive ? Style.Active : ""
          } ${activeTab === "interests" ? Style.ActiveTab : ""}`}
          onClick={(): void => handleTabClick("interests")}
        >
          {interestsContent}{" "}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleInterestsFileClose}
          />
        </div>
        <div
          className={`${Style.Tab} ${Style.EduTab} ${
            isEducationFileActive ? Style.Active : ""
          } ${activeTab === "education" ? Style.ActiveTab : ""}`}
          onClick={(): void => handleTabClick("education")}
        >
          {eduContent}{" "}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleEducationFileClose}
          />
        </div>
      </div>
      <div className={`${Style.tabInfo}`}>
        {renderMaxContent ? renderTabContent() : renderTabContentMin()}
      </div>
    </div>
  );
};

export default AboutShow;