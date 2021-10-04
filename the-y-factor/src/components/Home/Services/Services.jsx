import React from "react";
import Toggle from "../../Toggle";
import { useScroll } from "../../UseScroll";
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
                  My coaching options have been designed from the ground up to
                  put you and your goals first. From one-on-one training in my
                  private studio, to the various online classes and training
                  sessions I'll host, to customized nutrition packages-
                  everything I offer has been battle-tested for a decade in the
                  field to ensure the results you achieve are not only
                  impressive in the short term- but also sustainable for life
               </p>
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
                  <Toggle title="1-on-1 Personal Training">
                     <p>
                        1-on-1 personal training is the ultimate investment in
                        your health. You'll be working directly with me in our
                        private studio, following a strategic and customized
                        plan to ensure you hit your goals in record time.
                        Whether you want to slim down, add muscle or anything in
                        between, our personal training package, suited
                        specifically to your needs, will get you there in a fun
                        and sustainable way
                     </p>
                  </Toggle>
                  <Toggle title="Nutrition Coaching">
                     <p>
                        I'll teach you how to take control of your health and
                        weight through 1-on-1 nutrition coaching where we'll
                        build the perfect plan suited for your needs. As a
                        qualified nutritionist, my aim is to build a sustainable
                        approach together, so you'll not only hit your physique
                        goals, but be able to stay there without rigid diets or
                        unrealistic restrictions
                     </p>
                  </Toggle>
                  <Toggle title="Online Training">
                     <p>
                        Not able to work with me in person? No problem. My
                        online program is designed to take the guesswork out of
                        getting in the best shape of your life. You'll be
                        working 1-2-1 with me through *INSERT HERE*- where
                        you'll get workouts designed specifically for you,
                        progress monitored, regular check-ins and nutrition
                        support for unrivalled results, anywhere in the world
                     </p>
                  </Toggle>
               </AnimateSharedLayout>
            </div>
         </Container>
      </>
   );
};

export default Services;
