import React from "react";
import Box from "../../Box/Box";
import {
   faRunning,
   faDumbbell,
   faCarrot,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Description, Boxes } from "./BetterYou.style";

const BetterYou = () => {
   return (
      <>
         <Container>
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
               {/* <p>It is of utmost importance that we ensure you get a return on your investment and achieve the results that we gaurantee to deliver. Everyone wants to feel comfortable in their own skin, therefore, even if you are working a busy schedule, finding it hard to meet your fitness goals or would like to get fit, RCotterill PT gives you the flexibility to reach your full potential with a variety of different online and individual personal training plans.</p> */}
            </Description>
         </Container>
         <Boxes>
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
