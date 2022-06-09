import React from "react";
import jeff_1 from "../../../imgs/jeff_1.jpg";
import { useScroll } from "../../UseScroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { testAnim, socialAnim, missionPhoto } from "../../../animation";
import { motion } from "framer-motion";
import ContactForm from "../../ContactForm/ContactForm";
import {
   Container,
   Form,
   ContactInfo,
   Social,
   StyledImage,
} from "./Contact.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

const Contact = () => {
   const [element, controls] = useScroll();
   return (
      <>
         <Container id="contact">
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
                  <motion.ul
                     variants={testAnim}
                     initial="hidden"
                     animate={controls}
                     ref={element}
                  >
                     <motion.li variants={socialAnim}>
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
                     </motion.li>
                     <motion.li variants={socialAnim}>
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
                     </motion.li>
                     <motion.li variants={socialAnim}>
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
                     </motion.li>
                     <motion.li variants={socialAnim}>
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
                     </motion.li>
                  </motion.ul>
               </Social>
               <StyledImage>
                  <motion.img
                     src={jeff_1}
                     alt="trainer"
                     variants={missionPhoto}
                     initial="hidden"
                     animate={controls}
                     ref={element}
                  />
               </StyledImage>
            </ContactInfo>
         </Container>
      </>
   );
};

export default Contact;
