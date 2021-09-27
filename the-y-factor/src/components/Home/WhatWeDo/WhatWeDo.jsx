import React from "react";
import Toggle from "../../Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { Container, Description } from "./WhatWeDo.style";

const WhatWeDo = () => {
   return (
      <>
         <Description>
            <div>
               <h2>What We Do</h2>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam pariatur ipsum perferendis consequuntur nihil, animi
                  reprehenderit officiis? Corrupti totam aperiam natus? Pariatur
                  veniam delectus quisquam reprehenderit illo consequuntur nemo
                  facilis adipisci modi impedit. Officiis cum quae, voluptatem
                  nobis, dolor in quaerat aliquam molestiae, velit harum commodi
                  totam rerum praesentium eveniet?
               </p>
            </div>
         </Description>
         <Container>
            <div>
               <AnimateSharedLayout>
                  <Toggle title="1-on-1 Personal Training">
                     <p>
                        1-on-1 personal training is the ultimate investment in
                        your health. You'll be working directly with me in our
                        private studio, following a bespoke plan to ensure you
                        hit your goals in record time. Whether you want to slim
                        down, add muscle or anything in between, our personal
                        training package, customized specifically to your needs,
                        will get you there in a fun and sustainable way
                     </p>
                  </Toggle>
                  <Toggle title="Nutrition Coaching">
                     <p>
                        I'll teach you how to take control of your health and
                        weight through 1-on-1 nutrition coaching where we'll
                        build a the perfect plan suited for your needs. You'll
                        working alongside a qualified nutritionist to build a
                        sustainable approach together, so you'll not only hit
                        your physique goals, but be able to stay there without
                        rigid diets or unrealistic restrictions
                     </p>
                  </Toggle>
                  <Toggle title="Online Training">
                     <p>
                        The Armoury's Online Coaching Packages have been created
                        to take the guesswork out of getting in the best shape
                        of your life. You'll be working 1-2-1 with your Personal
                        Trainer through our Armoury Coaching app- where you'll
                        get workouts designed specifically for you, progress
                        monitored, regular check-ins and nutrition support for
                        unrivalled results, anywhere in the world
                     </p>
                  </Toggle>
               </AnimateSharedLayout>
            </div>
         </Container>
      </>
   );
};

export default WhatWeDo;
