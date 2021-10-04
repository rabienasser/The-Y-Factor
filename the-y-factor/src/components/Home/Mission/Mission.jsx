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
                  My commitment and life purpose is to provide empowering
                  knowledge and training guidance through a personalised health
                  and fitness service that unlocks every individual’s true
                  potential. Regardless of your background and current state, we
                  will work to construct a holistic blueprint to take your
                  health to the next level. We will work in tandem to understand
                  what it is you want to achieve, why you want to achieve it,
                  and how we can get there in an efficient manner. Moreover, in
                  recognition of the importance of establishing an effective
                  nutritional routine from the very start, I work to empower you
                  to make correct nutrition choices in line with your
                  pre-determined goals. We will accomplish this by evaluating
                  your body composition, current eating habits and lifestyle
                  demands to provide guidance and an overview of your daily
                  calorie and macronutrient intake needs. Finally, I provide
                  every client with a customised, fully accessible exercise
                  program designed to deliver your desired results, whether that
                  be gaining strength, losing weight, achieving a higher degree
                  of mobility and flexibilty, or working through the effects of
                  a previous injury.
               </p>
            </Statement>
         </MissionContent>
      </Container>
   );
};

export default Mission;
