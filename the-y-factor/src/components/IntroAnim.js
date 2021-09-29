import React from "react";
import styled from "styled-components";
import TextFill from "../components/TextFill";
import { motion } from "framer-motion";
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
   bottom: 0;
   width: 100vw;
   height: 100vh;
   z-index: 2;
   padding: 0rem 15rem;

   @media (max-width: 1100px) {
      padding: 0 10rem;
   }
   @media (max-width: 850px) {
      padding: 0 8rem;
   }
   @media (max-width: 750px) {
      padding: 0 5rem;
   }
   @media (max-width: 650px) {
      padding: 0 3rem;
   }
   @media (max-width: 550px) {
      padding: 0 2rem;
   }
   @media (max-width: 450px) {
      padding: 0 1rem;
   }
`;

export default IntroAnim;
