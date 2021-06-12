import React, { useEffect, useContext } from "react";
import Main from "./components/Main";
import PostCard from "./components/PostCard";
import { useLocation } from "react-router";
import { Context } from "./context/Context";

const Home = (props) => {
  const location = useLocation();
  const { posts, setCurrentLocation } = useContext(Context);

  useEffect(() => {
    setCurrentLocation(location.pathname);
    return () => {
      console.log("Home Location");
    };
  }, []);

  return (
    <Main>
      {posts.map((post) => {
        return <PostCard key={post.id} postdetails={post} />;
      })}
    </Main>
  );
};
export default Home;
