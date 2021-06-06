import React from "react";
import { StyledHeader } from "./StyledComponents";

const Header = (props) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
