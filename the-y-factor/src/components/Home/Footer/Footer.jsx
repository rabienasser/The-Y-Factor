import React from "react";
import logo from "../../../imgs/logo.png";
import { useLocation } from "react-router-dom";
import { useScroll } from "../../UseScroll";
import { scrollReveal } from "../../../animation";
import { StyledFooter, FooterLogo } from "./Footer.style";

const Footer = () => {
   const { pathname } = useLocation();
   const [element, controls] = useScroll();
   return (
      <StyledFooter
         variants={pathname === "/" && scrollReveal}
         initial="hidden"
         animate={controls}
         ref={element}
      >
         <div>
            <h2>
               *FREE* <br /> Consultation
            </h2>
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
