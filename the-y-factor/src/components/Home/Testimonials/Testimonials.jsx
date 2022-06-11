import React from "react";
import { useScroll } from "../../UseScroll";
import { testAnim, testBox } from "../../../animation";
import { Container, Boxes, Box } from "./Testimonials.style";

const Testimonials = () => {
   const [element, controls] = useScroll();
   return (
      <Container id="testimonials">
         <h2>Clients on Their Journeys</h2>
         <Boxes
            variants={testAnim}
            initial="hidden"
            animate={controls}
            ref={element}
         >
            <Box variants={testBox}>
               <p>
                  "Jeff is a great trainer. He motivates, encourages and
                  corrects noticeable results. I can’t say enough about how my
                  quality of life, physical condition and overall strength have
                  improved since I began working with Jeff. His workouts are
                  varied and designed to meet my goals. I only wish we had met
                  20 years ago"
               </p>
               <h3>Howard F.</h3>
            </Box>
            <Box variants={testBox}>
               <p>
                  "I have trained with Jeff for over 5 years an have been
                  impressed with his ability to individualize my workout to meet
                  my goals and adapt it to changes such as recovery to illness
                  or injury. His workout plan is flexible and it covers major
                  areas from core strength and flexibility to balance and
                  stability. I highly recommend him."
               </p>
               <h3>Dr. B-G</h3>
            </Box>
            <Box variants={testBox}>
               <p>
                  "Jeff isn’t simply a personal trainer. He is a coach and a
                  mentor and a teacher who believes in his clients and is there
                  for them beyond the training session hour. He offers a
                  personalized approach to each and every client and he invests
                  his time, energy and expertise in creating a workout that
                  pushes the client while being enjoyable all at the same time."
               </p>
               <h3>Hildee W.</h3>
            </Box>
            <Box variants={testBox}>
               <p>
                  "Jeff is amazing. He provided a detailed plan that made
                  training for a marathon feel easy and attainable. The
                  combination of variety of runs, strength and mobility kept the
                  process challenging and focused, while possible to fit into a
                  busy schedule."
               </p>
               <h3>Jess H.</h3>
            </Box>
            <Box variants={testBox}>
               <p>
                  "Jeff is very knowledgeable, personable and professional
                  trainer. He really knows how to motivate me during my training
                  sessions to push myself to achieve the best outcome. Under
                  Jeff’s tutelage, in 6 months I have gone from a 260lbs
                  sedentary person to a 195lb active person. Through Jeff’s
                  coaching I have substantially modified my eating habits and
                  now exercise on a regular basis. I look better and I feel
                  better. I am looking forward to working with Jeff as my health
                  coach as I continue on my fitness journey."
               </p>
               <h3>Dr. Tony Y.</h3>
            </Box>
         </Boxes>
      </Container>
   );
};

export default Testimonials;
