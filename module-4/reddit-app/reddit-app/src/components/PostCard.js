import React, { useEffect, useState } from "react";
import { Card, Title, InfoBar } from "./StyledComponents";
import otherRequester from "../user";

const PostCard = (post) => {
  const [vote, setVote] = useState(null);
  const checkForImageInUrl = (url) => {
    return (
      url.substring(url.lastIndexOf(".") + 1) === "jpg" ||
      url.substring(url.lastIndexOf(".") + 1) === "png" ||
      url.substring(url.lastIndexOf(".") + 1) === "gif"
    );
  };
  let postData = post.postdetails;
  let dataId = post.postdetails.id;
  let voteTarget = otherRequester.getSubmission(dataId);

  const handleVote = (e) => {
    let dataKey = e.target.getAttribute("data-key");
    vote === null ? setVote(dataKey) : setVote(null);
    dataKey === "upvote"
      ? voteTarget.upvote()
      : dataKey === "downvote"
      ? voteTarget.downvote()
      : console.log("novote");

    return console.log(`${dataKey}  ${dataId}`);
  };

  useEffect(() => {
    voteTarget
      .refresh()
      .then((Listing) => () => (postData.ups = Listing.data.ups));
    return () => {
      console.log("Voted and Refreshed");
    };
  }, [vote]);
  return (
    <Card data-tag={dataId}>
      <Title>{postData.title}</Title>
      <p>{postData.subreddit_name_prefixed}</p>
      <a href={postData.url}>
        <img
          src={
            checkForImageInUrl(postData.url) === true
              ? postData.url
              : postData.thumbnail
          }
          alt={`Reddit ${postData.title}`}
          style={{ width: "100%", maxHeight: "auto", minHeight: "200px" }}
        />
      </a>
      <InfoBar>
        <p className="UpVote">
          <i
            data-key="upvote"
            className="far fa-thumbs-up"
            onClick={handleVote}
          />
          {postData.ups}
        </p>
        <p className="DownVote">
          <i
            data-key="downvote"
            className="far fa-thumbs-down"
            onClick={handleVote}
          />
          {postData.downs}
        </p>
      </InfoBar>
    </Card>
  );
};

export default PostCard;
