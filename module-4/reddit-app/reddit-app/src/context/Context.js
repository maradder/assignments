import React, { createContext, useEffect, useState } from "react";
import otherRequester from "../user";

const FeedContext = createContext();
const FeedContextProvider = (props) => {
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

  return (
    <FeedContext.Provider
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
      }}
    >
      {props.children}
    </FeedContext.Provider>
  );
};

const SubscriptionsContext = createContext();
const SubscriptionsContextProvider = (props) => {
  const [subscribedSubreddits, setSubscribedSubreddits] = useState([
    "subscribedSubreddits",
  ]);
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <SubscriptionsContext.Provider
      value={{
        subscribedSubreddits,
        setSubscribedSubreddits,
        currentLocation,
        setCurrentLocation,
      }}
    >
      {props.children}
    </SubscriptionsContext.Provider>
  );
};

export {
  SubscriptionsContextProvider,
  SubscriptionsContext,
  FeedContext,
  FeedContextProvider,
};
