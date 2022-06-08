import React from "react";
import logo from "../../imgs/logo.png";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { fade } from "../../animation";
import { StyledNav } from "./Navbar.style";

const Navbar = () => {
   const { pathname } = useLocation();

   return (
      <StyledNav
         variants={pathname === "/" && fade}
         initial="hidden"
         animate="show"
      >
         <RouterLink to="/">
            <img className="logo" src={logo} alt="The Y Factor" />
         </RouterLink>

         {pathname === "/" && (
            <ul>
               <li>
                  <Link
                     to="services"
                     smooth={true}
                     offset={-70}
                     duration={1200}
                  >
                     Services
                  </Link>
               </li>
               <li>
                  <Link
                     to="testimonials"
                     smooth={true}
                     offset={-70}
                     duration={1500}
                  >
                     Testimonials
                  </Link>
               </li>
               <li>
                  <Link to="contact" smooth={true} offset={-70} duration={1500}>
                     Contact
                  </Link>
               </li>
            </ul>
         )}
      </StyledNav>
   );
};

export default Navbar;
