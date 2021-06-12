import React, { useContext } from "react";
import { Context } from "../context/Context";
import {
  StyledHeaderFixed,
  UlHeaderFixed,
  LiHeaderFixed,
} from "./StyledComponents";

const HeaderFixed = (props) => {
  const { currentLocation } = useContext(Context);

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
    <StyledHeaderFixed>
      <UlHeaderFixed>
        <h1>{locationName()}</h1>
        <p>{window.scrollY}</p>
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
};

export default HeaderFixed;
