import React from "react";
import { func } from "prop-types";
import { Button } from "./Buttons";
import { TogglerDiv } from "./StyledComponents";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <TogglerDiv>
      <Button onClick={toggleTheme}>Toggle Day/Night Theme</Button>
    </TogglerDiv>
  );
};

const useToggle = () => {
  return (v) => !v;
};

Toggle.propTypes = {
  // theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

export { useToggle };
