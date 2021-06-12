import React, { useContext, useState, useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Home from "./Home";
import Favorites from "./Favorites";
import Settings from "./Settings";
import Header from "./components/Header";
import HeaderFixed from "./components/HeaderFixed";
import { SubscriptionsContext, FeedContext } from "./context/Context";
import { lightTheme, darkTheme } from "./components/Themes";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import otherRequester from "./user";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const {
    getHotFromSub,
    getSavedContent,
    windowSize,
    setWindowSize,
  } = useContext(FeedContext);
  const { setSubscribedSubreddits, currentLocation } = useContext(
    SubscriptionsContext
  );

  const getSaved = () =>
    otherRequester.getMe().getSavedContent().then(console.log);

  const getSubscriptions = () =>
    otherRequester
      .getSubscriptions()
      .then((Listing) => setSubscribedSubreddits([...Listing]));

  window.onresize = () => {
    setWindowSize(window.screen.availWidth);
  };

  useEffect(() => {
    getHotFromSub("pics");
    getSavedContent();
    getSubscriptions();
    return () => {
      console.log("got initial");
    };
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles windowsize={windowSize} />
      <Router>
        {windowSize < 850 ? (
          <Header
            path1="/settings"
            path2="/favorites"
            action2={getSaved}
            path3="/"
            currentlocation={currentLocation}
          />
        ) : (
          <HeaderFixed
            path1="/settings"
            path2="/favorites"
            action2={getSaved}
            path3="/"
            currentlocation={currentLocation}
          />
        )}
        <Switch>
          <Route path="/settings">
            <Settings themetoggler={themeToggler} />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
