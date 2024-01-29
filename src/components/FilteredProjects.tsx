import React, { useEffect, useState } from "react";
import Style from "@/styles/FilteredProjects.module.scss";
import axios, { AxiosResponse } from "axios";
import { RiCloseFill } from "react-icons/ri";
import ReactIcon from "@/images/React.png";
import Card from "./Card";
import ViteIcon from "@/images/Vite.svg";
import NextjsIcon from "@/images/nextjs.png";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  category: string;
  ProjectImage: string;
  description: string;
  AltText: string;
  link: string;
  name: string;
  categoryid: number;
  CategoryImageClass: string;
}

const ReactContent = (): React.ReactElement => {
  const [projects, setProjects]: [[], Function] = useState([]);
  useEffect((): void => {
    axios
      .get("https://back.shoha-coder.uz/projects")
      .then((response: AxiosResponse): void => setProjects(response.data));
  }, []);
  return (
    <div className={Style.Content}>
      {projects
        .filter((project: Project) => project.category === "React")
        .map((project: Project): React.ReactElement => {
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
                CategoryImageClass=""
              />
            </div>
          );
        })}
    </div>
  );
};
const NextjsContent = (): React.ReactElement => {
  const [projects, setProjects]: [[], Function] = useState([]);
  useEffect((): void => {
    axios
      .get("https://back.shoha-coder.uz/projects")
      .then((response: AxiosResponse): void => setProjects(response.data));
  }, []);
  return (
    <div className={Style.Content}>
      {projects
        .filter((project: Project) => project.category === "Nextjs")
        .map((project: Project): React.ReactElement => {
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
                CategoryImageClass=""
              />
            </div>
          );
        })}
    </div>
  );
};
const ViteContent = (): React.ReactElement => {
  const [projects, setProjects]: [[], Function] = useState([]);
  useEffect((): void => {
    axios
      .get("https://back.shoha-coder.uz/projects")
      .then((response: AxiosResponse): void => setProjects(response.data));
  }, []);
  return (
    <div className={Style.Content}>
      {projects
        .filter((project: Project) => project.category === "Vite")
        .map((project: Project): React.ReactElement => {
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
                CategoryImageClass=""
              />
            </div>
          );
        })}
    </div>
  );
};
const AllContent = (): React.ReactElement => {
  const [projects, setProjects]: [[], Function] = useState([]);
  useEffect((): void => {
    axios
      .get("https://back.shoha-coder.uz/projects")
      .then((response: AxiosResponse): void => setProjects(response.data));
  }, []);
  return (
    <div className={Style.Content}>
      {projects.map((project: Project): React.ReactElement => {
        let CategoryImage: StaticImageData = ReactIcon;
        if (project.category === "React") {
          CategoryImage = ReactIcon;
        } else if (project.category === "Nextjs") {
          CategoryImage = NextjsIcon;
        } else if (project.category === "Vite") {
          CategoryImage = ViteIcon;
        }
        return (
          <div key={project.id}>
            <Card
              ProjectImage={"/images" + project.ProjectImage}
              CategoryImage={CategoryImage}
              description={`${project.description.substring(0, 50)}...`}
              AltText={project.AltText}
              ProjectLink={project.link}
              CategoryImageClass=""
              name={project.name}
              categoryid={project.categoryid}
              ProjectNameClass={Style.ProjectNameClass}
            />
          </div>
        );
      })}
    </div>
  );
};

interface FilteredProjectsProps {
  reactChecked: boolean;
  nextChecked: boolean;
  viteChecked: boolean;
  setReactChecked: Function;
  setNextChecked: Function;
  setViteChecked: Function;
}

const FilteredProjects: React.FC<FilteredProjectsProps> = ({
  reactChecked,
  nextChecked,
  viteChecked,
  setReactChecked,
  setNextChecked,
  setViteChecked,
}): React.ReactElement => {
  const handleReactClose = (): void => setReactChecked(false);
  const handleNextClose = (): void => setNextChecked(false);
  const handleViteClose = (): void => setViteChecked(false);
  const [activeTab, setActiveTab]: [string, Function] = useState("null");

  useEffect((): void => {
    if (reactChecked) setActiveTab("react");
    else if (nextChecked) setActiveTab("next");
    else if (viteChecked) setActiveTab("vite");
    else setActiveTab("all");
  }, [reactChecked, nextChecked, viteChecked]);
  const handleTabClick = (tab: string): void => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  const renderTabContent = (): React.ReactElement => {
    switch (activeTab) {
      case "react":
        return <ReactContent />;
      case "next":
        return <NextjsContent />;
      case "vite":
        return <ViteContent />;
      case "all":
        return <AllContent />;
      default:
        return <></>;
    }
  };
  const [bodyWidth, setBodyWidth]: [number, Function] = useState(0);
  const [reactContent, setReactContent]: [string, Function] = useState("");
  const [nextjsContent, setNextjsContent]: [string, Function] = useState("");
  const [viteContent, setViteContent]: [string, Function] = useState("");
  const [allContent, setAllContent]: [string, Function] = useState("");
  useEffect(() => {
    const handleResize = (): void => {
      setBodyWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect((): void => {
    if (
      bodyWidth <=
      70.375 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    ) {
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
          onClick={(): void => handleTabClick("all")}
          className={`${Style.Tab} ${Style.All} ${
            activeTab === "all" ? Style.ActiveTab : ""
          }`}
        >
          {allContent}
        </div>
        <div
          onClick={(): void => handleTabClick("react")}
          className={`${Style.Tab} ${Style.React} ${
            reactChecked ? Style.Active : ""
          } ${activeTab === "react" ? Style.ActiveTab : ""}`}
        >
          {reactContent}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleReactClose}
          />
        </div>
        <div
          onClick={(): void => handleTabClick("next")}
          className={`${Style.Tab} ${Style.Next} ${
            nextChecked ? Style.Active : ""
          } ${activeTab === "next" ? Style.ActiveTab : ""}`}
        >
          {nextjsContent}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleNextClose}
          />
        </div>
        <div
          onClick={(): void => handleTabClick("vite")}
          className={`${Style.Tab} ${Style.Vite} ${
            viteChecked ? Style.Active : ""
          } ${activeTab === "vite" ? Style.ActiveTab : ""}`}
        >
          {viteContent}
          <RiCloseFill
            className={Style.CloseIcon}
            fontSize={18}
            onClick={handleViteClose}
          />
        </div>
      </div>
      <div className={Style.Cards}>{renderTabContent()}</div>
    </div>
  );
};

export default FilteredProjects;
