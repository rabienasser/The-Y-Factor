import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Toggle({ children, title }) {
   const [toggle, setToggle] = useState(true);
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
   transition: all 0.3s ease;
   padding: 0 0.75rem;
   color: var(--third-color);
   font-weight: bold;
`;

export default Toggle;
