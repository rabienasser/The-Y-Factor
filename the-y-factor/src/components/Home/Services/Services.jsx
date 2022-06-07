import React from "react";
import Toggle from "../../Toggle";
import { Link } from "react-router-dom";
import { useScroll } from "../../UseScroll";
import { Button } from "../../../styles";
import { scrollReveal } from "../../../animation";
import { AnimateSharedLayout } from "framer-motion";
import { Container, Description } from "./Services.style";

const Services = () => {
   const [element, controls] = useScroll();

   return (
      <>
         <Description id="services">
            <div>
               <h2>What I Do</h2>
               <p>
                  With many people struggling to find the right exercise program
                  to complement their lifestyle, body and goals, it is
                  imperative to find the correct path. My commitment and life
                  purpose is to provide knowledge and training guidance that
                  unlocks every individuals true potential. Using my education
                  and vast experience in health and fitness I will diagnosis,
                  develop and implement an exercise program tailored to meet the
                  goals of every individual.
               </p>

               <Link to="/sample-workouts">
                  <Button>View Sample Workouts</Button>
               </Link>
            </div>
         </Description>
         <Container
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
         >
            <div>
               <AnimateSharedLayout>
                  <Toggle title="Specialties">
                     <p>
                        Overall Health - Golf Specific - Running Specific -
                        Athletes of all ages - Injury Specific - Post Injury -
                        Weight Loss
                     </p>
                  </Toggle>
                  <Toggle title="Professional Training">
                     <p>One on One In-Person and/or Virtual</p>
                  </Toggle>
                  <Toggle title="Health + Lifestyle Coaching">
                     <p>
                        Exercise planning/programming + Nutritional & Lifestyle
                        guidance
                     </p>
                  </Toggle>
               </AnimateSharedLayout>
            </div>
         </Container>
      </>
   );
};

export default Services;
