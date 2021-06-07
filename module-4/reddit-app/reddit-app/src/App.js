import React, { useState } from "react";
import { useDarkMode } from "./components/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Toggle from "./components/Toggler";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const handleChange = () => console.log("jello");
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          {/* <Header> 
            <Link path="/settings"/>
            <h1>{currentView.title}</h1>
            <Link path="/favorites"/>
            <Link path="/"/>
          </Header>
          <Route path="/settings">
            <main>
              <SettingsContainer>
                <h3>Unsubscribe from subreddits</h3>
                  {list of subreddits (click to unsubscribe)}
              </SettingsContainer>
              <Button onClick={clearFavorites}>Clear Favorites</Button>
              <Button onClick={signOut}>Sign Out of Reddit</Button>
              <SettingsContainer>
          <input
            onKeyPress={(e) =>
              e.key === "Enter" ? console.log(e.target.value) : handleChange()
            }
          />              
          </SettingsContainer>
            </main>
          </Route>
          <Route path="/favorites">
            <main>
             <FavoritesList/>
            </main>
          </Route>
          <Route path="/">
            <main>
              <MainFeedList/>
            </main>
          </Route>
          <Footer>
            <Button onClick={scroll to top}>Back to Top</Button>
          </Footer> */}
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
