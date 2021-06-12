import { useState } from "react";
import styled from "styled-components";
import otherRequester from "../user";

const Input = styled.input`
  display: flex;
  margin: auto;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  width: 70%;
  justify-content: center;
  text-align: center;
  background-color: #ffffff32;

  :active,
  :focus-within {
    outline: 1px solid #39ff14;
  }

  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;
const SubscribeToNewSub = () => {
  const [newSub2Subscribe, setNewSub2Subscribe] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setNewSub2Subscribe((prevState) => (prevState, value));
    console.log(newSub2Subscribe);
  };

  const handleNewSubscription = () => {
    otherRequester.getSubreddit(newSub2Subscribe).subscribe();
    setNewSub2Subscribe();
  };

  return (
    <div
      style={{
        minHeight: "100px",
        display: "flex",
        flexDirection: "column",
        margin: "50px auto 0 auto",
      }}
    >
      <h3>Subscribe to new subreddit</h3>

      <Input
        name="newSub2Subscribe"
        placeholder="r/newSubReddit"
        defaultValue=""
        onKeyPress={(e) =>
          e.key === "Enter" ? handleNewSubscription() : handleChange(e)
        }
      />
    </div>
  );
};

export default SubscribeToNewSub;
