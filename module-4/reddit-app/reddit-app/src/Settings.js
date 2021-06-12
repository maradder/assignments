import React, { useEffect, useContext } from "react";
import Toggle from "./components/Toggler";
import Main from "./components/Main";
import SubredditUrlList from "./components/SubredditUrlList";
import ClearFavesButton from "./components/ClearFavesButton";
import SignOutButton from "./components/SignOutButton";
import SubscribeToNewSub from "./components/SubscribeToNewSub";
import { useLocation } from "react-router";
import { SubscriptionsContext } from "./context/Context";

const Settings = (props) => {
  const { setCurrentLocation } = useContext(SubscriptionsContext);
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
    return () => {
      console.log("got initial");
    };
  }, []);

  return (
    <Main>
      <Toggle toggleTheme={props.themetoggler} />
      <SubredditUrlList />
      <SubscribeToNewSub />
      <div
        style={{
          minHeight: "150px",
          maxHeight: "150px",
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      >
        <ClearFavesButton />
        <SignOutButton />
      </div>
    </Main>
  );
};

export default Settings;
