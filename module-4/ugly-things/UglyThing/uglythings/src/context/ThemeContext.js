import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState({
    themeName: "Dark",
    theme: {
      background: "#1c1a1a",
      card: "#000000",
      primaryText: "#c4c4c4",
      alternateText: "",
      accent: "#c4c4c4",
      cta: "#9d0000",
      button: "	#303030",
    },
  });
  const handleThemeChange = () => {
    setCurrentTheme(
      currentTheme.themeName === "Dark"
        ? {
            themeName: "Light",
            theme: {
              background: "#d6d5c9",
              card: "#b9baa3",
              primaryText: "#0a100d",
              alternateText: "#b9baa3",
              accent: "#a22c29",
              cta: "#902923",
              button: "#0a100d",
            },
          }
        : {
            themeName: "Dark",
            theme: {
              background: "#1c1a1a",
              card: "#000000",
              primaryText: "#c4c4c4",
              alternateText: "pink",
              accent: "#c4c4c4",
              cta: "#9d0000",
              button: "	#303030",
            },
          }
    );
  };

  return (
    <ThemeContext.Provider value={[currentTheme, handleThemeChange]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
