import React, { useState, useContext } from "react";
import { SubredditName } from "./StyledComponents";
import { Context } from "../context/Context";

const SubredditUrl = (props) => {
  const subreddit = props.props;
  const otherRequester = props.username;
  const { setSubscribedSubreddits } = useContext(Context);

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [subToUnsubscribe] = useState(subreddit.display_name);
  const handleClick = (e) => setIsDeleteClicked((prevState) => !prevState);
  const confirmDelete = (e) => {
    otherRequester.getSubreddit(subToUnsubscribe).unsubscribe();
    otherRequester
      .getSubscriptions()
      .then((Listing) => setSubscribedSubreddits([...Listing]));
  };

  return (
    <SubredditName
      data-key={subreddit.url}
      key={subreddit.id}
      onClick={handleClick}
      props={{ display: isDeleteClicked === false ? "inline" : "none" }}
    >
      {subreddit.display_name_prefixed}

      <button
        type="button"
        style={{ display: isDeleteClicked === false ? "none" : "inline" }}
        onClick={confirmDelete}
      >
        {`Really unsubscribe from ${subToUnsubscribe}`}
      </button>
      <button
        type="button"
        style={{ display: isDeleteClicked === false ? "none" : "inline" }}
        onClick={() => console.log("cancel")}
      >
        Go Back
      </button>
    </SubredditName>
  );
};

export default SubredditUrl;
