import React from "react";
import Box from "../../Box/Box";
import { useScroll } from "../../UseScroll";
import { scrollReveal } from "../../../animation";
import {
   faRunning,
   faDumbbell,
   faCarrot,
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
               <h1>Be a better you</h1>
               <h2>Personal training in Cleveland</h2>
               <p>
                  Whether you want to lose weight, tone up, gain lean muscle or
                  you are happy as you are but would like a healthier lifestyle,
                  The Y Factor is the right choice for you. At the Y Factor,
                  ​our training programmes are designed not only to help you
                  learn correct exercise form, but also to help you improve your
                  strength, lose weight if needed and create a quality of life
                  you can enjoy.
               </p>
            </Description>
         </Container>
         <Boxes
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
         >
            <Box title="Athletic Figure" icon={faRunning}>
               <p>
                  Whether it's through 1-on-1 personal training or virtual
                  meetings, our purpose is to get you on track to achieving the
                  body you've always dreamed of.
               </p>
            </Box>
            <Box title="Confidence Boost" icon={faDumbbell}>
               <p>
                  We don't only focus on the image in the mirror, but also how
                  you feel in your skin. Achieving milestones with your body
                  will transfer into your daily life as increased confidence.
               </p>
            </Box>
            <Box title="Quality Of Life" icon={faCarrot}>
               <p>
                  We seek not only to improve your body through the perfect
                  exercise plan for you, but to also incorporate the right
                  nutrition to get you feeling your absolute best.
               </p>
            </Box>
         </Boxes>
      </>
   );
};

export default BetterYou;
