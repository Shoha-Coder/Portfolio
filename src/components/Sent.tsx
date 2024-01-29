import React from "react";
import Style from "@/styles/Sent.module.scss";


const Sent: React.FC<SentEmail> = ({ activeTab, setActiveTab }) => {
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
