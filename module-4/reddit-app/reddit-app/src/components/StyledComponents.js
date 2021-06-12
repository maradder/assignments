import styled from "styled-components";
import { Link } from "react-router-dom";

////////////// Post Card //////////////////
const Card = styled.div`
  background-color: none;
  border: 1px solid #ffffff;
  border-radius: 8px;
  min-width: 40vw;
  max-width: 40vw;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 10px #12121292;

  :first-of-type {
    margin: 25px auto;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  max-width: 60%;
  overflow: hidden;
`;

const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 75%;
  justify-content: space-between;
`;

////////////// Header //////////////////
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.secondary};

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const UlHeader = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.secondary};

  margin: 0;
  padding: 0;
  width: 100%;

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
    letter-spacing: 10.5px;
  }
`;

const LiHeader = styled(Link)`
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
  right: 68px;
  top: 100px;
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin: 0;
  padding: 0;
  border: 1px solid #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 10px #12121292;

  background-color: ${({ theme }) => theme.secondary};

  @media screen and (max-width: 450px) {
    font-size: 12px;
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
    border-bottom: 1px solid #343434;
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
const SubredditName = styled.p`
  margin: 15px auto;
  width: fit-content;
  display: ${(props) => props.props};

  :hover {
    text-shadow: 1px 1px 3px #d4d4d4;
    cursor: pointer;
  }
`;

////////////// Subreddit URL //////////////////
const TogglerDiv = styled.div`
  min-height: 150px;
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
  Container,
  StyledHeaderFixed,
  TogglerDiv,
  UlHeaderFixed,
  LiHeaderFixed,
  SubredditName,
};
