import React from "react";
import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import { navFade } from "../../animation";
import { StyledNav } from "./Navbar.style";

const Navbar = () => {
   return (
      <StyledNav variants={navFade} initial="hidden" animate="show">
         <img className="logo" src={logo} alt="" />
         <ul>
            <li>
               <Link className="list-item" to="/">
                  Home
               </Link>
            </li>
            <li>
               <Link className="list-item" to="/mission">
                  Mission
               </Link>
            </li>
            <li>
               <Link className="list-item" to="/contact">
                  Contact
               </Link>
            </li>
         </ul>
      </StyledNav>
   );
};

export default Navbar;
