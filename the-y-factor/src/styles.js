import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
   position: relative;
   padding: 10px 30px;
   color: var(--third-color);
   text-decoration: none;
   text-transform: uppercase;
   letter-spacing: 2px;
   background-color: transparent;
   font-size: 1rem;
   transition: 0.5s;
   cursor: pointer;
   border: none;
   overflow: hidden;

   &:hover {
      background: var(--third-color);
      color: var(--light-color);
      box-shadow: 0 0 50px var(--third-color);
      transition-delay: 0.5s;
   }

   &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid var(--third-color);
      border-left: 2px solid var(--third-color);
      transition: 0.5s;
   }

   &:hover:before {
      width: 100%;
      height: 100%;
   }

   &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid var(--third-color);
      border-right: 2px solid var(--third-color);
      transition: 0.5s;
   }

   &:hover:after {
      width: 100%;
      height: 100%;
   }
`;

export const Frame = styled(motion.div)`
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 100vh;
   background: var(--third-color);
   z-index: 2;
`;

export const Frame2 = styled(Frame)`
   background: var(--light-grey);
`;

export const Frame3 = styled(Frame)`
   background: var(--dark-blue);
`;

export const Frame4 = styled(Frame)`
   background: var(--dark-grey);
`;

export const Hide = styled.div`
   overflow: hidden;
`;
