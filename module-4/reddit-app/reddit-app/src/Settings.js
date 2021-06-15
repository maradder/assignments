import React, { useEffect, useContext } from "react";
import Toggle from "./components/Toggler";
import Main from "./components/Main";
import SubredditUrlList from "./components/SubredditUrlList";
import SubscribeToNewSub from "./components/SubscribeToNewSub";
import { useLocation } from "react-router";
import { Context } from "./context/Context";

const Settings = (props) => {
  const { setCurrentLocation } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
    return () => {
      console.log("Settings rendered");
    };
  }, []);

  return (
    <Main>
      <Toggle toggleTheme={props.themetoggler} />
      <SubredditUrlList />
      <SubscribeToNewSub refresh={props.refresh} />
    </Main>
  );
};

export default Settings;
