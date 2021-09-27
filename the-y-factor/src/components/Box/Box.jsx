import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledBox } from "./Box.style";

const Box = (props) => {
   return (
      <StyledBox>
         <FontAwesomeIcon icon={props.icon} className="icon" />
         <h4>{props.title}</h4>
         <p>{props.children}</p>
      </StyledBox>
   );
};

export default Box;
