import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../../ContactForm/ContactForm";
import {
   Container,
   Form,
   ContactInfo,
   Social,
   ContactDetails,
   Footer,
} from "./Contact.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

const Contact = () => {
   return (
      <>
         <Container>
            <Form>
               <h2>Contact Me</h2>
               <p>
                  Feel free to get in touch to find out how I can help you
                  resolve your strength, fitness, and nutrition goals.
               </p>
               <ContactForm />
            </Form>
            <ContactInfo>
               <Social>
                  <h2>Social</h2>
                  <ul>
                     <li>
                        <a
                           href="https://www.facebook.com/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <FontAwesomeIcon
                              icon={["fab", "facebook"]}
                              className="icon"
                           />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.instagram.com/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <FontAwesomeIcon
                              icon={["fab", "instagram"]}
                              className="icon"
                           />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.youtube.com/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <FontAwesomeIcon
                              icon={["fab", "youtube"]}
                              className="icon"
                           />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.linkedin.com/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <FontAwesomeIcon
                              icon={["fab", "linkedin"]}
                              className="icon"
                           />
                        </a>
                     </li>
                  </ul>
               </Social>
               <ContactDetails>
                  <div>
                     <h2>Telephone</h2>
                     <p>(440)-476-3812</p>
                  </div>
                  <div>
                     <h2>Email</h2>
                     <p>theyfactorllc@gmail.com</p>
                  </div>
               </ContactDetails>
            </ContactInfo>
         </Container>
         <Footer />
      </>
   );
};

export default Contact;
