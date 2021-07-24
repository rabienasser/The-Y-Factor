import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TextFill from "../components/TextFill";

function IntroAnim() {
   return (
      <HomePageAnim>
         <TextFill />
      </HomePageAnim>
   );
}

const HomePageAnim = styled(motion.div)`
   background: var(--dark-blue);
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 2;
   padding: 0 15rem;
`;

export default IntroAnim;
