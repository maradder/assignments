import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonOne, ButtonTwo } from "./Buttons";
import { Context } from "../context/Context";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0px;
  height: 55px;
  width: 100vw;
  transition: all 0.6 linear;
  background-color: ${({ theme }) => theme.secondary};
`;

const Footer = (props) => {
  const { currentLocation } = useContext(Context);

  const FooterButton = () => {
    return currentLocation === "/"
      ? ButtonOne()
      : currentLocation === "/favorites"
      ? ButtonOne()
      : currentLocation === "/settings"
      ? ButtonTwo()
      : "error";
  };

  return <StyledFooter>{FooterButton()}</StyledFooter>;
};

export default Footer;
