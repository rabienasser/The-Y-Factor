import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
   padding: 0 10rem;
   margin-bottom: 7rem;

   @media (max-width: 1100px) {
      padding: 1rem;
   }

   @media (max-width: 850px) {
      margin-bottom: 3rem;
   }

   @media (max-width: 550px) {
      margin-bottom: 1rem;
   }

   h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      color: var(--third-color);
      font-weight: bolder;
   }
`;

export const Boxes = styled(motion.div)`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;

   @media (max-width: 875px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const Box = styled(motion.div)`
   width: 30%;
   padding: 40px;
   margin: 1rem;
   box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

   @media (max-width: 875px) {
      width: 75%;
      margin: 1.5rem 0;
   }

   p {
      font-size: 1rem;
      font-style: italic;
      margin: auto;
   }

   h3 {
      color: var(--third-color);
      font-weight: bolder;
   }
`;
