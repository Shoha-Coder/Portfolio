import ContactDropdowns from "@/components/ContactDropdowns";
import ContactShow from "@/components/ContactShow";
import Container from "@/components/Container";
import React from "react";
import Style from "@/styles/Contact.module.scss";
import SEO from "@/layout/seo/seo";

const Contact: React.FC = (): React.ReactElement => {
  return (
    <SEO
      metaTitle="Shoha-Coder | Contact"
      metaKeywords={process.env.META_KEYWORD_CONTACT || ""}
      metaDescription="Shoha Coder's Portfolio Contact Page"
      author="Shoha Coder"
    >
      <Container>
        <div className={Style.Contact}>
          <p className={Style.p}>_contact-me</p>
          <ContactDropdowns />
          <ContactShow />
        </div>
      </Container>
    </SEO>
  );
};

export default Contact;
