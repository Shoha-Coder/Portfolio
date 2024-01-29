// type All pages

// * Container:

interface Container {
  children: ReactNode;
}

// * Helmet:

interface HelmetProps {
  title: string;
}

// * Nav:

interface Nav {
  isBurgerActive: boolean;
  setIsBurgerActive: Dispatch<SetStateAction<boolean>>;
}

interface NavLink {
  id: number;
  name: string;
  path: string;
  clas: string;
}

// * BurgerMenu:

interface BurgerMenu {
  className: string;
}

interface Link {
  id: number;
  name: string;
  path: string;
  clas: string;
}

// type Home interfaces

// * Game:

interface FoodProps {
  dot: number[];
}

interface FoodLeftProps {
  foodLeft: number;
}

interface GameState {
  food: number[];
  direction: string;
  speed: number;
  route: string;
  snakeDots: number[][];
  foodCount: number;
}

interface MenuProps {
  onRouteChange: VoidFunction;
}

interface SnakeProps {
  dot: number[];
}

interface StartGame {
  onClick: Function;
  children: string;
  className: string;
}

// type About interfaces

// * AboutIconsSide:

interface AboutIconsSide {
  isProfessionalInfoFileActive: boolean;
  isPersonalInfoActive: boolean;
  isHobbiesFileActive: boolean;
  setIsProfessionalInfoFileActive: Dispatch<SetStateAction<boolean>>;
  setIsPersonalInfoActive: Dispatch<SetStateAction<boolean>>;
  setIsHobbiesFileActive: Dispatch<SetStateAction<boolean>>;
}

// * AboutDropdowns:

interface AboutDropdowns {
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
}

// * AboutShow:

interface AboutShow {
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

interface ProjectsFilterSide {
  reactChecked: boolean;
  nextChecked: boolean;
  viteChecked: boolean;
  setReactChecked: Dispatch<SetStateAction<boolean>>;
  setNextChecked: Dispatch<SetStateAction<boolean>>;
  setViteChecked: Dispatch<SetStateAction<boolean>>;
}

// * FilteredProjects:

interface FilteredProjects {
  reactChecked: boolean;
  nextChecked: boolean;
  viteChecked: boolean;
  setReactChecked: Dispatch<SetStateAction<boolean>>;
  setNextChecked: Dispatch<SetStateAction<boolean>>;
  setViteChecked: Dispatch<SetStateAction<boolean>>;
}

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

// * Card:

interface Card {
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

interface ContactDropdowns {
  isContactActive: boolean;
  isContactFileActive: boolean;
  findMeActive: boolean;
  setIsContactActive: Dispatch<SetStateAction<boolean>>;
  setIsContactFileActive: Dispatch<SetStateAction<boolean>>;
  setFindMeActive: Dispatch<SetStateAction<boolean>>;
}

// * ContactShow:

interface ContactShow {
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

interface SendEmail {
  activeTab: string;
  name: string;
  email: string;
  message: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

interface SentEmail {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}