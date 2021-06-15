import React, { useEffect, useState } from "react";
import { Card, Image, Title, InfoBar } from "./StyledComponents";
import otherRequester from "../user";
import RedditLogo from "../Reddit_VerticalLockup_OnWhite.svg";

const PostCard = (post) => {
  let postData = post.postdetails;
  let dataId = post.postdetails.id;
  let voteTarget = otherRequester.getSubmission(dataId);
  const [saved, setSaved] = useState(postData.saved);
  const [vote, setVote] = useState(null);

  const checkForImageInUrl = (url) => {
    return (
      url.substring(url.lastIndexOf(".") + 1) === "jpg" ||
      url.substring(url.lastIndexOf(".") + 1) === "png" ||
      url.substring(url.lastIndexOf(".") + 1) === "gif"
    );
  };

  const regImage = (
    <Image src={postData.url} alt={`Reddit ${postData.title}`} />
  );

  const isSelf = <Title>{postData.title}</Title>;

  const RedditLogoSVG = (
    <img
      src={RedditLogo}
      alt={`Reddit ${postData.title}`}
      style={{ width: "300px" }}
    />
  );

  const submissionThumbnail = (
    <Image src={postData.thumbnail} alt={`Reddit ${postData.title}`} />
  );

  const handleSave = () => {
    setSaved((prevState) => !prevState);
    voteTarget.save();
  };

  const handleVote = (e) => {
    let dataKey = e.target.getAttribute("data-key");

    const submitVote = () => {
      setVote(dataKey);
      return dataKey === "upvote"
        ? voteTarget.upvote().then(postData.ups++)
        : dataKey === "downvote"
        ? voteTarget.downvote().then(postData.downs++)
        : console.log("novote");
    };
    vote !== null ? console.log("areadyVoted") : submitVote();
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
        {checkForImageInUrl(postData.url) === true
          ? regImage
          : postData.is_self === true
          ? isSelf
          : postData.thumbnail === "default"
          ? RedditLogoSVG
          : submissionThumbnail}
      </a>
      <InfoBar vote={vote} saved={saved}>
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
        {saved ? (
          <i onClick={handleSave} className="fas fa-bookmark" />
        ) : (
          <i onClick={handleSave} className="far fa-bookmark" />
        )}
      </InfoBar>
    </Card>
  );
};

export default PostCard;
