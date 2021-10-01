import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
   padding: 0 10rem;
   margin-bottom: 4rem;
   display: flex;
   background: var(--dark-blue);
   color: var(--light-color);

   @media (max-width: 1100px) {
      padding: 0 1rem;
   }
   @media (max-width: 550px) {
      margin-bottom: 1rem;
   }
`;

export const MissionContent = styled.div`
   display: flex;
   align-items: center;
   padding: 40px;

   @media (max-width: 750px) {
      flex-direction: column;
      padding: 20px;
   }
`;

export const Image = styled(motion.div)`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 750px) {
      width: 70%;
   }
`;

export const StyledImage = styled(motion.img)`
   object-fit: cover;
   width: 75%;
   height: 90%;
`;

export const Statement = styled(motion.div)`
   width: 50%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   @media (max-width: 750px) {
      width: 100%;
      text-align: center;
   }

   h2 {
      margin-bottom: 1rem;
      font-size: 2.7rem;
      color: var(--third-color);

      @media (max-width: 1150px) {
         font-size: 2rem;
      }
   }

   p {
      font-size: 1rem;
   }
`;
