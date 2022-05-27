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
                  The Y Factor
                  <br />
               </span>
               Health & Fitness
            </motion.h1>
            <motion.p variants={fade} initial="hidden" animate="show">
               Take Your Fitness To The Next Level
               <br /> And Find Your Y
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
