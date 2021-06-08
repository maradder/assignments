import React, { useState } from "react";
import { useDarkMode } from "./components/useDarkMode";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Toggle from "./components/Toggler";
import { lightTheme, darkTheme } from "./components/Themes";
const snoowrap = require("snoowrap");

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const ua = navigator.userAgent;
  const r = new snoowrap({
    userAgent: ua,
    clientId: "h8ghNPB7HH_V5g",
    clientSecret: "Ck4uZhwH8BqyOB4a3tbxE3TNTcrbwQ",
    refreshToken: "Tp55ulxuWGE8f-BLCg9_yBZGKaAidg",
  });
  const handleClick = () => console.log("click");

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
          <button onClick={handleClick}>print ua</button>
          <div>
            {r
              .getHot()
              .map((post) => post.title)
              .then(console.log)}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
