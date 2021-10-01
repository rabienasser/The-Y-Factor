import React from "react";
import logo from "../../imgs/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { fade } from "../../animation";
import { StyledNav } from "./Navbar.style";

const Navbar = () => {
   return (
      <StyledNav variants={fade} initial="hidden" animate="show">
         <img className="logo" src={logo} alt="" />
         <ul>
            <li>
               <Link to="services" smooth={true} offset={-70} duration={1200}>
                  Services
               </Link>
            </li>
            <li>
               <Link to="mission" smooth={true} offset={-70} duration={1500}>
                  Mission
               </Link>
            </li>
            <li>
               <Link to="contact" smooth={true} offset={-70} duration={1500}>
                  Contact
               </Link>
            </li>
         </ul>
      </StyledNav>
   );
};

export default Navbar;
