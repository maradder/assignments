import React, { useState } from "react";
import { func } from "prop-types";
import styled from 'styled-components'
// import { TogglerDiv, SmallButton } from "./StyledComponents";
import { lightTheme, darkTheme } from "./Themes";

const Toggle = ( { props, theme, toggleTheme } ) => {
  const [toggleSliderState, setToggleSliderState] = useState( false )

  const Slider = styled.div`
			display: flex;
			flex-direction: row;
			justify-content: ${ toggleSliderState ? "flex-end" : "flex-start" };
			height: 36px;
			width: 96px;
			background-color: ${ ( props ) => props.theme.tertiary };
			border-radius: 36px;
			margin: 16px 32px;
			padding: 2px 2px;
			cursor: pointer;
			transition-duration: 300ms;

			@media screen and (max-width: 500px) {
				width: 36px;
				padding: auto;
				justify-content: center;
				align-content: center;
				margin: 0;
			}
		`
  const handleToggle = () => setToggleSliderState( !toggleSliderState )

  return (
    <fragment>
      <input
        type="checkbox"
        style={{ display: "none" }}
        checked={toggleSliderState}
        onChange={() => console.log( "changed" )}
      />
      <Slider
        toggleState={toggleSliderState}
        onClick={handleToggle}
        className="slideToggleBody"
        theme={props.themeToggler}
      >
        <div
          className="slideToggleSwitch"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "32px",
            width: "32px",
            borderRadius: "50%",
            backgroundColor: toggleSliderState
              ? darkTheme.buttonText
              : lightTheme.buttonText,
          }}
        >
          {toggleSliderState ? (
            <i
              style={{ fontSize: "24px", color: "azure" }}
              class="far fa-moon"
            ></i>
          ) : (
            <i
              style={{ fontSize: "24px", color: "azure" }}
              class="far fa-sun"
            ></i>
          )}
        </div>
      </Slider>
    </fragment>
  );
};

const useToggle = () => {
  return ( v ) => !v;
};

Toggle.propTypes = {
  // theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

export { useToggle };
