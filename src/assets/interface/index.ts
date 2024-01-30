import { StaticImageData } from "next/image";
import { Dispatch, ReactNode, SetStateAction } from "react";
// type All pages

// * Context:
export interface ContextInterface {
  isBioActive: boolean;
  isContactsActive: boolean;
  isInterestsActive: boolean;
  isEducationActive: boolean;
  isProfessionalInfoActive: boolean;
  isPersonalInfoActive: boolean;
  isHobbiesActive: boolean;
  isBioFileActive: boolean;
  isInterestsFileActive: boolean;
  isEducationFileActive: boolean;
  isProfessionalInfoFileActive: boolean;
  isHobbiesFileActive: boolean;
  reactChecked: boolean;
  nextChecked: boolean;
  viteChecked: boolean;
  isContactActive: boolean;
  isContactFileActive: boolean;
  findMeActive: boolean;
  name: string;
  email: string;
  message: string;
  setIsBioActive: Dispatch<SetStateAction<boolean>>;
  setIsContactsActive: Dispatch<SetStateAction<boolean>>;
  setIsInterestsActive: Dispatch<SetStateAction<boolean>>;
  setIsEducationActive: Dispatch<SetStateAction<boolean>>;
  setIsProfessionalInfoActive: Dispatch<SetStateAction<boolean>>;
  setIsPersonalInfoActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesActive: Dispatch<SetStateAction<boolean>>;
  setIsBioFileActive: Dispatch<SetStateAction<boolean>>;
  setIsInterestsFileActive: Dispatch<SetStateAction<boolean>>;
  setIsEducationFileActive: Dispatch<SetStateAction<boolean>>;
  setIsProfessionalInfoFileActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesFileActive: Dispatch<SetStateAction<boolean>>;
  setReactChecked: Dispatch<SetStateAction<boolean>>;
  setNextChecked: Dispatch<SetStateAction<boolean>>;
  setViteChecked: Dispatch<SetStateAction<boolean>>;
  setIsContactActive: Dispatch<SetStateAction<boolean>>;
  setIsContactFileActive: Dispatch<SetStateAction<boolean>>;
  setFindMeActive: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}
export interface ContextProvider {
  children: ReactNode;
}

// * Container:

export interface Container {
  children: ReactNode;
}

// * Helmet:

export interface Helmet {
  title: string;
}

// * Nav:

export interface Nav {
  isBurgerActive: boolean;
  setIsBurgerActive: Dispatch<SetStateAction<boolean>>;
}

export interface NavLink {
  id: number;
  name: string;
  path: string;
  clas: string;
}

// * BurgerMenu:

export interface Burger {
  click: () => void;
  children: ReactNode;
  className: string;
}

export interface BurgerMenu {
  className: string;
}

export interface Links {
  id: number;
  name: string;
  path: string;
  clas: string;
}

// type Home interfaces

// * Game:

export interface Food {
  dot: number[];
}

export interface FoodLeft {
  foodLeft: number;
}

export interface GameState {
  food: number[];
  direction: string;
  speed: number;
  route: string;
  snakeDots: number[][];
  foodCount: number;
}

export interface Menu {
  onRouteChange: VoidFunction;
}

export interface Snake {
  dot: number[];
}

export interface StartGame {
  onClick: Function;
  children: string;
  className: string;
}

// type About interfaces

// * AboutIconsSide:

export interface AboutIconsSide {
  isProfessionalInfoFileActive: boolean;
  isPersonalInfoActive: boolean;
  isHobbiesFileActive: boolean;
  setIsProfessionalInfoFileActive: Dispatch<SetStateAction<boolean>>;
  setIsPersonalInfoActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesFileActive: Dispatch<SetStateAction<boolean>>;
}

// * AboutShow:

export interface AboutShow {
  isProfessionalInfoActive: boolean;
  isHobbiesActive: boolean;
  isBioFileActive: boolean;
  isInterestsFileActive: boolean;
  isEducationFileActive: boolean;
  isProfessionalInfoFileActive: boolean;
  isHobbiesFileActive: boolean;
  setIsProfessionalInfoActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesActive: Dispatch<SetStateAction<boolean>>;
  setIsBioFileActive: Dispatch<SetStateAction<boolean>>;
  setIsInterestsFileActive: Dispatch<SetStateAction<boolean>>;
  setIsEducationFileActive: Dispatch<SetStateAction<boolean>>;
  setIsProfessionalInfoFileActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesFileActive: Dispatch<SetStateAction<boolean>>;
}

// type Projects interfaces

// * ProjectsFilterSide:

export interface ProjectsFilterSide {
  reactChecked: boolean;
  nextChecked: boolean;
  viteChecked: boolean;
  setReactChecked: Dispatch<SetStateAction<boolean>>;
  setNextChecked: Dispatch<SetStateAction<boolean>>;
  setViteChecked: Dispatch<SetStateAction<boolean>>;
}

// * FilteredProjects:

export interface FilteredProjects {
  reactChecked: boolean;
  nextChecked: boolean;
  viteChecked: boolean;
  setReactChecked: Dispatch<SetStateAction<boolean>>;
  setNextChecked: Dispatch<SetStateAction<boolean>>;
  setViteChecked: Dispatch<SetStateAction<boolean>>;
}

export interface Project {
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

// * Card:

export interface Card {
  ProjectImage: string;
  CategoryImage: StaticImageData;
  description: string;
  AltText: string;
  ProjectLink: string;
  name: string;
  categoryid: number;
  CategoryImageClass: string;
  ProjectNameClass: string;
}

// type Contact interfaces

// * ContactDropdowns:

export interface ContactDropdowns {
  isContactActive: boolean;
  isContactFileActive: boolean;
  findMeActive: boolean;
  setIsContactActive: Dispatch<SetStateAction<boolean>>;
  setIsContactFileActive: Dispatch<SetStateAction<boolean>>;
  setFindMeActive: Dispatch<SetStateAction<boolean>>;
}

// * ContactShow:

export interface ContactShow {
  isContactFileActive: boolean;
  name: string;
  email: string;
  message: string;
  setIsContactFileActive: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

// * Email js

export interface Send_Email {
  activeTab: string;
  name: string;
  email: string;
  message: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

export interface SentEmail {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}
