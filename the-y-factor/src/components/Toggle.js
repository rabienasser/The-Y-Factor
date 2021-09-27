import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Toggle({ children, title }) {
   const [toggle, setToggle] = useState(false);
   return (
      <Section layout onClick={() => setToggle(!toggle)}>
         <Title layout>{title}</Title>
         {toggle ? children : ""}
      </Section>
   );
}

const Section = styled(motion.div)`
   border-bottom: 3px solid var(--dark-grey);
   margin: 3rem 0;

   p {
      margin-bottom: 1rem;
   }
`;

const Title = styled(motion.h2)`
   cursor: pointer;
   margin-bottom: 2rem;
   transition: all 0.5s ease;

   &:hover {
      color: var(--third-color);
      font-size: 1.7rem;
   }
`;

export default Toggle;
