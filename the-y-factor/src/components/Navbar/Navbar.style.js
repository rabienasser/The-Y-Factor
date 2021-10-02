import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.nav)`
   min-height: 10vh;
   display: flex;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 13rem;
   background: var(--light-color);

   @media (max-width: 1100px) {
      padding: 1rem 6rem;
   }
   @media (max-width: 850px) {
      padding: 1rem 3rem;
   }

   @media (max-width: 680px) {
      padding: 1rem;
   }

   a {
      color: var(--dark-grey);
      text-decoration: none;
      font-size: 1.1rem;
      position: relative;
      cursor: pointer;
      transition: color 0.2 ease;

      &:hover {
         color: var(--light-grey);

         &::after,
         &::before {
            width: 100%;
            left: 0;
         }
      }
      &::after,
      &::before {
         content: "";
         position: absolute;
         bottom: -30%;
         width: 0;
         right: 0;
         height: 3px;
      }

      &::before {
         transition: width 0.4s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
         background: var(--dark-blue);
      }

      &::after {
         transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
         background: var(--third-color);
      }
   }
   ul {
      display: flex;
      @media (max-width: 680px) {
         display: none;
      }
   }
   li {
      list-style: none;
      padding: 0 3rem;
      position: relative;

      @media (max-width: 1100px) {
         padding-left: 5rem;
      }
      @media (max-width: 850px) {
         padding-left: 3rem;
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
