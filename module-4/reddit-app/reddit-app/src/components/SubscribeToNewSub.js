import { useState, useContext } from "react";
import useCounter from "../hooks/useCounter";
import { Context } from "../context/Context";
import { Input, SubredditTitle, ThinButton, Form } from "./StyledComponents";
import { Button, SubmitButton } from "./Buttons";
import otherRequester from "../user";

const SubscribeToNewSub = (props) => {
  const [newSub2Subscribe, setNewSub2Subscribe] = useState("");
  const { count, increment } = useCounter(0);
  const { setSubscribedSubreddits, getSubscriptions } = useContext(Context);
  const handleChange = (e) => {
    setNewSub2Subscribe(e.target.value);
    console.log(newSub2Subscribe);
  };

  // const getSubscriptions = props.refresh;

  const handleSubmit = (e) => {
    e.preventDefault();
    newSub2Subscribe === ""
      ? alert("This field cannot be left empty")
      : otherRequester
          .getSubreddit(newSub2Subscribe)
          .subscribe()
          .then(console.log);
    setNewSub2Subscribe("");
    // setSubscribedSubreddits([]);
    increment();
    setTimeout(getSubscriptions, 10);
    console.log(count);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3
        style={{
          fontWeight: "200",
          textTransform: "uppercase",
          width: "150%",
          alignSelf: "center",
        }}
      >
        Subscribe to new subreddit
      </h3>

      <Input
        name="newSub2Subscribe"
        placeholder="newSubReddit"
        value={newSub2Subscribe}
        onChange={handleChange}
      />
      <SubmitButton type="submit" style={{ marginTop: "8px" }}>
        Subscribe
      </SubmitButton>
    </Form>
  );
};

export default SubscribeToNewSub;
