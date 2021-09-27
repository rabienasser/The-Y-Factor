import React from "react";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import IntroAnim from "../../components/IntroAnim";
import BetterYou from "../../components/Home/BetterYou/BetterYou";
import WhatWeDo from "../../components/Home/WhatWeDo/WhatWeDo";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Mission from "../../components/Home/Mission/Mission";
import Contact from "../../components/Home/Contact/Contact";
import { pageAnimation } from "../../animation";

const Home = () => {
   return (
      <div>
         <IntroAnim />
         <AboutSection />
         <BetterYou />
         <WhatWeDo />
         <Testimonials />
         <Mission />
         <Contact />
      </div>
   );
};

export default Home;
