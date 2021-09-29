import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.nav)`
   min-height: 10vh;
   display: flex;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 2.5rem 10rem;
   background: var(--light-color);

   @media (max-width: 1100px) {
      padding: 2rem 6rem;
   }
   @media (max-width: 850px) {
      padding: 2rem 3rem;
   }

   @media (max-width: 680px) {
      padding: 1rem;
   }

   a {
      color: var(--dark-grey);
      text-decoration: none;
   }
   ul {
      display: flex;
      @media (max-width: 680px) {
         display: none;
      }
   }
   li {
      list-style: none;
      padding-left: 10rem;
      position: relative;
      color: var(--dark-grey);

      @media (max-width: 1100px) {
         padding-left: 5rem;
      }
   }
   .logo {
      height: 4rem;
      width: 9.5rem;
      @media (max-width: 680px) {
         margin: 0 auto;
      }
   }
   .list-item {
      font-size: 1.3rem;
   }
`;
