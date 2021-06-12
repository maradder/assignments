import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { SubscriptionsContext } from "../context/Context";
import { LiHeader, UlHeader } from "./StyledComponents";
import { Link } from "react-router-dom";

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

const FooterButtonStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0",
  alignItems: "center",
  justifyContent: "center",
};
const handleFooterButtonClick = () => window.scrollTo(window.top);

const Footer = (props) => {
  const { currentLocation } = useContext(SubscriptionsContext);

  const buttonOne = () => {
    return (
      <Button style={FooterButtonStyle} onClick={handleFooterButtonClick}>
        <UlHeader>Click to go back to the top</UlHeader>
      </Button>
    );
  };
  const buttonTwo = () => {
    return (
      <Link to={"/"} style={FooterButtonStyle}>
        <UlHeader>Click to go back home</UlHeader>
      </Link>
    );
  };

  const FooterButton = () => {
    return currentLocation === "/"
      ? buttonOne()
      : currentLocation === "/favorites"
      ? buttonOne()
      : currentLocation === "/settings"
      ? buttonTwo()
      : "error";
  };

  return <StyledFooter>{FooterButton()}</StyledFooter>;
};

export default Footer;
