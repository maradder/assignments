import React, { useContext } from "react";
import SubredditUrl from "./SubredditUrl";
import { Context } from "../context/Context";
import otherRequester from "../user";

const SubredditUrlList = () => {
  const { subscribedSubreddits, setSubscribedSubreddits } = useContext(Context);

  return (
    <div
      style={{ minHeight: "150px", display: "flex", flexDirection: "column" }}
    >
      <h3 style={{ fontWeight: "200", textTransform: "uppercase" }}>
        Unsubscribe from subreddits
      </h3>
      {subscribedSubreddits.map((subreddit) => {
        return (
          <SubredditUrl
            props={subreddit}
            username={otherRequester}
            saved={subscribedSubreddits}
            setsaved={setSubscribedSubreddits}
          />
        );
      })}
    </div>
  );
};

export default SubredditUrlList;
