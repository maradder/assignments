import React, { useEffect, useContext } from "react";
import Form from "./Form";
import Header from "./Header";
import UglyThingsList from "./UglyThingsList";
import { UglyContext } from "./context/UglyThingsContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes";
import { useDarkMode } from "./Components/useDarkMode";
import Toggle from "./Components/Toggler";

const App = () => {
  const { getUglyThings } = useContext(UglyContext);
  // const [theme, setTheme] = useState([])

  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    getUglyThings();
    return () => {
      console.log("success");
    };
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Header>
          <Toggle theme={theme} toggleTheme={setTheme} />
        </Header>
        <Form />
        <UglyThingsList />
      </>
    </ThemeProvider>
  );
};

export default App;
