import React from "react";
import logo from "../../imgs/logo.png";
import { navFade } from "../../animation";
import { StyledNav } from "./Navbar.style";

const Navbar = () => {
   return (
      <StyledNav variants={navFade} initial="hidden" animate="show">
         <img className="logo" src={logo} alt="" />
         <ul>
            <li>Services</li>
            <li>Mission</li>
            <li>Contact</li>
         </ul>
      </StyledNav>
   );
};

export default Navbar;
