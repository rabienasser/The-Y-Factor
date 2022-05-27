import React from "react";
import Wave from "../../Wave";
import person from "../../../imgs/person.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "../../../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../../../animation";
import { About, Description, Image } from "./AboutSection.style";

const AboutSection = () => {
   return (
      <About>
         <Wave />
         <Description>
            <motion.h1 variants={titleAnim} initial="hidden" animate="show">
               <span>
                  THIS IS JUST A TEST
                  <br />
               </span>
               To The Next Level
            </motion.h1>
            <motion.p variants={fade} initial="hidden" animate="show">
               Premium online & individual personal
               <br /> training in the Cleveland area
            </motion.p>
            <Link to="contact" smooth={true} offset={-70} duration={1500}>
               <Button variants={fade} initial="hidden" animate="show">
                  Contact
               </Button>
            </Link>
         </Description>
         <Image>
            <motion.img
               variants={photoAnim}
               initial="hidden"
               animate="show"
               src={person}
               alt="Photo"
            />
         </Image>
      </About>
   );
};

export default AboutSection;
