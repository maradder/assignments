import React, { useEffect, useState, useContext } from "react";
import Main from "./components/Main";
import { SubLinksContainer, SubLink } from "./components/StyledComponents";
import PostCard from "./components/PostCard";
import SubredditUrl from "./components/SubredditUrl";
import { useLocation } from "react-router";
import { Context } from "./context/Context";

const Home = (props) => {
  const location = useLocation();
  const {
    posts,
    setCurrentLocation,
    getSubscriptions,
    getHotFromSub,
    subscribedSubreddits,
    setSubscribedSubreddits,
    selected,
    setSelected,
  } = useContext(Context);

  const handleClick = (e) => {
    const target = e.target.getAttribute("data-info");
    const selectedSub = target;
    setSelected(selectedSub);
    console.log(selected);
  };

  useEffect(() => {
    setCurrentLocation(location.pathname);
    getSubscriptions();
    getHotFromSub();
    return () => {
      console.log("Home Location");
    };
  }, [selected]);

  return (
    <Main>
      <SubLinksContainer>
        <SubLink data-info={"popular"} onClick={handleClick}>
          r/popular
        </SubLink>
        {subscribedSubreddits.map((subreddit) => {
          return (
            <SubLink data-info={subreddit.display_name} onClick={handleClick}>
              {subreddit.display_name_prefixed}
            </SubLink>
          );
        })}
      </SubLinksContainer>
      {posts.map((post) => {
        return post.over_18 === false ? (
          <PostCard key={post.id} postdetails={post} />
        ) : (
          console.log("NSFW Not Rendered")
        );
      })}
    </Main>
  );
};
export default Home;
