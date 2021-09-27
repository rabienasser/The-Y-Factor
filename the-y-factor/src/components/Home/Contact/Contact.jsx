import React from "react";
import ContactForm from "../../ContactForm/ContactForm";
import { Container } from "./Contact.style";

const Contact = () => {
   return (
      <Container>
         <h1>Contact Me</h1>
         <ContactForm />
      </Container>
   );
};

export default Contact;
