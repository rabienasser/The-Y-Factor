import React from "react";
import logo from "../../../imgs/logo.png";
import { useScroll } from "../../UseScroll";
import { scrollReveal } from "../../../animation";
import { StyledFooter, FooterLogo } from "./Footer.style";

const Footer = () => {
   const [element, controls] = useScroll();
   return (
      <StyledFooter
         variants={scrollReveal}
         initial="hidden"
         animate={controls}
         ref={element}
      >
         <div>
            <h2>Telephone</h2>
            <p>(440)-476-3812</p>
         </div>
         <FooterLogo>
            <div>
               <img src={logo} alt="TheYFactor" />
            </div>
         </FooterLogo>
         <div>
            <h2>Email</h2>
            <p>theyfactorllc@gmail.com</p>
         </div>
      </StyledFooter>
   );
};

export default Footer;
