import React from "react";
import person from "../../../imgs/person.jpg";
import { Container, MissionContent, Image, Statement } from "./Mission.style";

const Mission = () => {
   return (
      <Container>
         <MissionContent>
            <Image>
               <img src={person} alt="Jeff" />
            </Image>
            <Statement>
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
