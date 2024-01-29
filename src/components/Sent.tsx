import React from "react";
import Style from "@/styles/Sent.module.scss";

interface Props {
  activeTab: string;
  setActiveTab: Function;
}

const Sent: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab: string) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className={Style.Sent}>
      <h1>Thank you!</h1>
      <p>
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <button onClick={(): void => handleTabClick("send")}>
        send-new-message
      </button>
    </div>
  );
};

export default Sent;
