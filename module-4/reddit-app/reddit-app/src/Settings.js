import React, { useEffect, useContext } from "react";
import Toggle from "./components/Toggler";
import Main from "./components/Main";
import SubredditUrlList from "./components/SubredditUrlList";
import { ClearFavesButton, SignOutButton } from "./components/Buttons";
import SubscribeToNewSub from "./components/SubscribeToNewSub";
import { useLocation } from "react-router";
import { Context } from "./context/Context";

const Settings = (props) => {
  const { setCurrentLocation } = useContext(Context);
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
          boxSizing: "border-box",
          minHeight: "150px",
          maxHeight: "150px",
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          margin: "48px auto 65px auto",
          alignItems: "center",
          alignSelf: "flex-start",
        }}
      >
        <ClearFavesButton />
        <SignOutButton />
      </div>
    </Main>
  );
};

export default Settings;
