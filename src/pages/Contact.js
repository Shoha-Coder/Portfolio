import ContactDropdowns from "@/components/ContactDropdowns";
import ContactShow from "@/components/ContactShow";
import Container from "@/components/Container";
import Helmet from "@/components/Helmet";
import React, { useState } from "react";
import Style from "@/styles/Contact.module.scss";

const Contact = () => {
  const [isContactActive, setIsContactActive] = useState(false);
  const [isContactFileActive, setIsContactFileActive] = useState(true);
  const [findMeActive, setFindMeActive] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
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
