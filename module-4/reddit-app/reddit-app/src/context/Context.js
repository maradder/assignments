import React, { createContext, useState } from "react";
import otherRequester from "../user";

const Context = createContext();
const ContextProvider = (props) => {
  const [subredditDisplayNames, setSubredditDisplayNames] = useState([]);
  const [posts, setPosts] = useState([]);
  const [savedContent, setSavedContent] = useState([]);

  const getHotFromSub = (sub) =>
    otherRequester
      .getSubreddit(sub)
      .getHot()
      .then((Listing) => setPosts([...Listing]));

  const getSavedContent = () => {
    otherRequester
      .getMe()
      .getSavedContent()
      .then((Listing) => setSavedContent([...Listing]));
  };

  const [windowSize, setWindowSize] = useState(window.screen.availWidth);

  const [subscribedSubreddits, setSubscribedSubreddits] = useState([
    "subscribedSubreddits",
  ]);
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <Context.Provider
      value={{
        getHotFromSub,
        getSavedContent,
        savedContent,
        subredditDisplayNames,
        setSubredditDisplayNames,
        posts,
        setPosts,
        windowSize,
        setWindowSize,
        subscribedSubreddits,
        setSubscribedSubreddits,
        currentLocation,
        setCurrentLocation,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
