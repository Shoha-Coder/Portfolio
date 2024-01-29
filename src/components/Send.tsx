import React from "react";
import Style from "@/styles/Send.module.scss";
import SendEmail from "./sendEmail";

const Send: React.FC<SendEmail> = ({
  activeTab,
  setActiveTab,
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
}) => {
  const handleTabClick = (tab: string): void => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  const handleSendFunc = (): void => {
    const form = {
      name: name,
      email: email,
      message: message,
    };

    try {
      if (name !== "" && email !== "" && message !== "") {
        SendEmail(form);
        handleTabClick("sent");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={Style.Send}>
      <h3>_name:</h3>
      <input
        type="text"
        name="_name"
        value={name}
        onChange={(e): void => setName(e.target.value)}
        autoComplete="off"
      />
      <div>
        <h3>_email:</h3>
        <input
          type="text"
          name="_email"
          value={email}
          onChange={(e): void => setEmail(e.target.value)}
          autoComplete="off"
        />
      </div>
      <h3>_message:</h3>
      <textarea
        name="_message"
        value={message}
        onChange={(e): void => setMessage(e.target.value)}
        autoComplete="off"
      />
      <button onClick={(): void => handleSendFunc()}>submit-message</button>
    </div>
  );
};

export default Send;
