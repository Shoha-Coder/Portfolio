import ContactDropdowns from "@/components/ContactDropdowns";
import ContactShow from "@/components/ContactShow";
import Container from "@/components/Container";
import Helmet from "@/components/Helmet";
import React, { useState } from "react";
import Style from "@/styles/Contact.module.scss";

const Contact: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Helmet title={"Contact"} />
      <div className={Style.Contact}>
        <p className={Style.p}>_contact-me</p>
        <ContactDropdowns />
        <ContactShow />
      </div>
    </Container>
  );
};

export default Contact;
