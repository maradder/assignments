import styled from "styled-components";
import { Link } from "react-router-dom";

////////////// Post Card //////////////////
const Card = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  border: 1px solid #ffffff;
  border-radius: 8px;
  min-width: 50vw;
  max-width: 50vw;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 10px #12121292;

  :first-of-type {
    margin: 15px auto 25px auto;
  }

  @media screen and (max-width: 1000px) {
    min-width: 80vw;
    max-width: 80vw;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: auto;
  min-height: 200px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  margin: auto;
  max-width: 60%;
  overflow: hidden;
  list-style: none;
  text-decoration-line: none;
`;

const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 75%;
  justify-content: space-between;

  .fa-thumbs-up {
    font-size: 2rem;
    color: ${(props) =>
      props.vote === "upvote" ? "green" : `${({ theme }) => theme.text}`};
  }
  .fa-thumbs-down {
    font-size: 32px;
    color: ${(props) =>
      props.vote === "downvote" ? "red" : `${({ theme }) => theme.text}`};
  }
  .fa-bookmark {
    font-size: 32px;
    color: ${(props) =>
      props.saved === true ? "#FF4500" : `${({ theme }) => theme.text}`};
    text-shadow: ${(props) =>
      props.saved === true
        ? "2px 2px 2px black"
        : `${({ theme }) => theme.text}`};
  }

  @media screen and (max-width: 850px) {
    i {
      font-size: 4px;
    }
  }
`;

const SubLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 75px;
  min-width: 100px;
`;

const SubLink = styled.p`
  margin: auto 15px;
  font-size: 24px;

  :hover {
    /* text-shadow: 1px 1px 3px #d4d4d4; */
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.buttonText};
  }
`;
////////////// Header //////////////////
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.secondary};

  h1 {
    color: ${({ theme }) => theme.buttonText};
    align-self: center;
    font-weight: 200;
    letter-spacing: 10.5px;
    border-bottom: 1px solid ${({ theme }) => theme.buttonText};
  }

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const UlHeader = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.secondary};
  margin: 0 auto 16px auto;
  padding: 0;
  width: 100%;

  @media screen and (max-width: 450px) {
    justify-content: space-evenly;
    font-size: 12px;
    width: 40vw;
    font-size: 30px;
  }
`;

const LiHeader = styled(Link)`
  color: ${({ theme }) => theme.buttonText};
  margin: auto 55px;
  font-weight: 300;
  font-size: 24px;
  text-decoration-line: none;

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }

  i {
    font-size: 24px;
  }
`;

const Container = styled.div`
  max-width: 33vw;
  min-width: 33vw;
  display: flex;
  justify-content: center;
  background-color: none;

  @media screen and (max-width: 450px) {
    font-size: 12px;
    max-width: 30vw;
    min-width: 30vw;
  }
`;
////////////// HeaderFixed //////////////////
const StyledHeaderFixed = styled.header`
  position: fixed;
  right: 12vw;
  top: 100px;
  height: 500px;
  min-height: fit-content;
  max-height: fit-content;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin: 0;
  padding: 0;
  border: 1px solid #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 10px #12121292;

  background-color: ${({ theme }) => theme.secondary};

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }

  @media screen and (min-width: 100px) and (max-width: 1250px) {
    right: 8vw;
  }
`;

const UlHeaderFixed = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-between;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.secondary};
  height: 100%;
  margin: 0;
  padding: 16px;

  @media screen and (max-width: 450px) {
    justify-content: space-evenly;
    font-size: 12px;
    width: 40vw;
    font-size: 30px;
  }

  h1 {
    color: ${({ theme }) => theme.buttonText};
    align-self: center;
    font-weight: 200;
    height: 48px;
    letter-spacing: 10.5px;
    border-bottom: 1px solid ${({ theme }) => theme.buttonText};
  }

  i {
    font-size: 36px;
  }
`;

const LiHeaderFixed = styled(Link)`
  color: white;
  margin: auto 55px;
  font-weight: 300;
  font-size: 24px;
  text-decoration-line: none;

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }

  i {
    font-size: 24px;
  }
`;

////////////// Subreddit URL //////////////////
const SubredditName = styled.div`
  margin: 15px auto;
  width: fit-content;
  display: ${(props) => props.props};

  :hover {
    text-shadow: 1px 1px 3px #d4d4d4;
    cursor: pointer;
  }
`;

////////////// Sub to New Sub //////////////////
const SubredditTitle = styled.h4`
  display: ${(props) => (props.props === false ? "inline" : "none")};

  :hover {
    text-shadow: 1px 1px 3px #d4d4d4;
    cursor: pointer;
  }
`;
const ThinButton = styled.button`
  display: flex;
  margin: 16px auto;
  width: 80%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const Form = styled.form`
  min-height: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px auto 0 auto;
`;

const Input = styled.input`
  display: flex;
  margin: auto;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  width: 80%;
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

////////////// TogglerDiv //////////////////
const TogglerDiv = styled.div`
  min-height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export {
  Card,
  Title,
  InfoBar,
  StyledHeader,
  UlHeader,
  LiHeader,
  Image,
  Input,
  SubredditTitle,
  SubLinksContainer,
  SubLink,
  ThinButton,
  Form,
  Container,
  StyledHeaderFixed,
  TogglerDiv,
  UlHeaderFixed,
  LiHeaderFixed,
  SubredditName,
};
