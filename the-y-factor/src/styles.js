import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
   position: relative;
   padding: 10px 30px;
   color: ${(props) =>
      props.grey ? "var(--dark-grey)" : "var(--third-color)"};
   text-decoration: none;
   letter-spacing: 2px;
   background-color: transparent;
   font-size: 1rem;
   transition: 0.5s;
   cursor: pointer;
   border: none;
   overflow: hidden;

   @media (max-width: 850px) {
      padding: 10px 15px;
      font-size: 0.8rem;
   }

   &:hover {
      background: ${(props) =>
         props.grey ? "var(--dark-grey)" : "var(--third-color)"};
      color: var(--light-color);
      box-shadow: 0 0 50px
         ${(props) => (props.grey ? "var(--dark-grey)" : "var(--third-color)")};
      transition-delay: 0.5s;
   }

   &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-top: 2px solid
         ${(props) => (props.grey ? "var(--dark-grey)" : "var(--third-color)")};
      border-left: 2px solid
         ${(props) => (props.grey ? "var(--dark-grey)" : "var(--third-color)")};
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
      border-bottom: 2px solid
         ${(props) => (props.grey ? "var(--dark-grey)" : "var(--third-color)")};
      border-right: 2px solid
         ${(props) => (props.grey ? "var(--dark-grey)" : "var(--third-color)")};
      transition: 0.5s;
   }

   &:hover:after {
      width: 100%;
      height: 100%;
   }
`;

export const Hide = styled.div`
   overflow: hidden;
`;
