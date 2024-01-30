import { SetStateAction, createContext, useState } from "react";
import { ContextInterface, ContextProvider } from "../interface";

const Context = createContext<ContextInterface>({
  isBioActive: false,
  isContactsActive: false,
  isInterestsActive: false,
  isEducationActive: false,
  isProfessionalInfoActive: false,
  isPersonalInfoActive: false,
  isHobbiesActive: false,
  isBioFileActive: false,
  isInterestsFileActive: false,
  isEducationFileActive: false,
  isProfessionalInfoFileActive: false,
  isHobbiesFileActive: false,
  reactChecked: false,
  nextChecked: false,
  viteChecked: false,
  isContactActive: false,
  isContactFileActive: false,
  findMeActive: false,
  name: "",
  email: "",
  message: "",
  setIsBioActive: (value: SetStateAction<boolean>): void => {},
  setIsContactsActive: (value: SetStateAction<boolean>): void => {},
  setIsInterestsActive: (value: SetStateAction<boolean>): void => {},
  setIsEducationActive: (value: SetStateAction<boolean>): void => {},
  setIsProfessionalInfoActive: (value: SetStateAction<boolean>): void => {},
  setIsPersonalInfoActive: (value: SetStateAction<boolean>): void => {},
  setIsHobbiesActive: (value: SetStateAction<boolean>): void => {},
  setIsBioFileActive: (value: SetStateAction<boolean>): void => {},
  setIsInterestsFileActive: (value: SetStateAction<boolean>): void => {},
  setIsEducationFileActive: (value: SetStateAction<boolean>): void => {},
  setIsProfessionalInfoFileActive: (value: SetStateAction<boolean>): void => {},
  setIsHobbiesFileActive: (value: SetStateAction<boolean>): void => {},
  setReactChecked: (value: SetStateAction<boolean>): void => {},
  setNextChecked: (value: SetStateAction<boolean>): void => {},
  setViteChecked: (value: SetStateAction<boolean>): void => {},
  setIsContactActive: (value: SetStateAction<boolean>): void => {},
  setIsContactFileActive: (value: SetStateAction<boolean>): void => {},
  setFindMeActive: (value: SetStateAction<boolean>): void => {},
  setName: (value: SetStateAction<string>): void => {},
  setEmail: (value: SetStateAction<string>): void => {},
  setMessage: (value: SetStateAction<string>): void => {},
});

const Provider = ({ children }: ContextProvider) => {
  const [isProfessionalInfoActive, setIsProfessionalInfoActive] =
    useState<boolean>(false);
  const [isProfessionalInfoFileActive, setIsProfessionalInfoFileActive] =
    useState<boolean>(false);
  const [isPersonalInfoActive, setIsPersonalInfoActive] =
    useState<boolean>(false);
  const [isHobbiesActive, setIsHobbiesActive] = useState<boolean>(false);
  const [isHobbiesFileActive, setIsHobbiesFileActive] =
    useState<boolean>(false);
  const [isBioActive, setIsBioActive] = useState<boolean>(false);
  const [isContactsActive, setIsContactsActive] = useState<boolean>(false);
  const [isInterestsActive, setIsInterestsActive] = useState<boolean>(false);
  const [isEducationActive, setIsEducationActive] = useState<boolean>(false);
  const [isBioFileActive, setIsBioFileActive] = useState<boolean>(false);
  const [isInterestsFileActive, setIsInterestsFileActive] =
    useState<boolean>(false);
  const [isEducationFileActive, setIsEducationFileActive] =
    useState<boolean>(false);
  const [reactChecked, setReactChecked] = useState<boolean>(false);
  const [nextChecked, setNextChecked] = useState<boolean>(false);
  const [viteChecked, setViteChecked] = useState<boolean>(false);
  const [isContactActive, setIsContactActive] = useState<boolean>(false);
  const [isContactFileActive, setIsContactFileActive] = useState<boolean>(true);
  const [findMeActive, setFindMeActive] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <Context.Provider
      value={{
        isProfessionalInfoActive,
        setIsProfessionalInfoActive,
        isProfessionalInfoFileActive,
        setIsProfessionalInfoFileActive,
        isPersonalInfoActive,
        setIsPersonalInfoActive,
        isHobbiesActive,
        setIsHobbiesActive,
        isHobbiesFileActive,
        setIsHobbiesFileActive,
        isBioActive,
        setIsBioActive,
        isContactsActive,
        setIsContactsActive,
        isInterestsActive,
        setIsInterestsActive,
        isEducationActive,
        setIsEducationActive,
        isBioFileActive,
        setIsBioFileActive,
        isInterestsFileActive,
        setIsInterestsFileActive,
        isEducationFileActive,
        setIsEducationFileActive,
        reactChecked,
        setReactChecked,
        nextChecked,
        setNextChecked,
        viteChecked,
        setViteChecked,
        isContactActive,
        setIsContactActive,
        isContactFileActive,
        setIsContactFileActive,
        findMeActive,
        setFindMeActive,
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
