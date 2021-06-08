import React, { useState, useEffect} from "react";
import { useDarkMode } from "./components/useDarkMode";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Toggle from "./components/Toggler";
import { lightTheme, darkTheme } from "./components/Themes";
import {secrets} from './.secrets.js'
import { Submission, Listing } from "snoowrap";
const snoowrap = require("snoowrap");
let initial

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [sport, setSports] = useState(['hello'])
  const ua = navigator.userAgent;
  
  
  const otherRequester = new snoowrap({
    userAgent: ua,
    clientId: secrets.clientId,
    clientSecret: secrets.clientSecret,
    username: secrets.username,
    password: secrets.password
  });
  
  // const getInitial = () => otherRequester.getSubreddit('sports').getHot().then(Listing => Listing.map(Submission => (<div>{Submission.media_embed}</div>)))
  const getInitial = () => otherRequester.getSubreddit('sports').getHot().then(Listing => Listing.map(Submission => setSports(prevState => [...prevState, Submission])))

  const handleClick = () => getInitial()

  // useEffect(() => {
    // const initial = otherRequester.getSubreddit('sports').getHot().then(Listing => Listing.map(Submission => (<div>{Submission.media_embed}</div>)))}, [])
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
          {/* <button onClick={handleSecondClick}>show ua</button> */}
          {initial}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
