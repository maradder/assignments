import React, { useContext } from "react";
import { Context } from "../context/Context";
import {
  StyledHeader,
  UlHeader,
  LiHeader,
  StyledHeaderFixed,
  UlHeaderFixed,
  LiHeaderFixed,
} from "./StyledComponents";

const Header = (props) => {
  const { currentLocation, windowSize } = useContext(Context);

  const locationName = () => {
    return currentLocation === "/"
      ? "HOME"
      : currentLocation === "/favorites"
      ? "FAVORITES"
      : currentLocation === "/settings"
      ? "SETTINGS"
      : "error";
  };

  const narrowHeader = (
    <StyledHeader>
      <h1>{locationName()}</h1>
      <UlHeader>
        <LiHeader to={props.path1}>
          <i className="fas fa-cogs"></i>
        </LiHeader>
        <LiHeader to={props.path2} onClick={props.action}>
          <i className="fas fa-star"></i>
        </LiHeader>
        <LiHeader to={props.path3}>
          <i className="fas fa-home"></i>
        </LiHeader>
      </UlHeader>
      {props.children}
    </StyledHeader>
  );

  const fixedHeader = (
    <StyledHeaderFixed>
      <UlHeaderFixed>
        <h1>{locationName()}</h1>
        <LiHeaderFixed to={props.path1}>
          <i className="fas fa-cogs"></i>
        </LiHeaderFixed>
        <LiHeaderFixed to={props.path2} onClick={props.action}>
          <i className="fas fa-star"></i>
        </LiHeaderFixed>
        <LiHeaderFixed to={props.path3}>
          <i className="fas fa-home"></i>
        </LiHeaderFixed>
      </UlHeaderFixed>
      {props.children}
    </StyledHeaderFixed>
  );

  return windowSize < 1000 ? narrowHeader : fixedHeader;
};

export default Header;
