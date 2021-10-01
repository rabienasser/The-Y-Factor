import React from "react";
import { useScroll } from "../../UseScroll";
import { testAnim, testBox } from "../../../animation";
import { Container, Boxes, Box } from "./Testimonials.style";

const Testimonials = () => {
   const [element, controls] = useScroll();
   return (
      <Container>
         <h2>What My Amazing Clients Say</h2>
         <Boxes
            variants={testAnim}
            initial="hidden"
            animate={controls}
            ref={element}
         >
            <Box variants={testBox}>
               <p>
                  "Jeff is great, always there with help and advise which you
                  can trust to talk to. I can now train at home saving time
                  whilst being more efficient."
               </p>
               <h3>Lucy Eagles</h3>
            </Box>
            <Box variants={testBox}>
               <p>
                  "Jeff's online coaching has helped me feel more comfortable
                  within myself and given me the confidence to eat better foods
                  and train with my goals in mind."
               </p>
               <h3>Alison Salkeld-Brown</h3>
            </Box>
            <Box variants={testBox}>
               <p>
                  "During my plan with Jeff, I exceeded even my own expectations
                  by losing 13lb and dropping 2 dress sizes from a size 12 to a
                  size 8!"
               </p>
               <h3>Beth Price</h3>
            </Box>
         </Boxes>
      </Container>
   );
};

export default Testimonials;
