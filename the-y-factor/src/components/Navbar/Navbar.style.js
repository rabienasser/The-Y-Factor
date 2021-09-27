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
   a {
      color: var(--dark-grey);
      text-decoration: none;
   }
   ul {
      display: flex;
   }
   li {
      list-style: none;
      padding-left: 10rem;
      position: relative;
      color: var(--dark-grey);
   }
   .logo {
      height: 4rem;
      width: 9.5rem;
   }
   .list-item {
      font-size: 1.3rem;
   }
`;
