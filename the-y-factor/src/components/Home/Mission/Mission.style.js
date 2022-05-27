import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
   padding: 0 10rem;
   margin-bottom: 4rem;
   background: var(--third-color);
   color: var(--light-color);
   @media (max-width: 1300px) {
      padding: 0 5rem;
   }
   @media (max-width: 1200px) {
      padding: 0 1rem;
   }
   @media (max-width: 550px) {
      margin-bottom: 1rem;
   }
`;

export const Statement = styled(motion.div)`
   padding: 1.5rem;
   width: 60%;
   margin: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media (max-width: 1100px) {
      width: 100%;
      h2 {
         text-align: center;
      }
   }
   h2 {
      margin-bottom: 1rem;
      font-size: 2.7rem;
      color: var(--light-color);
      @media (max-width: 1150px) {
         font-size: 2rem;
      }
   }
   p {
      font-size: 1rem;
      text-align: center;
   }
`;
