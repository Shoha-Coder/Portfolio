import React, { useEffect, useState } from "react";
import Style from "@/styles/ProjectsFilterSide.module.scss";
import { FaReact } from "react-icons/fa";
import unActiveDropdownIcon from "@/assets/images/unactveDropdown.png";
import Image from "next/image";
import { SiNextdotjs, SiVite } from "react-icons/si";

const ProjectsFilterSide: React.FC<ProjectsFilterSide> = ({
  reactChecked,
  setReactChecked,
  nextChecked,
  setNextChecked,
  viteChecked,
  setViteChecked,
}): React.ReactElement => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  let DropdownClick: Function;
  let ReactClick: Function;
  let ViteClick: Function;
  let NextClick: Function;
  if (dropdown === true) {
    DropdownClick = (): void => setDropdown(false);
  } else {
    DropdownClick = (): void => setDropdown(true);
  }
  if (reactChecked === true) {
    ReactClick = (): void => setReactChecked(false);
  } else {
    ReactClick = (): void => setReactChecked(true);
  }
  if (nextChecked === true) {
    NextClick = (): void => setNextChecked(false);
  } else {
    NextClick = (): void => setNextChecked(true);
  }
  if (viteChecked === true) {
    ViteClick = (): void => setViteChecked(false);
  } else {
    ViteClick = (): void => setViteChecked(true);
  }
  const [bodyWidth, setBodyWidth] = useState<number>(0);
  const [React, setReact] = useState<boolean>(false);
  const [Nextjs, setNextjs] = useState<boolean>(false);
  const [Vite, setVite] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
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
      setNextjs(true);
      setReact(true);
      setVite(true);
    } else {
      setNextjs(false);
      setReact(false);
      setVite(false);
    }
  }, [bodyWidth]);
  if (Nextjs === true) {
    NextClick = (): void => {
      setReactChecked(false);
      setViteChecked(false);
      if (nextChecked === true) {
        setNextChecked(false);
      } else {
        setNextChecked(true);
      }
    };
  } else {
    NextClick = (): void => {
      if (nextChecked === true) {
        setNextChecked(false);
      } else {
        setNextChecked(true);
      }
    };
  }
  if (React === true) {
    ReactClick = (): void => {
      setNextChecked(false);
      setViteChecked(false);
      if (reactChecked === true) {
        setReactChecked(false);
      } else {
        setReactChecked(true);
      }
    };
  } else {
    ReactClick = (): void => {
      if (reactChecked === true) {
        setReactChecked(false);
      } else {
        setReactChecked(true);
      }
    };
  }
  if (Vite === true) {
    ViteClick = (): void => {
      setNextChecked(false);
      setReactChecked(false);
      if (viteChecked === true) {
        setViteChecked(false);
      } else {
        setViteChecked(true);
      }
    };
  } else {
    ViteClick = (): void => {
      if (viteChecked === true) {
        setViteChecked(false);
      } else {
        setViteChecked(true);
      }
    };
  }
  return (
    <div className={Style.ProjectsFilterSide}>
      <div
        className={`${Style.Dropdown} ${dropdown === true ? Style.Active : ""}`}
      >
        <h3
          onClick={(): void => DropdownClick()}
          className={`${Style.Title} 
                ${dropdown === true ? Style.Active : ""}`}
        >
          <Image
            src={unActiveDropdownIcon}
            className={Style.DropdownIcon}
            alt="Dropdown"
          />{" "}
          projects
        </h3>
        <div
          className={`${Style.DropdownItem} ${
            dropdown === true ? Style.Active : ""
          }`}
        >
          <h3
            onClick={(): void => ReactClick()}
            className={reactChecked ? Style.Active : ""}
          >
            <input type="checkbox" checked={reactChecked} />{" "}
            <FaReact className={Style.Icon} /> React
          </h3>
          <h3
            onClick={(): void => NextClick()}
            className={nextChecked ? Style.Active : ""}
          >
            <input type="checkbox" checked={nextChecked} />{" "}
            <SiNextdotjs className={Style.Icon} /> Next js
          </h3>
          <h3
            onClick={(): void => ViteClick()}
            className={viteChecked ? Style.Active : ""}
          >
            <input type="checkbox" checked={viteChecked} />{" "}
            <SiVite className={Style.Icon} /> Vite
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFilterSide;
