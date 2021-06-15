import React, { createContext, useState } from "react";
import otherRequester from "../user";

const Context = createContext();
const ContextProvider = (props) => {
  const [subredditDisplayNames, setSubredditDisplayNames] = useState([]);
  const [posts, setPosts] = useState([]);
  const [savedContent, setSavedContent] = useState([]);
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);
  const [subscribedSubreddits, setSubscribedSubreddits] = useState([
    "subscribedSubreddits",
  ]);
  const [currentLocation, setCurrentLocation] = useState("");
  const [selected, setSelected] = useState("popular");

  const getSaved = () =>
    otherRequester.getMe().getSavedContent().then(console.log);

  const getSubscriptions = () =>
    otherRequester
      .getSubscriptions()
      .then((Listing) => setSubscribedSubreddits([...Listing]));

  const getHotFromSub = () =>
    otherRequester
      .getSubreddit(selected)
      .getHot()
      .then((Listing) => setPosts([...Listing]));

  const getSavedContent = () => {
    otherRequester
      .getMe()
      .getSavedContent()
      .then((Listing) => setSavedContent([...Listing]));
  };

  return (
    <Context.Provider
      value={{
        getHotFromSub,
        getSavedContent,
        getSaved,
        getSubscriptions,
        savedContent,
        subredditDisplayNames,
        setSubredditDisplayNames,
        selected,
        setSelected,
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
