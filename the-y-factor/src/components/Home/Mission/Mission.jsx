import React from "react";
import { useScroll } from "../../UseScroll";
import { missionFade } from "../../../animation";
import { Container, Statement } from "./Mission.style";

const Mission = () => {
   const [element, controls] = useScroll();
   return (
      <Container id="mission">
         <Statement
            variants={missionFade}
            animate={controls}
            initial="hidden"
            ref={element}
         >
            <h2>Mission Statement</h2>
            <p>
               To safely and effectively guide individuals on their health and
               fitness journeys to find their Y.
            </p>
         </Statement>
      </Container>
   );
};

export default Mission;
