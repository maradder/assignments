import React, { useEffect, useContext } from "react";
import Main from "./components/Main";
import PostCard from "./components/PostCard";
import { useLocation } from "react-router";
import { FeedContext } from "./context/Context";
import { SubscriptionsContext } from "./context/Context";

const Favorites = (props) => {
  const { setCurrentLocation } = useContext(SubscriptionsContext);
  const location = useLocation();
  const { savedContent } = useContext(FeedContext);

  useEffect(() => {
    setCurrentLocation(location.pathname);
    return () => {
      console.log("Favorites Location");
    };
  }, []);

  return (
    <Main>
      {savedContent.map((post) => {
        return <PostCard key={post.id} postdetails={post} />;
      })}
    </Main>
  );
};
export default Favorites;
