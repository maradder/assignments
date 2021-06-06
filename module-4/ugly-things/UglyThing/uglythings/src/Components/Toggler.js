import React from "react";
import { func, string } from "prop-types";
import { Button } from "../StyledComponents";

const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
