import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TextFill from "../components/TextFill";
import { homePageAnim } from "../animation";

function IntroAnim() {
   return (
      <HomePageAnim
         variants={homePageAnim}
         initial="initial"
         animate="animate"
         exit="exit"
      >
         <TextFill />
      </HomePageAnim>
   );
}

const HomePageAnim = styled(motion.div)`
   background: var(--dark-blue);
   position: fixed;
   top: 19%;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 2;
   padding: 0rem 15rem;
`;

export default IntroAnim;
