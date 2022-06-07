import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
   padding: 0 10rem;
   margin-bottom: 7rem;

   @media (max-width: 1100px) {
      padding: 0 6rem;
      margin-bottom: 5rem;
   }

   @media (max-width: 550px) {
      padding: 0 3rem;
   }
`;

export const Description = styled(motion.div)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: var(--dark-blue);
   color: var(--light-color);
   margin-bottom: 5rem;
   padding: 30px 0;
   @media (max-width: 550px) {
      margin-bottom: 3rem;
   }

   div {
      width: 50%;
      text-align: left;

      @media (max-width: 850px) {
         width: 75%;
      }

      h2 {
         margin-bottom: 1rem;
         font-size: 2.3rem;
      }

      p {
         font-size: 1rem;
      }

      p:first-of-type {
         margin-bottom: 2rem;
      }
   }
`;
