import React from "react";
import Box from "../../Box/Box";
import { useScroll } from "../../UseScroll";
import { scrollReveal } from "../../../animation";
import {
   faRunning,
   faBrain,
   faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Description, Boxes } from "./BetterYou.style";

const BetterYou = () => {
   const [element, controls] = useScroll();
   return (
      <>
         <Container
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
         >
            <Description>
               <h1>Philosophy</h1>
               <h2>MIND/BODY/MOVE</h2>
               <p>
                  Enhancing an individual’s understanding of their bodies and
                  creating a heightened awareness of one’s movement patterns
                  leads to the overall goal...MAKING YOU HARDER TO BREAK! By
                  combining mental awareness and building full body strength +
                  endurance then mobilizing it through multiple movement
                  patterns on all planes of exercise this goal will be achieved.
               </p>
            </Description>
         </Container>
         <Boxes
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
         >
            <Box title="Mind" icon={faBrain}>
               <p>Mental Awareness/Focus</p>
            </Box>
            <Box title="Body" icon={faDumbbell}>
               <p>Full Body Strength/Endurance</p>
            </Box>
            <Box title="Move" icon={faRunning}>
               <p>
                  Mobility/Stabilization/Balance exercises will increase control
                  on all planes of motion
               </p>
            </Box>
         </Boxes>
      </>
   );
};

export default BetterYou;
