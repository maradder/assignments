import React, { useContext } from "react";
import SubredditUrl from "./SubredditUrl";
import { Context } from "../context/Context";
import otherRequester from "../user";

const SubredditUrlList = () => {
  const { subscribedSubreddits, setSubscribedSubreddits } = useContext(Context);

  return (
    <div style={{ minHeight: "150px" }}>
      <h3>Unsubscribe from subreddits</h3>
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
