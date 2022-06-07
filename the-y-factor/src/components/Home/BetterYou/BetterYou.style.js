import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
   padding: 0rem 10rem;
   @media (max-width: 1100px) {
      padding: 0 6rem;
   }
   @media (max-width: 850px) {
      padding: 0 3rem;
   }
   @media (max-width: 550px) {
      padding: 0 1rem;
   }
`;

export const Description = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   width: 85%;

   @media (max-width: 1100px) {
      width: 85%;
   }

   h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      text-align: center;
      @media (max-width: 850px) {
         font-size: 3rem;
      }
      @media (max-width: 550px) {
         font-size: 2.5rem;
      }
   }

   h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      font-weight: bolder;
      color: var(--third-color);
      @media (max-width: 850px) {
         font-size: 1.8rem;
      }
      @media (max-width: 550px) {
         font-size: 1.5rem;
      }
   }

   p {
      text-align: center;
      margin-bottom: 1rem;
   }

   p:last-child {
      margin-bottom: 4rem;
      @media (max-width: 850px) {
         margin-bottom: 2rem;
      }
   }

   span {
      font-style: italic;
      font-weight: bold;
      text-decoration: underline;
      color: var(--third-color);
   }
`;

export const Boxes = styled(motion.div)`
   padding: 0 7rem;
   display: flex;
   margin-bottom: 7rem;
   text-align: center;

   @media (max-width: 1100px) {
      padding: 1rem;
      margin-bottom: 3rem;
   }

   @media (max-width: 875px) {
      flex-direction: column;
      align-items: center;
   }
`;
