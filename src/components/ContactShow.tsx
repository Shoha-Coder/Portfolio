import React, { useContext, useState } from "react";
import Style from "@/styles/ContactShow.module.scss";
import { RiCloseFill } from "react-icons/ri";
import Send from "./Send";
import Sent from "./Sent";
import { ContextInterface } from "@/assets/interface";
import { Context } from "@/assets/Context/Context";


const ContactShow: React.FC = (): React.ReactElement => {
  const {
    isContactFileActive,
    name,
    email,
    message,
    setIsContactFileActive,
    setName,
    setEmail,
    setMessage,
  }: ContextInterface = useContext(Context)
  const handleClose = (): void => setIsContactFileActive(false);
  const [activeTab, setActiveTab] = useState<string>("null");

  const renderTabContent = (): React.ReactElement => {
    switch (activeTab) {
      case "send":
        return (
          <Send
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
          />
        );
      case "sent":
        return <Sent activeTab={activeTab} setActiveTab={setActiveTab} />;
      default:
        return (
          <Send
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
          />
        );
    }
  };
  return (
    <div className={Style.ContactShow}>
      <div className={Style.Tabs}>
        <div
          className={`${Style.Tab} ${Style.Tab} ${
            isContactFileActive ? Style.Active : ""
          } ${isContactFileActive ? Style.ActiveTab : ""}`}
        >
          contacts{" "}
          <RiCloseFill
            className={Style.CloseIcon}
            onClick={handleClose}
            fontSize={18}
          />
        </div>
      </div>
      <div
        className={`${
          isContactFileActive !== true ? Style.tabInfoUnActive : Style.tabInfo
        }`}
      >
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ContactShow;
