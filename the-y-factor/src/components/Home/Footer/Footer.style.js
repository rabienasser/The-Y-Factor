import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFooter = styled(motion.div)`
   padding: 0 13rem;
   display: flex;
   align-items: center;
   background: var(--dark-blue);
   width: 100%;
   height: 20vh;
   color: var(--light-color);

   @media (max-width: 1100px) {
      padding: 0 6rem;
   }
   @media (max-width: 850px) {
      padding: 0 2rem;
   }
   @media (max-width: 850px) {
      padding: 0 2rem;
   }
   @media (max-width: 600px) {
      height: fit-content;
      flex-direction: column;
      padding: 2rem 0;
   }

   div {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 33.33%;
      @media (max-width: 600px) {
         width: 75%;
         margin-bottom: 2rem;
      }

      h2 {
         margin-bottom: 0.5rem;
      }
   }
`;

export const FooterLogo = styled.div`
   display: flex;

   div {
      background: var(--light-color);
      width: 50%;
      margin: auto;
      border-radius: 50%;
      @media (max-width: 850px) {
         width: 70%;
      }

      img {
         height: 100%;
         width: 100%;
         padding: 1rem;
         margin: auto;
      }
   }
`;
