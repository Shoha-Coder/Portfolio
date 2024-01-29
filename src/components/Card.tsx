import React, { useEffect, useState } from "react";
import Style from "@/styles/Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/assets/interface";


const Card: React.FC<Card> = ({
  ProjectImage,
  CategoryImage,
  description,
  AltText,
  ProjectLink,
  name,
  categoryid,
  CategoryImageClass,
  ProjectNameClass,
}): React.ReactElement => {
  const [bodyWidth, setBodyWidth] = useState<number>(0);
  const [className, setClassName] = useState<string>("");
  const [containerClassName, setContainerClass] = useState<string>("");
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
      26.563 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    ) {
      setClassName(Style.Mini);
    } else {
      setClassName(Style.Card);
    }
  }, [bodyWidth]);
  return (
    <div className={`${Style.CardContainer} ${className}`}>
      <p className={ProjectNameClass}>
        <span>Project {categoryid} </span>
        {name}
      </p>
      <div className={`${Style.Card} ${className}`}>
        <Image
          src={ProjectImage}
          className={Style.ProjectImage}
          width={10}
          height={1}
          alt={AltText}
        />
        <Image
          src={CategoryImage}
          className={`${Style.CategoryImage} ${CategoryImageClass}`}
          alt=""
        />
        <p className={Style.Description}>{description}</p>
        <Link href={ProjectLink} className={Style.ProjectLink} target="_blank">
          view-project
        </Link>
      </div>
    </div>
  );
};

export default Card;
