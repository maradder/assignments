import React, { useContext } from "react";
import { SubscriptionsContext } from "../context/Context";
import {
  StyledHeader,
  UlHeader,
  LiHeader,
  Container,
} from "./StyledComponents";

const Header = (props) => {
  const { currentLocation } = useContext(SubscriptionsContext);

  const locationName = () => {
    return currentLocation === "/"
      ? "HOME"
      : currentLocation === "/favorites"
      ? "FAVORITES"
      : currentLocation === "/settings"
      ? "SETTINGS"
      : "error";
  };

  return (
    <StyledHeader>
      <UlHeader>
        <Container>
          <LiHeader to={props.path1}>
            <i className="fas fa-cogs"></i>
          </LiHeader>
        </Container>
        <Container>
          <h1>{locationName()}</h1>
        </Container>
        <Container>
          <LiHeader to={props.path2} onClick={props.action}>
            <i className="fas fa-star"></i>
          </LiHeader>
          <LiHeader to={props.path3}>
            <i className="fas fa-home"></i>
          </LiHeader>
        </Container>
      </UlHeader>
      {props.children}
    </StyledHeader>
  );
};

export default Header;
