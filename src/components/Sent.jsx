import React from 'react';
import Style from "@/styles/Sent.module.scss";

const Sent = ({
  activeTab, setActiveTab,
}) => {
  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className={Style.Sent}>
      <h1>Thank you!</h1>
      <p>Your message has been accepted. You will recieve answer really soon!</p>
      <button onClick={()=>handleTabClick('send')}>send-new-message</button>
    </div>
  )
}

export default Sent