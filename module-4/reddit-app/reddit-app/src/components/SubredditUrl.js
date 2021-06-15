import React, { useState, useEffect, useContext } from "react";
import { SubredditName, SubredditTitle } from "./StyledComponents";
import { Context } from "../context/Context";

const SubredditUrl = (props) => {
  const subreddit = props.props;
  const otherRequester = props.username;
  const { setSubscribedSubreddits } = useContext(Context);

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [subToUnsubscribe, setSubToUnsubscribe] = useState();
  const handleClick = (e) => setIsDeleteClicked((prevState) => !prevState);

  const confirmDelete = (e) => {
    otherRequester.getSubreddit(subToUnsubscribe).unsubscribe();
    setTimeout(() => {
      otherRequester
        .getSubscriptions()
        .then(handleClick(e))
        .then((Listing) => setSubscribedSubreddits([...Listing]));
    }, 10);
  };

  useEffect(() => {
    setSubToUnsubscribe(subreddit.display_name);
    console.log(subToUnsubscribe);
    return () => {
      console.log(subToUnsubscribe);
    };
  }, []);

  return (
    <SubredditName data-key={subreddit.url} key={subreddit.id}>
      <SubredditTitle props={isDeleteClicked} onClick={handleClick}>
        {subreddit.display_name_prefixed}
      </SubredditTitle>

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
        onClick={handleClick}
      >
        Go Back
      </button>
    </SubredditName>
  );
};

export default SubredditUrl;
