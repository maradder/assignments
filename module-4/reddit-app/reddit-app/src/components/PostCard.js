import styled from "styled-components";

const Card = styled.div`
  background-color: yellow;
`;

const ImageContainer = styled.img`
  max-height: 30vh;
`;

const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const UpVote = styled.i``;
const DownVote = styled.i``;

const Star = styled.i``;

const post = {
  title: "sample title",
  imgUrl: "sample URL",
  upVoteCount: 45,
  downVoteCount: 3,
  op: "u/sample",
  subreddit: "r/tech",
  favorited: false,
};

const PostCard = () => {
  return (
    <Card>
      <h3>{post.title}</h3>
      <ImageContainer src={post.imgUrl} alt={"Reddit Post"} />
      <InfoBar>
        <UpVote />
        <DownVote />
        <p>{post.oc}</p>
        <Star favorited={post.favorited} />
      </InfoBar>
    </Card>
  );
};
