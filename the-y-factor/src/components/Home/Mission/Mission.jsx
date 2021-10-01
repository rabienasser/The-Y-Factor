import React from "react";
import person from "../../../imgs/person.jpg";
import { useScroll } from "../../UseScroll";
import { missionPhoto, missionFade } from "../../../animation";
import {
   Container,
   MissionContent,
   Image,
   Statement,
   StyledImage,
} from "./Mission.style";

const Mission = () => {
   const [element, controls] = useScroll();
   return (
      <Container id="mission">
         <MissionContent>
            <Image>
               <StyledImage
                  src={person}
                  alt="Jeff"
                  variants={missionPhoto}
                  animate={controls}
                  initial="hidden"
                  ref={element}
               />
            </Image>
            <Statement
               variants={missionFade}
               animate={controls}
               initial="hidden"
               ref={element}
            >
               <h2>My Mission</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae laudantium blanditiis, excepturi quod nostrum
                  aspernatur, est ullam possimus itaque laboriosam nisi aut
                  quisquam doloribus eius soluta! Nobis reiciendis voluptates
                  velit ut, eaque sapiente aliquid asperiores consequuntur
                  quaerat distinctio rem, nisi ex voluptate minima repudiandae
                  obcaecati corrupti deserunt quos explicabo omnis officia illum
                  nulla ab. Deleniti, consectetur dolorum? Omnis, sunt
                  consectetur.
               </p>
            </Statement>
         </MissionContent>
      </Container>
   );
};

export default Mission;
