import ContactDropdowns from "@/components/ContactDropdowns";
import ContactShow from "@/components/ContactShow";
import Container from "@/components/Container";
import Helmet from "@/components/Helmet";
import React, { useState } from "react";
import Style from "@/styles/Contact.module.scss";

const Contact: React.FC = (): React.ReactElement => {
  const [isContactActive, setIsContactActive] = useState<boolean>(false);
  const [isContactFileActive, setIsContactFileActive] = useState<boolean>(true);
  const [findMeActive, setFindMeActive] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <Container>
      <Helmet title={"Contact"} />
      <div className={Style.Contact}>
        <p className={Style.p}>_contact-me</p>
        <ContactDropdowns
          isContactActive={isContactActive}
          setIsContactActive={setIsContactActive}
          isContactFileActive={isContactFileActive}
          setIsContactFileActive={setIsContactFileActive}
          findMeActive={findMeActive}
          setFindMeActive={setFindMeActive}
        />
        <ContactShow
          isContactFileActive={isContactFileActive}
          setIsContactFileActive={setIsContactFileActive}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </Container>
  );
};

export default Contact;
